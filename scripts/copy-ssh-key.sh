#!/bin/bash

# Script to copy SSH key to server
# This will allow passwordless SSH access

SERVER_IP="95.179.244.192"
SERVER_USER="root"
SSH_KEY="$HOME/.ssh/sab3a_deploy.pub"

echo "🔑 Copying SSH key to server..."
echo ""
echo "Server: $SERVER_USER@$SERVER_IP"
echo "SSH Key: $SSH_KEY"
echo ""
echo "You will be prompted for the server password."
echo "Password: \$Gz9[s_\$DZ%T3c+Y"
echo ""

# Read the public key
PUB_KEY=$(cat $SSH_KEY)

# Create a command to add the key to authorized_keys
CMD="mkdir -p ~/.ssh && chmod 700 ~/.ssh && echo '$PUB_KEY' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys && echo '✅ SSH key added successfully!'"

# Execute the command on the server
echo "Connecting to server..."
ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "$CMD"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SSH key copied successfully!"
    echo ""
    echo "Testing SSH connection without password..."
    ssh -i ~/.ssh/sab3a_deploy -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP 'echo "✅ Passwordless SSH working!"'
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Setup complete! You can now SSH without password:"
        echo "   ssh -i ~/.ssh/sab3a_deploy $SERVER_USER@$SERVER_IP"
    fi
else
    echo ""
    echo "❌ Failed to copy SSH key"
    echo "Please check the password and try again"
fi

