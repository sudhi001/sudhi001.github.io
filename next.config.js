/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const nextConfig = {
   ...(!isDev ? { output: 'export' } : {}),
}
module.exports = nextConfig

