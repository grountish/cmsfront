<template>
  <div
    v-if="background"
    class="grid w-screen h-screen min-w-full bg-cover fadeIn place-items-center"
    :style="{
      backgroundImage:
        'url(' +
        urlFor(background.asset._ref)
          .width(background3 ? background3 : 1000)
          .url() +
        ')',
    }"
  >
    <div
      class="
        flex flex-col
        items-start
        justify-center
        w-full
        px-6
        pt-12
        pb-24
        text-center
        lg:w-2/3
      "
    >
      <SanityContent :blocks="returnText(text)" class="mx-auto text-4xl" />

      <a
        :href="button.link"
        class="p-4 m-auto my-5 border border-black scaleUp"
      >
        {{ returnText(button.text) }}
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
  data() {
    return {
      with: 1000,
      background3:1000
    }
  },
  methods: {
    urlFor(source) {
      return builder.image(source)
    },
    returnText(text) {
      return text[this.$store.state.lang]
    },
    returnWidth() {
      process.client && window && window.innerWidth < 600
        ? (this.with = 600)
        : (this.with = 1000)
    },
  },
    created() {
      if(process.client)
      {this.background3 = window.innerWidth < 600 ? 800 : 1200}
    },
}
</script>