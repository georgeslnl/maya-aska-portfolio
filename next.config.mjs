/** @type {import('next').NextConfig} */

import { withAnimations } from 'animated-tailwindcss';

const nextConfig =  withAnimations({
    webpack: (config, { isServer }) => {
      // Add a rule to handle MP3 files
      config.module.rules.push({
        test: /\.(mp3|wav)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
  
      return config;
    },
  });
  
  export default nextConfig;
