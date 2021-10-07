<template>
  <div class="grid overflow-x-hidden">
    <style>
      {{$store.state.style.code}}
    </style>
    <Navv />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>

if (process.client) { 
  var styles =
    '.fadeInC{animation:fadeAn 0.87s;}@keyframes fadeAn {from {opacity: 0;}to {opacity: 1;}}.scaleUpC{animation:scaleU 0.87s;}@keyframes scaleU {from {opacity: 0;transform: scale(0.7);}to {opacity: 1;transform: scale(1);}}.scaleDC{animation:scaleD 0.87s;}@keyframes scaleD {from {opacity: 0;transform: scale(1.2);}to {opacity: 1;transform: scale(1);}}.fadeLC{animation:fadeL 0.87s;}@keyframes fadeL {from {opacity: 0;transform: translateX(-30px);}to {opacity: 1;transform: translateX(0);}} .fadeRC{animation:fadeR 0.87s;}@keyframes fadeR {from {opacity: 0;transform: translateX(30px);}to {opacity: 1;transform: translateX(0);}}'
  let styleSheet = document.createElement('style')
  ;(styleSheet.type = 'text/css'),
    (styleSheet.innerText = styles),
    document.head.appendChild(styleSheet)
  let fadeInTarg = document.querySelectorAll('.fadeIn'),
    scaleDTarg = document.querySelectorAll('.scaleDown'),
    scaleUTarg = document.querySelectorAll('.scaleUp'),
    fadeLeftTarg = document.querySelectorAll('.fadeLeft'),
    fadeRightTarg = document.querySelectorAll('.fadeRight'),
    ae = (e, a) => {
      e.classList.add(a),
        setTimeout(() => {
          e.style.opacity = 1
        }, 50)
    }
  function io(e, a) {
    new IntersectionObserver((t) =>
      t.forEach((t) => ((t) => t.isIntersecting && ae(e, a))(t))
    ).observe(e)
  }
  fadeLeftTarg &&
    fadeLeftTarg.forEach((e) => {
      ;(e.style.opacity = 0), io(e, 'fadeRC')
    }),
    fadeRightTarg &&
      fadeRightTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'fadeLC')
      }),
    fadeInTarg &&
      fadeInTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'fadeInC')
      }),
    scaleDTarg &&
      scaleDTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'scaleDC')
      }),
    scaleUTarg &&
      scaleUTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'scaleUpC')
      })
}
</script>
<style>
</style>
