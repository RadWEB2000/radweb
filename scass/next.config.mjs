/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"img.freepik.com"
            },
            {
                hostname:"www.sunrisesystem.pl"
            },
            {
                hostname:"cdn.pixabay.com"
            },
        ]
    }
};

export default nextConfig;
