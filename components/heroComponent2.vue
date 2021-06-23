<template>
  <div>
	  {{background}}
  </div>
</template>

<script>

export default {
  name: 'htmlComponent',
  props: ['text', 'background', 'button'],
  methods: {
    urlFor(source) {
      return builder.image(source)
    },
  },mounted(){
	  let a = {...this.background};
	  console.log(a.asset);
  }
}
</script>
