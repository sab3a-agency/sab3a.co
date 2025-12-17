#!/bin/bash

# 🚀 Server Setup Script for sab3a.co
# This script sets up the production server for the first time

set -e  # Exit on error

echo "🚀 Starting server setup for sab3a.co..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
    print_error "Please do not run this script as root"
    exit 1
fi

# Update system packages
print_info "Updating system packages..."
sudo apt-get update
sudo apt-get upgrade -y
print_success "System packages updated"

# Install Node.js 20
print_info "Installing Node.js 20..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    print_success "Node.js installed: $(node --version)"
else
    print_success "Node.js already installed: $(node --version)"
fi

# Install Yarn
print_info "Installing Yarn..."
if ! command -v yarn &> /dev/null; then
    sudo npm install -g yarn
    print_success "Yarn installed: $(yarn --version)"
else
    print_success "Yarn already installed: $(yarn --version)"
fi

# Install PM2
print_info "Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
    print_success "PM2 installed: $(pm2 --version)"
else
    print_success "PM2 already installed: $(pm2 --version)"
fi

# Setup PM2 startup
print_info "Setting up PM2 startup..."
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
print_success "PM2 startup configured"

# Create project directory
print_info "Creating project directory..."
sudo mkdir -p /var/www/front-sab3a.co
sudo chown -R $USER:$USER /var/www/front-sab3a.co
print_success "Project directory created: /var/www/front-sab3a.co"

# Create log directory
print_info "Creating log directory..."
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2
print_success "Log directory created: /var/log/pm2"

# Clone repository
print_info "Cloning repository..."
if [ ! -d "/var/www/front-sab3a.co/.git" ]; then
    cd /var/www
    git clone https://github.com/sab3a-agency/sab3a.co front-sab3a.co
    print_success "Repository cloned"
else
    print_info "Repository already exists, pulling latest changes..."
    cd /var/www/front-sab3a.co
    git pull origin main
    print_success "Repository updated"
fi

# Install dependencies
print_info "Installing dependencies..."
cd /var/www/front-sab3a.co
yarn install --frozen-lockfile
print_success "Dependencies installed"

# Build application
print_info "Building application..."
yarn build
print_success "Application built"

# Start PM2
print_info "Starting application with PM2..."
pm2 start ecosystem.config.js
pm2 save
print_success "Application started"

# Show PM2 status
print_info "PM2 Status:"
pm2 status

# Setup firewall (optional)
print_info "Do you want to setup UFW firewall? (y/n)"
read -r setup_firewall
if [ "$setup_firewall" = "y" ]; then
    sudo ufw allow 22/tcp
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    sudo ufw allow 3000/tcp
    sudo ufw --force enable
    print_success "Firewall configured"
fi

echo ""
print_success "🎉 Server setup completed successfully!"
echo ""
print_info "Next steps:"
echo "1. Configure your domain DNS to point to this server"
echo "2. Setup Nginx as reverse proxy (optional)"
echo "3. Setup SSL certificate with Let's Encrypt (optional)"
echo "4. Add GitHub Secrets for automated deployment"
echo ""
print_info "Useful commands:"
echo "  pm2 status              - Check application status"
echo "  pm2 logs sab3a-frontend - View application logs"
echo "  pm2 restart sab3a-frontend - Restart application"
echo "  pm2 stop sab3a-frontend - Stop application"
echo ""
print_success "Application is running on: http://$(hostname -I | awk '{print $1}'):3000"

