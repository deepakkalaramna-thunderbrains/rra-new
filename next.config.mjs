/** @type {import('next').NextConfig} */
// When running build
const nextConfig = {
    reactStrictMode:true,
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    assetPrefix:"https://www.rragroup.ca/"
}
// const nextConfig = {}
export default nextConfig;