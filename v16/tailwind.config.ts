import type { Config } from 'tailwindcss';

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./context/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./styles/**/*.{css}',
	],
	theme: {
		extend: {
			colors: {
				black: `var(--black)`,
				jet: `var(--jet)`,
				orange: `var(--orange)`,
				platinum: `var(--platinum)`,
				tangerine: `var(--tangerine)`,
				white: `var(--white)`,
			},
			fontFamily: {
				anton: `var(--anton)`,
				ubunut: `var(--ubuntu)`,
			},
		},
	},
	plugins: [],
} satisfies Config;
