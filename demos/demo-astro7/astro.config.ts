import { defineConfig } from 'astro/config';
import classicJs from '@halfgray/astro-plugin-classic-js';

export default defineConfig({
	base: '/demo',
	vite: {
		plugins: [classicJs()],
	},
});
