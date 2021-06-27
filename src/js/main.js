const titles = document.querySelectorAll('[data-anime="list"] > li');
const tl = gsap.timeline({ repeat: -1 });

function handleAnimation() {
   titles.forEach((e) => {
      tl.to(e, { y: 0, duration: 2, ease: Expo.easeout });
      tl.to(e, { y: 100, delay: 1, duration: 1 });
   });
}

handleAnimation();
