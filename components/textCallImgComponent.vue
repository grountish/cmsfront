<template>
  <div class="container flex flex-col max-w-xl m-auto md:flex-row fadeIn">
    <div class="flex flex-col items-start justify-center w-full py-8 lg:w-1/2">
      <SanityContent :blocks="text" class="w-2/3 mx-auto text-lg text-center " />

      <NuxtLink :to="button.link" class="p-4 m-auto my-5 border border-black">
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
