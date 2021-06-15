<template>
<section class="relative text-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col w-full mb-12 text-center">
     <SanityContent :blocks="content" />
    </div>
    <form action="POST" class="mx-auto lg:w-1/2 md:w-2/3"  name="myForm" netlify>
      <div class="flex flex-wrap -m-2">
        <div class="w-1/2 p-2">
          <div class="relative">
            <label for="name" class="text-sm leading-7 text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200">
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200">
          </div>
        </div>
        <div class="w-full p-2">
          <div class="relative">
            <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
          </div>
        </div>
        <div class="w-full p-2">
          <button class="flex p-4 px-8 py-2 mx-auto my-5 border border-black scaleUpk">Send</button>
        </div>
        
      </div>
    </form>
  </div>
</section>
</template>

<script>

export default {
	props: ['content'],
	
}
</script>
