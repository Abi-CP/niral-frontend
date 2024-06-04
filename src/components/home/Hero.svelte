<script>
  import { onMount } from "svelte";
  import Timer from "./Timer.svelte";


</script>

<div class="container">
  <div class="content">
    <h1 id="title">
      <i id="titleTxt">
        <b>N</b><b>I</b><b>R</b><b>A</b><b>L</b>
      </i>
      <span id="twofour"><i>2</i><i>4</i></span>
    </h1>
    <p id="slogan">
      <span class="red">R</span>ise <span class="red">A</span>bove
      <span class="red">A</span>ll <span class="red">O</span>dds<span
        class="red">!</span
      >
    </p>
    <Timer />
  </div>
</div>

<style>
  @font-face {
    font-family: "adelia";
    src: url("/assets/fonts/adelia.ttf") format("truetype");
  }

  @font-face {
    font-family: "ds digi";
    src: url("/assets/fonts/DS-DIGI.TTF") format("truetype");
  }

  @font-face {
    font-family: "bromph";
    src: url("/assets/fonts/BROMPH_TOWN.ttf") format("truetype");
  }

  @font-face {
    font-family: "peter quency";
    src: url("/assets/fonts/Peter Quincy Sans.otf") format("opentype");
  }

  #slogan {
    animation-play-state: paused;
  }
  #slogan:hover {
    animation: blink 0.1s infinite;
  }
  #titleTxt:hover {
    color: rgba(202, 202, 202, 0.525);
    /* text-shadow: 1px 1px 1px white;  */
    cursor: default;
  }
  b,
  i {
    font-style: normal;
    color: azure;
  }
  b:hover,
  i:hover {
    color: rgb(230, 11, 11);
    /* text-shadow: none; */
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  #titleTxt {
    height: fit-content;
    width: fit-content;
  }
  #title b {
    background-image: linear-gradient(180deg, #ffffff 40%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-family: "peter quency";
  }
  #title:hover  {
    text-align: center;
    color: transparent;
    text-shadow: 0px 0px .25px #eee, 5px 5px 3px teal, -5px -2px 3px maroon;
    transform: skew(0);
    animation: shift .7s ease-in-out forwards;
  }
  #title b:hover {
    color: red;
    animation: glitch 1s infinite;
  }

  #slogan {
    color: #ffffff;
  }

  #slogan,
  #slogan span {
    font-family: "bromph";
  }
  span#twofour i {
    font-family: "adelia";
  }
  .container {
    display: flex;
    justify-content: center;
    align-content: space-between;
    flex-direction: column;
    height: 100vh;
    width: calc(100vw - 4rem);
    height: 95dvh;
    overflow-x: hidden;
    /* height: 100dvh; */
    /* width: 100dvw; */
  }

  .red {
    color: rgb(230, 11, 11);
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .content h1 {
    font-size: 15rem;
    padding: 0 0 10vh 0;
  }

  .content h1 span {
    font-size: 10rem;
    padding: 0 0 10vh 0;
  }

  .content #slogan {
    font-size: 5rem;
    transform: rotate(-11deg);
    margin: -7vh 0 0 25vw;
  }



  @media (max-width: 767px) {
    .container {
      height: 90vh;
      width: 100vw;
    }

    #title {
      font-size: 8rem;
    }
    #slogan {
      margin-top: 8vh;
      font-size: 2.25rem !important;
    }

    #twofour {
      display: block;
      font-size: 7rem;
      display: flex;
      justify-content: right;
      margin-top: 2vh;
      padding: 0 0 5vh;
    }

  }
  @keyframes glitch {
    0% {
      transform: none;
      opacity: 1;
    }
    2%,
    8% {
      transform: skewX(-10deg);
      opacity: 0.75;
    }
    4%,
    10% {
      transform: skewX(10deg);
      opacity: 0.75;
    }
    12%,
    18% {
      transform: none;
      opacity: 1;
    }
    20%,
    26% {
      transform: skewX(-10deg);
      opacity: 0.75;
    }
    22%,
    28% {
      transform: skewX(10deg);
      opacity: 0.75;
    }
    30%,
    100% {
      transform: none;
      opacity: 1;
    }
  }
  @keyframes shift {
    0%,40%,44%,58%,61%,65%,69%,73%,to {
        transform: skew(0)
    }

    41% {
        transform: skew(10deg)
    }

    42% {
        transform: skew(-10deg)
    }

    63% {
        transform: skew(10deg)
    }

    71% {
        transform: skew(10deg)
    }
}
</style>
