<script>
  import { onMount } from "svelte";
  import About from "../components/home/About.svelte";
  import Hero from "../components/home/Hero.svelte";
  import Events from "../components/home/Events.svelte";
  import Footer from "../components/home/Footer.svelte";

  let img;

  onMount(async () => {
    img = new Image();
    img.src = "../assets/gif/gradient4.gif";
    img.onload = () => {
      const bgAnimImg = document.querySelector(".bgAnim img");
      if (bgAnimImg instanceof HTMLImageElement) {
        bgAnimImg.src = img.src;
      }
    };
  });
</script>

<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<div class="l100vh">
  <Hero />
  <About />
  <Events />
  <Footer />
</div>

<style>
  .bgAnim {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100dvh;
    width: 100%;
    z-index: -10;
  }
  .bgAnim img {
    width: 100%;
    height: 100vh;
  }
  .bgBlur {
    position: fixed;
    overflow-x: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    z-index: -9;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
</style>
