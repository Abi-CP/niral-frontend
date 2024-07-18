<script>
  import { onMount } from "svelte";

  onMount(() => {
    // @ts-ignore
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 260,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  });

</script>


<!-- <div> -->
<div id="particles-js"></div>

<!-- svelte-ignore css-unused-selector -->
<style>
  canvas {
    vertical-align: bottom;
  }

  #particles-js {
    position: fixed;
    z-index: -8;
    top: 0%;
    width: 100vw;
    height: 100vh;
    /* background-color: #232741; */
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: 50% 50%;
    pointer-events: all;
  }

  .count-particles {
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13e8e9;
    font-size: 0.8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
  }

  .js-count-particles {
    font-size: 1.1em;
  }

  #stats,
  .count-particles {
    user-select: none;
    -webkit-user-select: none;
    margin-top: 5px;
    margin-left: 5px;
  }

  #stats {
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }

  .count-particles {
    border-radius: 0 0 3px 3px;
  }
</style>
