<template>
  <div class="grid grid-cols-1 place-items-center">
    <SanityContent
      class="max-w-2xl space-y-2 text-base text-left"
      :blocks="page.blocks"
      :serializers="serializers"
    />
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import CustomComponent from '../components/CustomComponent.vue'
import ItalicComponent from '../components/ItalicComponent'
import GreenComponent from '../components/GreenComponent'
import YouTubeComponent from '../components/YouTubeComponent'
import heroComponent from '../components/heroComponent'
import textCallImgComponent from '../components/textCallImgComponent'
import richTextComponent from '../components/richTextComponent.vue'
import marqueeComponent from '../components/marqueeComponent.vue'
import blockHightlightComponent from '../components/blockHightlightComponent.vue'
import contactComponent from '../components/contactComponent.vue'
const query = groq`*[_type=="Page"]`

export default {
  data() {
    return {
      serializers: {
        types: {
          image: CustomComponent,
          youtube: YouTubeComponent,
          hero: heroComponent,
          textCallImg: textCallImgComponent,
          richText: richTextComponent,
          marquee: marqueeComponent,
          blockHighlight: blockHightlightComponent,
          contact: contactComponent,
        },
        marks: {
          underline: ItalicComponent,
          highlight: GreenComponent,
        },
      },
    }
  },
  async asyncData({ $sanity, route }) {
    const xtras = await $sanity.fetch(query)
    let filx = xtras.find((x) => x.name == 'index')
    const page = filx
    return { page }
  },
}
</script>

<style>
</style>