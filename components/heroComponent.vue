<template>
	<div
		class="container w-screen min-w-full h-screen fadeIn grid place-items-center"
		:style="{
			backgroundImage: 'url(' + urlFor(background.asset._ref) + ')',
		}"
	>
	
		<div
			class="flex flex-col w-full lg:w-2/3 text-center justify-center items-start pt-12 pb-24 px-6"
		>
			<SanityContent :blocks="text" class="text-2xl" />

			<a
				:href="button.link"
				class="m-auto p-4 border my-5 scaleUp border-black"
			>
				{{ button.text }}
			</a>
		</div>
	
	</div>
</template>

<script>
  import imageUrlBuilder from '@sanity/image-url'
const client = {
	projectId: '1f2vyuv5',
	dataset: 'production',
	apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
	useCdn: true, // `false` if you want to ensure fresh data
}

const builder = imageUrlBuilder(client)


export default {
	name: 'htmlComponent',
	props: ['text', 'background', 'button'],
	methods: {
		urlFor(source) {
			return builder.image(source)
		},
	},
}
</script>
