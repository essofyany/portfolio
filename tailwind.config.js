/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#00171f',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			keyframes: {
				shimmer: {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
