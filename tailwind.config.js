/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#FFF',
				secondary: '#000',
				card: ' #201d1d',
				border: '#6c086c',
				default: '#f1f0f0',
			},
			spacing: {
				100: '100vw',
				960: '96rem',
				divided: '50%',
				sixty: '60%',
			},
			fontSize: {
				convertRem: '62.5%',
			},
		},
	},
	plugins: [],
};
