export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	target: 'static',

	head: {
		title: 'CMS Project',
		target: 'static',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: `CMS Project`,
			},
		],
		
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	
	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: ['~/plugins/preview.client.js'],


	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'nuxt-compress',
		'nuxt-build-optimisations',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
	
		'@nuxtjs/sanity/module',

		[
			'nuxt-compress',
			{
				gzip: {
					cache: true,
				},
				brotli: {
					threshold: 10240,
				},
			},
		],
	],
	optimizedImages: {
		optimizeImages: true
	  },
	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	

	// GSAP

	// Global page transition
	
sanity: {
	projectId: '1f2vyuv5',
	dataset:'production',
	minimal: true,
	useCdn: false,
	},
}
