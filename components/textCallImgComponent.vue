<template>
  <div class="container m-auto flex flex-col md:flex-row fadeIn max-w-xl">
    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start py-8">
      <SanityContent :blocks="text" class=" text-lg w-2/3 mx-auto text-center" />

      <NuxtLink :to="button.link" class="m-auto p-4 border my-5 border-black">
        {{ button.text }}
      </NuxtLink>
    </div>
    <div class="w-full lg:w-1/2 lg:py-6">
      <SanityImage :asset-id="imagen.asset._ref" class="w-full" />
    </div>
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

export default {
  name: 'htmlComponent',
  props: ['text', 'imagen', 'button'],
  methods: {
    urlFor(source) {
      return builder.image(source)
    },
  },
}
</script>
