/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rickandmortyapi.com',
				port: '',
				pathname: '/api/character/**',
			},
		],
	},
};

('https://rickandmortyapi.com/api/character/avatar/2.jpeg');
export default nextConfig;
