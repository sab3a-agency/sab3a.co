module.exports = {
  apps: [
    {
      name: 'sab3a-frontend',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/front-sab3a.co',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: '/var/log/pm2/sab3a-frontend.log',
      out_file: '/var/log/pm2/sab3a-frontend-out.log',
      error_file: '/var/log/pm2/sab3a-frontend-error.log',
      time: true
    }
  ]
};
