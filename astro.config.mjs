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
			editLink: {
				baseUrl: 'https://github.com/xirf/mathwithcode/edit/main/',
			},
			social: {
				github: 'https://github.com/xirf/mathwithcode',
			},
			sidebar: [
				{
					label: 'Memulai',
					autogenerate: {
						directory: 'learn'
					}
				}
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
