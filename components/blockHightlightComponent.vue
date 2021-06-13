<template>
 <div class="  w-screen text-center my-16" :style="{'backgroundColor':color.hex}">
   <h1 class="text-4xl py-5 text-white  font-extrabold">{{text}}</h1>
</div>
</template>

<script>
export default {
  props:  ['text','color']
}
</script>

