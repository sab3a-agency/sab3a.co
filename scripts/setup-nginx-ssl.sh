#!/bin/bash

# 🔒 Setup Nginx and SSL for sab3a.co
# This script installs Nginx, configures it as reverse proxy, and sets up SSL with Let's Encrypt

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

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

echo "🔒 Setting up Nginx and SSL for sab3a.co..."
echo ""

# Get domain name
print_info "Enter your domain name (e.g., sab3a.co):"
read -r DOMAIN

if [ -z "$DOMAIN" ]; then
    print_error "Domain name is required"
    exit 1
fi

print_info "Enter your email for Let's Encrypt notifications:"
read -r EMAIL

if [ -z "$EMAIL" ]; then
    print_error "Email is required"
    exit 1
fi

# Install Nginx
print_info "Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    sudo apt-get update
    sudo apt-get install -y nginx
    print_success "Nginx installed"
else
    print_success "Nginx already installed"
fi

# Install Certbot
print_info "Installing Certbot..."
if ! command -v certbot &> /dev/null; then
    sudo apt-get install -y certbot python3-certbot-nginx
    print_success "Certbot installed"
else
    print_success "Certbot already installed"
fi

# Create temporary Nginx config (without SSL)
print_info "Creating temporary Nginx configuration..."
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
print_info "Enabling site..."
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_info "Testing Nginx configuration..."
sudo nginx -t
print_success "Nginx configuration is valid"

# Restart Nginx
print_info "Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx
print_success "Nginx restarted"

# Get SSL certificate
print_info "Obtaining SSL certificate from Let's Encrypt..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL --redirect

print_success "SSL certificate obtained and configured"

# Setup auto-renewal
print_info "Setting up SSL certificate auto-renewal..."
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
print_success "Auto-renewal configured"

# Test SSL renewal
print_info "Testing SSL renewal..."
sudo certbot renew --dry-run
print_success "SSL renewal test passed"

# Show Nginx status
print_info "Nginx Status:"
sudo systemctl status nginx --no-pager

echo ""
print_success "🎉 Nginx and SSL setup completed successfully!"
echo ""
print_info "Your website is now available at:"
echo "  https://$DOMAIN"
echo "  https://www.$DOMAIN"
echo ""
print_info "Useful commands:"
echo "  sudo nginx -t                    - Test Nginx configuration"
echo "  sudo systemctl restart nginx     - Restart Nginx"
echo "  sudo systemctl status nginx      - Check Nginx status"
echo "  sudo certbot renew              - Manually renew SSL certificate"
echo "  sudo certbot certificates       - List SSL certificates"
echo ""

