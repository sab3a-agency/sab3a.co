#!/bin/bash

# Remote Setup Script
# This script connects to the server and runs the setup

SERVER_IP="95.179.244.192"
SERVER_USER="root"
SERVER_PASS='$Gz9[s_$DZ%T3c+Y'

echo "🔐 Connecting to server $SERVER_IP..."

# Create a temporary script with all commands
cat > /tmp/server_commands.sh << 'EOFSCRIPT'
#!/bin/bash
set -e

echo "🚀 Starting server setup..."

# Update system
echo "📦 Updating system..."
apt-get update -y
apt-get upgrade -y

# Install Node.js 20
echo "📦 Installing Node.js 20..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi
echo "✅ Node.js: $(node --version)"

# Install Yarn
echo "📦 Installing Yarn..."
if ! command -v yarn &> /dev/null; then
    npm install -g yarn
fi
echo "✅ Yarn: $(yarn --version)"

# Install PM2
echo "📦 Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi
echo "✅ PM2: $(pm2 --version)"

# Setup PM2 startup
echo "⚙️  Setting up PM2 startup..."
pm2 startup systemd -u root --hp /root || true

# Install Git if not present
if ! command -v git &> /dev/null; then
    echo "📦 Installing Git..."
    apt-get install -y git
fi

# Create project directory
echo "📁 Setting up project directory..."
mkdir -p /var/www/front-sab3a.co
cd /var/www/front-sab3a.co

# Clone or update repository
if [ ! -d ".git" ]; then
    echo "📥 Cloning repository..."
    git clone https://github.com/sab3a-agency/sab3a.co .
else
    echo "🔄 Updating repository..."
    git fetch origin
    git reset --hard origin/main
    git pull origin main
fi

# Install dependencies
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# Build application
echo "🔨 Building application..."
yarn build

# Create log directory
mkdir -p /var/log/pm2

# Stop existing PM2 process if running
pm2 stop sab3a-frontend 2>/dev/null || true
pm2 delete sab3a-frontend 2>/dev/null || true

# Start PM2
echo "🚀 Starting application..."
pm2 start ecosystem.config.js
pm2 save

# Show status
echo ""
echo "✅ Setup completed successfully!"
echo ""
pm2 status
echo ""
echo "📊 Application running on: http://95.179.244.192:3000"

EOFSCRIPT

# Copy script to server and execute
echo "📤 Uploading setup script to server..."
scp -o StrictHostKeyChecking=no /tmp/server_commands.sh $SERVER_USER@$SERVER_IP:/tmp/

echo "🔧 Executing setup on server..."
ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP 'bash /tmp/server_commands.sh'

echo ""
echo "✅ Remote setup completed!"
echo "🌐 Your application should be running at: http://$SERVER_IP:3000"

