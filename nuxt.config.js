const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed

export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	target: 'static',

	head: {
		title: 'CMS Project',
		target: 'static',
		meta: [{
				charset: 'utf-8'
			},
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

		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}],
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
		'@nuxtjs/google-fonts',
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
		['@nuxtjs/firebase',
		{
			config: {

				apiKey: "AIzaSyC7swcFzC10wjLzUbVFuO2nliMRgnG_F98",
				authDomain: "mail-api-8cd95.firebaseapp.com",
				databaseURL: "https://mail-api-8cd95-default-rtdb.firebaseio.com",
				projectId: "mail-api-8cd95",
				storageBucket: "mail-api-8cd95.appspot.com",
				messagingSenderId: "418840347555",
				appId: "1:418840347555:web:0a968aff7e1547b0009016"
			},services: {
				auth: {
				  initialize: {
					onAuthStateChangedAction: 'onAuthStateChanged',
				  },
				  ssr: true,
				  emulatorPort: isDev && useEmulators ? 9099 : undefined,
				  disableEmulatorWarnings: false,
				},
				firestore: {
				  memoryOnly: false,
				  enablePersistence: true,
				  emulatorPort: isDev && useEmulators ? 8080 : undefined,
				},
				functions: {
				  emulatorPort: isDev && useEmulators ? 12345 : undefined,
				},
				storage: {
				  emulatorPort: isDev && useEmulators ? 9199 : undefined,
				  emulatorHost: 'localhost',
				},
				database: {
				  emulatorPort: isDev && useEmulators ? 9000 : undefined,
				}, }
		}]
	],
	optimizedImages: {
		optimizeImages: true
	},
	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},
	googleFonts: {
		prefetch: true,
		preconnect: true,
		preload: true,
	
		families: {
		  
		  'Josefin+Sans': { wght: [100, 400]},
		  
		}
	  },
	// Build Configuration (https://go.nuxtjs.dev/config-build)


	// GSAP

	// Global page transition

	sanity: {
		projectId: '1f2vyuv5',
		dataset: 'production',
		minimal: true,
		useCdn: false,
	},
}