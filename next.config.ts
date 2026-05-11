import type { NextConfig } from 'next'

const cmsHostname = process.env.CMS_URL ? new URL(process.env.CMS_URL).hostname : ''

const nextConfig: NextConfig = {
  output: 'export',
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
    remotePatterns: cmsHostname ? [{ protocol: 'https', hostname: cmsHostname }] : [],
    qualities: [100, 75],
  },
}

export default nextConfig
