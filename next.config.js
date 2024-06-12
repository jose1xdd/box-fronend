/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['storage.googleapis.com'],
	  },
	  distDir: 'dist'
};

module.exports = nextConfig;
