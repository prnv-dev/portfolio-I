/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Particles background releases its WebGL context on unmount. Strict Mode's
  // dev-only mount → unmount → remount would leave it with a lost context, so it's off.
  reactStrictMode: false,
};

module.exports = nextConfig;
