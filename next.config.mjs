/** @type {import('next').NextConfig} */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

// One pragmatic CSP for the whole site including /studio (Sanity needs
// websockets/CDN assets; connect-src/img-src are kept permissive on purpose).
// The next/image optimizer host allowlist is separately enforced via
// images.remotePatterns below.
const isDev = process.env.NODE_ENV !== 'production';

// React dev tooling (dev overlay, call-stack reconstruction) requires eval()
// in development. Production builds never use it, so 'unsafe-eval' is only
// granted for `next dev`.
const scriptSrc = isDev
  ? "'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com"
  : "'self' 'unsafe-inline' https://va.vercel-scripts.com";
// HMR/WebSocket tooling in dev connects over ws://localhost (not wss://).
const connectSrc = isDev ? "'self' https: wss: ws:" : "'self' https: wss:";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  'img-src \'self\' data: blob: https:',
  "font-src 'self' data:",
  `connect-src ${connectSrc}`,
  "object-src 'none'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
];

const nextConfig = {
  turbopack: {
    root,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
