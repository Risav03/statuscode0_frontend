/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["ipfs.io"],
  },
    reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      };
  
      return config;
    },
  };