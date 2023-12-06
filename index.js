/// <reference types="astro" />
/// <reference types="./index.d.ts" />
/** @typedef {import('astro').AstroConfig}AstroConfig */
/** @typedef {import('astro').AstroIntegration}AstroIntegration */
// implementation: wip
// See https://github.com/withastro/astro/blob/main/packages/integrations/markdoc/src/content-entry-type.ts
/**
 * @param {relementjs_astro_config_T}[config]
 * @returns {{name: string, hooks: {'astro:config:setup': ((function(*): Promise<void>)|*)}}}
 * @private
 */
export default function relementjs_astro_(config) {
	/** @type {AstroConfig} */
	let astro_config
	return {
		name: '@astrojs/markdoc',
		hooks: {
			'astro:config:setup': async params=>{
				/** @type {SetupHookParams} */
				const { updateConfig, addContentEntryType } = params
				astro_config = params.config;
				addContentEntryType(
					await getContentEntryType({ astro_config, config })
				);

				updateConfig({
					vite: {
						ssr: {
							external: ['@astrojs/markdoc/prism', '@astrojs/markdoc/shiki'],
						},
					},
				});
			},
		},
	};
}
export async function getContentEntryType({
	astro_config,
	config,
}) {
	return {

	}
}
