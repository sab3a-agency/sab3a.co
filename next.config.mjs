/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.sab3a.co",
                port: "",
                pathname: "/storage/images/**",
            },
        ],
    },
};

export default nextConfig;
