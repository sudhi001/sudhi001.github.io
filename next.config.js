/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export' 
}
module.exports = nextConfig

// ...(process.env.NODE_ENV === 'production' ? {  output: 'export' } : {})
