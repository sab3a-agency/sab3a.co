#!/bin/bash

# Automated Server Setup Script
# This script will setup everything automatically

set -e

SERVER_IP="95.179.244.192"
SERVER_USER="root"
PROJECT_DIR="/var/www/front-sab3a.co"
SSH_KEY="$HOME/.ssh/sab3a_deploy"

echo "🚀 Automated Server Setup for sab3a.co"
echo "========================================"
echo ""

# Check if SSH key exists
if [ ! -f "$SSH_KEY" ]; then
    echo "❌ SSH key not found at $SSH_KEY"
    echo "Please run: ssh-keygen -t rsa -b 4096 -f ~/.ssh/sab3a_deploy"
    exit 1
fi

echo "📋 Setup Summary:"
echo "  Server: $SERVER_USER@$SERVER_IP"
echo "  Project Dir: $PROJECT_DIR"
echo "  SSH Key: $SSH_KEY"
echo ""

# Function to run commands on server
run_on_server() {
    ssh -i $SSH_KEY -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "$1"
}

echo "🔍 Testing SSH connection..."
if run_on_server "echo 'Connection successful'"; then
    echo "✅ SSH connection working!"
else
    echo "❌ SSH connection failed!"
    echo ""
    echo "Please copy your SSH key to the server first:"
    echo "  cat $SSH_KEY.pub"
    echo ""
    echo "Then on the server, run:"
    echo "  mkdir -p ~/.ssh && echo 'YOUR_PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
    exit 1
fi

echo ""
echo "📦 Installing required packages on server..."
run_on_server "apt-get update -y && apt-get upgrade -y"

echo "📦 Installing Node.js 20..."
run_on_server "command -v node || (curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs)"

echo "📦 Installing Yarn..."
run_on_server "command -v yarn || npm install -g yarn"

echo "📦 Installing PM2..."
run_on_server "command -v pm2 || npm install -g pm2"

echo "⚙️  Setting up PM2 startup..."
run_on_server "pm2 startup systemd -u root --hp /root || true"

echo "📦 Installing Git..."
run_on_server "command -v git || apt-get install -y git"

echo "📁 Creating project directory..."
run_on_server "mkdir -p $PROJECT_DIR"

echo "📥 Cloning/Updating repository..."
run_on_server "cd $PROJECT_DIR && if [ -d .git ]; then git fetch origin && git reset --hard origin/main && git pull origin main; else git clone https://github.com/sab3a-agency/sab3a.co .; fi"

echo "📦 Installing dependencies..."
run_on_server "cd $PROJECT_DIR && yarn install --frozen-lockfile"

echo "🔨 Building application..."
run_on_server "cd $PROJECT_DIR && yarn build"

echo "📁 Creating log directory..."
run_on_server "mkdir -p /var/log/pm2"

echo "🚀 Starting application with PM2..."
run_on_server "cd $PROJECT_DIR && pm2 stop sab3a-frontend 2>/dev/null || true && pm2 delete sab3a-frontend 2>/dev/null || true && pm2 start ecosystem.config.js && pm2 save"

echo ""
echo "✅ Server setup completed successfully!"
echo ""
echo "📊 Application Status:"
run_on_server "pm2 status"

echo ""
echo "🌐 Application URL: http://$SERVER_IP:3000"
echo ""
echo "📝 Next Steps:"
echo "  1. Add GitHub Secrets (see SERVER_SETUP_COMMANDS.md)"
echo "  2. Create a new release to test automated deployment"
echo "  3. (Optional) Setup Nginx and SSL"
echo ""

