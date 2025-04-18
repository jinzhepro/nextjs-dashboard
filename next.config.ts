import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 禁用使用 pnpm，强制使用 npm
  packageManager: 'npm'
};

export default nextConfig;
