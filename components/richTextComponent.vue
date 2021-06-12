<template>
  <div class="container m-auto flex h-screen flex-col fadeIn md:flex-row max-w-xl">
    <div class="flex flex-col w-full justify-center  items-start py-8">
 <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" style="top:40px;left:-140px" class="absolute  z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-36 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="9a29985a-fc16-419b-ae53-1670f5ca4491" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)" width="52" height="24"></rect>
          </svg>
          <span class=""></span>
        </span>
      </h2>
      <SanityContent
        :blocks="content"
        serializers:serializers
        class="text-lg w-2/3 mx-auto text-center relative border border-black p-20"
      />
    </div>
  </div>
</template>

<script>

import CustomComponent from './CustomComponent.vue'
import ItalicComponent from './ItalicComponent.vue'

export default {
  name: 'htmlComponent',
  props: ['content'],
  data() {
    return {
      serializers: {
        types: {
          image: CustomComponent,
        },
        marks: {
          underline: ItalicComponent,
        },
      },
    }
  }
}
</script>
