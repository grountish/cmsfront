<template>
<div>

  <iframe class=" w-full h-84"
    :src="youtubeLink"
    frameborder="0"
    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
</template>

<script>
export default {
  name: 'YouTubeComponent',
  props: ['url'],
  computed: {
    youtubeLink() {
      let id = this.url.split('https://www.youtube.com/watch?v=')[1]
      return `https://www.youtube.com/embed/` + id
    },
  },
}
</script>

