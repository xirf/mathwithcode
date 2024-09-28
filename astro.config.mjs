// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Unocss from "unocss/astro"

// https://astro.build/config
export default defineConfig({
	integrations: [
		Unocss({

		}),
		starlight({
			title: 'Math with Code',
			social: {
				github: 'https://github.com/xirf/mathwithcode',
			},
			sidebar: [
				],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Bahasa Indonesia',
					lang: 'id',
				}
			}
		}),
	],
});
