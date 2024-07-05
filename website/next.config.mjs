/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:"cms.rad-web.pl"
            }
        ]
    }
};

export default nextConfig;
