
<template>
  <nav class="flex justify-between w-screen px-10 py-4">
    <div>
      <h1 class="text-lg font-bold uppercase">Laracasts</h1>
    </div>

    <div>
      <a href="#" class="px-2">Home</a>
      <a href="#" class="px-2">About</a>
      <a href="#" class="px-2">Blog</a>
      <a href="#" class="px-2">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
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
  },
}
</script>
<style>
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
  background-color: white;
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