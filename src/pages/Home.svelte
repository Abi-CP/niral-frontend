<!-- ZoomIn.svelte -->

<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  // Import GSAP and ScrollTrigger from CDN
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  const { innerHeight } = window;
const stickyDiv = document.querySelector('.stickyDiv');
const section = document.querySelector('#zoom-out');
const body = document.querySelector('body')

gsap.from("#zoom-out", {
    scale: 165, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight}`,
        scrub: 3,
        onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= 1) {
                body.style.overflowY = "hidden";
                setTimeout(() => {
                body.style.overflowY = "scroll";
                }, 2500);
            }
        }
    }
});

window.addEventListener('scroll', () => {
    const stickyDivTop = stickyDiv.getBoundingClientRect().top;
    if (stickyDivTop <= 0) {
        section.style.opacity = '1';
    } else {
        section.style.opacity = '0';
    }
});


</script>


<div class="emptyDiv"></div>
<div class="stickyDiv"></div>
<div class="section" id="zoom-out">
  <img src="./src/niral.svg" alt="niral 24">
</div>
<div class="emptyDiv"></div>
<div class="emptyDiv"></div>
<div class="emptyDiv"></div>

<style>

</style>