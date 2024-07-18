<script>
  import { navigate } from "svelte-routing";

  navigate("/workshops/Gen-AI");

</script>

<!-- <script>
  let title = "Workshop Title";
  let subtitle = "lorem ipsum summat ";
  let bannerUrl = "Niral24.jpg";

  let descriptionSelected = true;
  let speakersSelected = false;
  let infoSelected = false;
  let contactSelected = false;

  function changeSelected(event) {
    if (event.target.value == "1") {
      descriptionSelected = true;
      speakersSelected = false;
      infoSelected = false;
      contactSelected = false;
    } else if (event.target.value == "2") {
      descriptionSelected = false;
      speakersSelected = true;
      contactSelected = false;
      infoSelected = false;
    } else if (event.target.value == "3") {
      descriptionSelected = false;
      speakersSelected = false;
      infoSelected = true;
      contactSelected = false;
    } else if (event.target.value == "4") {
      descriptionSelected = false;
      speakersSelected = false;
      infoSelected = false;
      contactSelected = true;
    }
  }
</script> -->

<!-- <div class="video">
  <video autoplay muted loop playsinline>
    <source src="7btrrd video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div class="viewport flex aic jcc">
  <div class="pageContainer flex aic jcc">
    <div class="prevBtn flex aic jcc">
      <button class="arrowButton clickable"
        ><i class="fa-solid fa-angles-left faAngles clickable"></i></button
      >
    </div>
    <div class="screen flex aic jcc fdc">
      <div class="topBar flex jcsb">
        <div class="windowBtnsContainer flex jcse">
          <button class="windowBtn"></button><button class="windowBtn"
          ></button><button class="windowBtn"></button>
        </div>
      </div>
      <main>
        <header class="flex jcsb">
          <div class="titleContainer">
            <h3 class="title">{title}</h3>
            <h5 class="subtitle">{subtitle}</h5>
          </div>
          <button class="regButton" id="regDown"
            ><span class="regButton-content">Register</span></button
          >
        </header>
        <article class="flex jcsb aic jcc">
          <div class="detailsContainer flex fdc aic jcse">
            <div class="nav flex aic jcc">
              <button
                class="description {descriptionSelected
                  ? 'selected'
                  : ''} navButton flex aic jcc clickable"
                value="1"
                on:click={changeSelected}>Description</button
              >
              <button
                class="speakers {speakersSelected
                  ? 'selected'
                  : ''} navButton flex aic jcc clickable"
                value="2"
                on:click={changeSelected}>Speaker(s)</button
              >
              <button
                class="info {infoSelected
                  ? 'selected'
                  : ''} navButton flex aic jcc clickable"
                value="3"
                on:click={changeSelected}>Info</button
              >
              <button
                class="contact {contactSelected
                  ? 'selected'
                  : ''} navButton flex aic jcc clickable"
                value="4"
                on:click={changeSelected}>Contact</button
              >
            </div>
            <div class="content">
              {#if descriptionSelected}
                <div class="descriptionContainer"></div>
              {:else if speakersSelected}
                <div class="speakersContainer"></div>
              {:else if infoSelected}
                <div class="infoCardContainer">
                  <div class="infoCard flex">
                    <div class="icon flex aic jcc"></div>
                    <div class="info flex fdc jcsb">
                      <div class="infoText"></div>
                      <div class="infoDescription"></div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>
          </div>
          <div class="photoContainer flex aic jcc">
            <img
              src={bannerUrl}
              alt="Workshop Banner"
              srcset=""
              class="banner"
            />
          </div>
        </article>
      </main>
      <div class="bottomBar flex jcsb"></div>
    </div>
    <div class="nextBtn flex aic jcc">
      <button class="arrowButton clickable"
        ><i class="fa-solid fa-angles-right faAngles clickable"></i></button
      >
    </div>
  </div>
</div> -->

<!-- <style>
  /* @import "../lib/workshop.css"; */

  .video {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvh;
    z-index: -1;
  }
  .viewport {
    width: 100%;
    height: 100vh;
    width: calc(100dvw - 4rem);
    height: 100dvh;
    background: url("");
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .pageContainer {
    height: 95vh;
    width: 100%;

    /* background: #000; */
  }
  .prevBtn,
  .nextBtn {
    height: 100%;
    width: 6rem;
    /* background: #fff; */
  }
  .screen {
    height: 100%;
    width: calc(100% - 8rem);
    border: 0.2px solid black;
    border-radius: 12px;
    background: rgba(32, 36, 54, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .topBar,
  .bottomBar {
    height: 2rem;
    width: 100%;
    /* background: #fff; */
  }
  main {
    height: calc(100% - 4rem);
    width: 100%;
  }
  .windowBtnsContainer {
    margin: 0.8rem 1rem;
    width: 5rem;
  }
  .windowBtn {
    height: 1rem;
    width: 1rem;
    border-width: 0px;
    border-radius: 5rem;
  }

  .windowBtn:nth-child(1) {
    background: #f9544b;
  }
  .windowBtn:nth-child(2) {
    background: #f8ce52;
  }
  .windowBtn:nth-child(3) {
    background: #5fcf65;
  }
  .regButton {
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #3a6df0;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .regButton:hover::before {
    transform: scaleX(1);
  }
  .regButton-content {
    position: relative;
    z-index: 1;
  }

  .regButton::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgb(30, 89, 241) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.275s;
  }

  header {
    margin-top: 3vh;
    height: 10vh;
    width: 100%;
    color: #fff;
    padding: 0 3vw;
  }
  header .titleContainer h3 {
    font-size: 2rem;
  }
  /* header .titleContainer h5{
    font-size: 1rem;
} */
  article {
    /* height: 100%; */
    height: 78vh;
    width: 90%;
    margin: 0vh auto;
  }
  .detailsContainer {
    height: 70vh;
    width: 55%;
    border-radius: 12px;
    background: rgba(16, 18, 27, 0.4);
    color: #fff;
    padding-bottom: 2vh;
  }
  .detailsContainer .nav {
    max-width: inherit;
    flex-wrap: wrap;
  }
  .detailsContainer .nav button {
    font-size: 1.05rem;
    padding: 0 1rem;
    min-width: 6rem;
    height: 5vh;
    color: rgb(141, 146, 166);
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(255, 255, 255, 0);
  }

  .detailsContainer .nav button:hover,
  .detailsContainer .nav button.selected {
    color: #fff;
    border-bottom: 3px solid white;
  }

  .detailsContainer .nav button:nth-child(odd) {
    box-shadow:
      -5px 0 10px -5px rgba(0, 0, 0, 0.2),
      5px 0 10px -5px rgba(0, 0, 0, 0.2);
  }

  .detailsContainer .content {
    height: 90%;
    width: 90%;
    border: 2px solid red;
  }

  .photoContainer {
    height: 70vh;
    width: 40%;
  }

  .banner {
    width: 95%;
    height: auto;
    border-radius: 12px;
  }

  .arrowButton {
    color: #fff;
    border: none;
    background: none;
    border-radius: 2rem;
  }

  .faAngles {
    padding: 1rem;
  }

  .arrowButton:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
</style> -->
