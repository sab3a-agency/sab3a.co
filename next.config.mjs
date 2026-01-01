/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.sab3a.co',
        port: '',
        pathname: '/storage/images/**'
      }
    ],
    qualities: [25, 50, 75, 90, 100]
  },
  async redirects() {
    return [
      { source: '/servicesPage', destination: '/projects', permanent: true },
      { source: '/OurePackagesPage', destination: '/packages', permanent: true },
      { source: '/BlogPage', destination: '/blog', permanent: true },
      { source: '/BlogPage/:path*', destination: '/blog/:path*', permanent: true },
      { source: '/ConcatUS', destination: '/contact-us', permanent: true },
      { source: '/OurTeamPage', destination: '/team', permanent: true }
    ];
  }
};

export default nextConfig;
