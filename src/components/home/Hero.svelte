<script>
  import { onMount } from "svelte";
  import Timer from "./Timer.svelte";
</script>

<div class="container">
  <div class="content flex fdc aic">
    <div class="flex titleContainer">
      <h1 class="title" style="display: inline-block;">
        <i id="titleTxt">
          <b>N</b><b>I</b><b>R</b><b>A</b><b>L</b>
        </i>
      </h1>
      <h1 class="title twofourContainer" style="display: inline-block; text-align: center; width: 100%;">
        <span id="twofour"><i>2</i><i>4</i></span>
      </h1>
    </div>
    <p id="slogan">
      <span class="red">R</span>ise <span class="red">A</span>bove
      <span class="red">A</span>ll <span class="red">O</span>dds<span class="red">!</span>
    </p>
    <Timer />
     <!-- <h3></h3> -->
  </div>
</div>

<style>
    * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
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
    overflow-x: hidden;

  }

  #slogan:hover {
    animation: blink 0.1s infinite;
  }

  #titleTxt:hover {
    color: rgba(202, 202, 202, 0.525);
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

  .title b {
    background-image: linear-gradient(180deg, #ffffff 40%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-family: "peter quency";
  }

  .title:hover {
    text-align: center;
    color: transparent;
    text-shadow: 0px 0px 0.25px #eee, 5px 5px 3px teal, -5px -2px 3px maroon;
    transform: skew(0);
    animation: shift 0.7s ease-in-out forwards;
  }

  .title b:hover {
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
    height: 95dvh;
    width: 100%;
    padding-bottom: 10vh;
    margin-bottom: 10vh;
  }

  .red {
    color: rgb(230, 11, 11);
  }



  .content h1 #titleTxt {
    font-size: 18rem;
  }

  .twofourContainer {
    margin-top: 15vh;
  }

  .content h1 #twofour {
    font-size: 10rem;
  }

  .content h1 span {
    font-size: 10rem;
  }

  .content #slogan {
    font-size: 4rem;
    transform: rotate(-11deg);
    margin: 3rem 0 0 25vw;
  }

  @media (max-width: 1200px) {
    .content h1 #titleTxt {
      font-size: 20rem;
    }
    .titleContainer {
      flex-direction: column;
    }
    .twofourContainer {
      margin-top: 0vh;
    }
  }

  @media (max-width: 1000px) {
    .content h1 #titleTxt {
      font-size: 18rem;
    }
    .twofourContainer {
      margin-top: -8vh;
    }
  }

  @media (max-width: 900px) {
    .content h1 #titleTxt {
      font-size: 15rem;
    }
    .titleContainer {
      flex-direction: column;
    }
    .twofourContainer {
      margin-top: 0vh;
    }
  }

  @media (max-width: 767px) {
    .content{
      height: 90%;
      justify-content: space-between;
    }
    .container {
      height: 90vh;
      width: 100vw;
      padding-bottom: 3rem;
    }

    .title {
      font-size: 8rem;
    }

    #slogan {
      margin-top: 6vh;
      font-size: 3rem;
    }

    #twofour {
      display: block;
      display: flex;
      justify-content: center;
      margin-top: 2vh;
      padding: 0 0 4vh;
    }
  }

  @media (max-width: 600px) {
    .content h1 #titleTxt {
      font-size: 12rem;
    }
    #twofour {
      font-size: 5rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .content h1 #titleTxt {
      font-size: 10rem;
    }
    .content h1 #twofour {
      margin-top: 7vh;
      font-size: 7rem;
    }
    #slogan {
      font-size: 2.2rem !important;
    }
  }

  @media (max-width: 400px) {
    .content h1 #titleTxt {
      font-size: 8rem;
    }
    
    #twofour {
      font-size: 3.5rem;
    }
  }

  @keyframes glitch {
    0% {
      transform: none;
      opacity: 1;
    }
    2%, 8% {
      transform: skewX(-10deg);
      opacity: 0.75;
    }
    4%, 10% {
      transform: skewX(10deg);
      opacity: 0.75;
    }
    12%, 18% {
      transform: none;
      opacity: 1;
    }
    20%, 26% {
      transform: skewX(-10deg);
      opacity: 0.75;
    }
    22%, 28% {
      transform: skewX(10deg);
      opacity: 0.75;
    }
    30%, 100% {
      transform: none;
      opacity: 1;
    }
  }

  @keyframes shift {
    0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, to {
    transform: skew(0);
  }

  41% {
    transform: skew(10deg);
  }

  42% {
    transform: skew(-10deg);
  }

  63% {
    transform: skew(10deg);
  }

  71% {
    transform: skew(10deg);
  }
}
</style>