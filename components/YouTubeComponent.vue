<template>
<div>

  <iframe :class="[returnSize, ' h-84 mx-auto']"
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
  props: ['url','size'],
  computed: {
    youtubeLink() {
      let id = this.url.split('https://www.youtube.com/watch?v=')[1]
      return `https://www.youtube.com/embed/` + id
    },
    returnSize(){
      return  this.size[0] == 'small' ? 'w-1/3' : this.size[0] == 'medium' ? 'w-1/2' : 'w-full';
    }
  },
}
</script>

