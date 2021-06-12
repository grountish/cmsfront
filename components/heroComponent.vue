<template>
	<div
		class="container w-screen h-screen fadeIn grid place-items-center "
		:style="{
			backgroundImage: 'url(' + urlFor(background.asset._ref) + ')',
		}"
	>
		<!--Left Col-->
		<div
			class="flex flex-col w-full lg:w-2/3 text-center justify-center items-start pt-12 pb-24 px-6"
		>
			<SanityContent :blocks="text" class=" text-2xl" />

			<NuxtLink :to="button.link" class="m-auto p-4 border my-5 scaleUp border-black"> {{ button.text }} </NuxtLink>
		</div>
		<!--Right Col-->
	
	</div>
</template>

<script>
const client = {
	projectId: '1f2vyuv5',
	dataset: 'production',
	apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
	useCdn: true, // `false` if you want to ensure fresh data
}
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
	return builder.image(source)
}
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
