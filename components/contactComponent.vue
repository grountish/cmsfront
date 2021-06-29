


<template>
  <section class="relative text-black body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col w-full mb-12 text-center">
        <SanityContent :blocks="content" />
      </div>

      <div class="mx-auto text-center lg:w-1/2 md:w-2/3" name="phorm">
        <input
          type="text"
          id="fname"
          name="fname"
          v-model="name"
          placeholder="Name"
          class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
        /><br /><br />

        <input
          type="text"
          id="lname"
          name="lname"
          v-model="email"
          placeholder="Email"
          class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
        /><br /><br />

        <textarea
          name="message"
          placeholder="Message"
          v-model="msg"
          class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
        ></textarea>
        <button
          @click="writeToFirestore"
          class="px-8 py-3 mx-auto my-3 text-white transition-all duration-500 bg-black rounded-md hover:border-black hover:shadow hover:bg-white hover:text-black focus:text-white"
          value="Send"
        >
          Send
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      name: '',
      email: '',
      msg: '',
    }
  },
  methods: {
    async writeToFirestore() {
      const messageRef = this.$fire.database.ref('messages')
      try {
        await messageRef.set({
          name: this.name,
          email: this.email,
          message: this.msg,
        })
      } catch (e) {
        alert(e)
        return
      }
    },
  },
}
</script>
