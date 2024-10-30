/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:`cdn.pixabay.com`
            },
            {
                hostname:`www.sunrisesystem.pl`
            },
            {
                hostname:`lumo.pl`
            },
            {
                hostname:`4real.pl`
            },
            {
                hostname:"widoczni.com"
            },
            {
                hostname:"www.ministerstworeklamy.pl"
            }
        ]
    }
};

export default nextConfig;
