/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "136.244.85.31",
                port: "",
                pathname: "/storage/images/**",
            },
        ],
    },
};

export default nextConfig;
