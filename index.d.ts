import type { ContentEntryType, HookParameters } from 'astro'
export type relementjs_astro_config_T = {
	foo?:number
}
export type SetupHookParams = HookParameters<'astro:config:setup'>&{
	// `contentEntryType` is not a public API
	// Add type defs here
	addContentEntryType:(contentEntryType:ContentEntryType)=>void
}
