<template>
  <nav
    class="top-0 z-10 flex flex-wrap items-center justify-between w-full px-10 py-1 "
  >
    <div class="flex items-center flex-shrink-0 mr-6 text-white">
      <NuxtLink
        class="text-black no-underline logo hover:text-PrimaryGreen hover:no-underline"
        to="/"
      >
        <span class="pl-2 text-2xl font-bold"
          ><i class="em em-grinning"></i> Home</span
        >
      </NuxtLink>
    </div>

    <div class="block lg:hidden">
      <button
        id="nav-toggle"
        @click="toggleNav"
        class="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded focus:outline-none hover:text-black hover:border-black"
      >
        <svg
          class="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      :class="[
        toggle ? 'h-40' : 'h-0',
        'w-full flex-grow lg:flex lg:items-center lg:w-auto lg:pt-0',
      ]"
      id="nav-content"
    >
      <ul
        id="link-list"
        :class="[
          linkse ? ' opacity-100 ' : ' opacity-0 sm:hidden  ',
          'pt-4 lg:pt-0 lg:opacity-100 list-reset lg:flex justify-end flex-1 items-center uppercase text-xs text-PrimaryGreen',
        ]"
      >
        <button @click="changeEs" class="px-3 mx-3 text-black border">ES</button>
        <button @click="changeEn" class="px-3 mx-3 text-black border">EN</button>

        <div v-for="(lin, ind) in xtraLinks" :key="lin.name">
          <li class="mr-3">
            <NuxtLink
              :class="[
                ind == 0
                  ? 'opacity-0'
                  : 'inline-block px-4 py-2 no-underline transition-all duration-200 hover:text-green-900',
              ]"
              :to="'/x/' + lin.name"
              >{{ lin.name }}</NuxtLink
            >
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="Page"]`

export default {
  data: () => ({
    toggle: false,
    xtraLinks: '',
    linkse: false,
  }),
  methods: {
    toggleNav() {
      this.toggle = !this.toggle
      this.linkse
        ? (this.linkse = !this.linkse)
        : setTimeout(() => {
            this.linkse = !this.linkse
          }, 300)
    },
    changeEn() {
      this.$store.commit('SET_lang', 'en')
    },
    changeEs() {
      this.$store.commit('SET_lang', 'es')
    },
  },
  async fetch() {
    const xtraLinks = await this.$sanity.fetch(query)
    this.xtraLinks = xtraLinks
  },mounted(){
    let lastScrollTop = 30
    let nav = document.getElementsByTagName('nav')[0]

    document.addEventListener(
      'scroll',
      () => {
        let st = window.pageYOffset || document.documentElement.scrollTop
        if (st == 0) {
          nav.classList.add('transparent')
        }

        if (st > lastScrollTop) {
          nav.classList.remove('is-floating')
          nav.classList.add('is-not')
        }
        if (st < lastScrollTop && st > 0) {
          nav.classList.remove('is-not')
          nav.classList.add('is-floating')
        }
        if (st == 0) {
          nav.classList.add('transparent')
          nav.classList.remove('is-floating')
        }
        lastScrollTop = st <= 0 ? 0 : st
      },
      false
    )
  }
}
</script>

<style>
/* #link-list :first-child{
display: none;} */
#nav-content {
  transition: all 0.31s;
}
#nav-content ul {
  transition: all 0.11s;
}
a.nuxt-link-exact-active {
  color: #305a39;
  border-bottom: 1px solid gray;
}
.logo {
  border-bottom: none !important;
}
@keyframes slide-nav-down {
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-nav-up {
  100% {
    transform: translateY(100%);
  }
}

.is-floating {
  background-color: rgba(255, 255, 255, .87) !important;
  transform: translateY(-100%);
  animation: slide-nav-down 0.5s ease;
  animation-fill-mode: both;
  opacity: 1;
}

.is-not {
  opacity: 0;
}

nav {
  transition: all 0.5s;
  position: fixed;
  top: 0;
}

.transparent {
  background: transparent;
}
</style>
