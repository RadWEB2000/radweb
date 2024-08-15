/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //       config.optimization.splitChunks.cacheGroups = {
    //         default: false,
    //         vendors: false,
    //         framework: {
    //           chunks: 'all',
    //           name: 'framework',
    //           test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/
    //         }
    //       };
    //     }
    //     return config;
    //   },
};

export default nextConfig;
