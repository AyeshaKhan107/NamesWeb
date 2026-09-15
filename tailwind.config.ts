import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				ink: '#18231d',
				mint: '#eaf5ed',
				sage: '#5c8f68',
				cream: '#f8fbf8',
			},
		},
	},
	plugins: [],
};

export default config;
