#!/bin/bash

# Server Setup Script for sab3a.co
# This script will be run on the server

SERVER_IP="95.179.244.192"
SERVER_USER="root"
PROJECT_DIR="/var/www/front-sab3a.co"

echo "🚀 Setting up deployment for sab3a.co..."

# Check if we're on the server
if [ ! -d "/root" ]; then
    echo "❌ This script should be run on the server"
    echo "Please copy this script to the server and run it there"
    exit 1
fi

# Update system
echo "📦 Updating system packages..."
apt-get update
apt-get upgrade -y

# Install Node.js 20
echo "📦 Installing Node.js 20..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
    echo "✅ Node.js installed: $(node --version)"
else
    echo "✅ Node.js already installed: $(node --version)"
fi

# Install Yarn
echo "📦 Installing Yarn..."
if ! command -v yarn &> /dev/null; then
    npm install -g yarn
    echo "✅ Yarn installed: $(yarn --version)"
else
    echo "✅ Yarn already installed: $(yarn --version)"
fi

# Install PM2
echo "📦 Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    echo "✅ PM2 installed: $(pm2 --version)"
else
    echo "✅ PM2 already installed: $(pm2 --version)"
fi

# Setup PM2 startup
echo "⚙️  Setting up PM2 startup..."
pm2 startup systemd -u root --hp /root
pm2 save

# Create project directory
echo "📁 Creating project directory..."
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Clone or update repository
if [ ! -d ".git" ]; then
    echo "📥 Cloning repository..."
    git clone https://github.com/sab3a-agency/sab3a.co .
else
    echo "🔄 Updating repository..."
    git pull origin main
fi

# Install dependencies
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# Build application
echo "🔨 Building application..."
yarn build

# Create log directory
echo "📁 Creating log directory..."
mkdir -p /var/log/pm2
chown -R root:root /var/log/pm2

# Start or restart PM2
echo "🚀 Starting application with PM2..."
if pm2 list | grep -q "sab3a-frontend"; then
    pm2 restart sab3a-frontend
else
    pm2 start ecosystem.config.js
fi
pm2 save

# Show PM2 status
echo ""
echo "✅ Setup completed!"
echo ""
pm2 status
echo ""
echo "📊 Application is running on port 3000"
echo "🌐 Access it at: http://$SERVER_IP:3000"

