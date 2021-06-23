<template>
	<section class="relative text-black body-font">
		<div class="container px-5 py-24 mx-auto">
			<div class="flex flex-col w-full mb-12 text-center">
				<SanityContent :blocks="content" />
			</div>
			<!-- <form action="POST" class="mx-auto lg:w-1/2 md:w-2/3">
				<div class="flex flex-wrap -m-2">
					<div class="w-1/2 p-2">
						<div class="relative">
							<label
								for="name"
								class="text-sm leading-7 text-gray-600"
								>Name</label
							>
							<input
								type="text"
								id="name"
								name="name"
								class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
							/>
						</div>
					</div>
					<div class="w-1/2 p-2">
						<div class="relative">
							<label
								for="email"
								class="text-sm leading-7 text-gray-600"
								>Email</label
							>
							<input
								type="email"
								id="email"
								name="email"
								class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
							/>
						</div>
					</div>
					<div class="w-full p-2">
						<div class="relative">
							<label
								for="message"
								class="text-sm leading-7 text-gray-600"
								>Message</label
							>
							<textarea
								id="message"
								name="message"
								class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
							></textarea>
						</div>
					</div>
					<div class="w-full p-2">
						<button
							class="flex p-4 px-8 py-2 mx-auto my-5 border border-black scaleUpk"
						>
							Send
						</button>
					</div>
				</div>
			</form> 
			 <form action="/" method="POST" name="myForm" netlify>
				<label for="name" class="text-sm leading-7 text-gray-600">Name</label>
				<input
					type="text"
					id="name"
					class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
					name="name"
				/><br /><br />
				<label class="text-sm leading-7 text-gray-600" for="lname"
					>Last name:</label
				>
				<input
					class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
					type="text"
					id="lname"
					name="lname"
				/><br /><br />
        <label for="lmessage"  class="text-sm leading-7 text-gray-600">Message</label>
            <textarea id="lmessage" name="lmessage" class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea> 
				 <input class="text-sm leading-7 text-gray-600" type="button" value="Send form data!"> 
			<input
					class="px-5 py-1 m-3 text-white transition-all duration-500 bg-black rounded-md hover:border-black hover:shadow hover:bg-white hover:text-black focus:text-gray-800"
					type="submit"
					value="submit"
				/>
			</form>  -->

			<form
				action="/sent"
				method="get"
				class="mx-auto text-center lg:w-1/2 md:w-2/3"
				name="phorm"
				netlify
			>
				
				<input type="text" id="fname" name="fname" placeholder="Name" class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" /><br /><br />
				
				<input type="text" id="lname" name="lname" placeholder="Email" class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" /><br /><br />
				
				<textarea name="message" placeholder="Message" class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
				<!-- <input type="text" id="mes" name="mes" /><br /><br /> -->
				<input
					type="submit"
					class="px-8 py-3 mx-auto my-3 text-white transition-all duration-500 bg-black rounded-md hover:border-black hover:shadow hover:bg-white hover:text-black focus:text-gray-800"
					value="Send"
				/>
			</form>
		</div>
		
	</section>
</template>

<script>
export default {
	props: ['content'],
}
</script>
