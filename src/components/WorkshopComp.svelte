<script>
  import { isLoggedIn } from "../stores/loginStatus";
  import LoginForm from "./LoginForm.svelte";
  import { setContext } from "svelte";
  import Payment from "./Payment.svelte";
  import WindowButton from "./WindowButton.svelte";

  export let title;
  export let subtitle;
  export let bannerUrl;
  export let bg;
  export let eventID = undefined;
  export let permitID = "p1";
  export let permitName = undefined;
  export let permitPrice = 299;

  export let entryInfo =
    '"Gen AI Workshop Permit" is required to attend this workshop.';

  let registerBtnValue = [eventID, permitID];

  let descriptionSelected = true;
  let speakersSelected = false;
  let infoSelected = false;
  let contactSelected = false;

  let loginComp = false;
  let paymentComp = false;
  let showPopup = false;

  let parentFunc = true;

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

  function handleRegister() {
    showPopup = true;
    loginComp = !$isLoggedIn;
    paymentComp = true;
  }

  function hideLoginComp() {
    loginComp = false;
  }

  function openPopup() {
    showPopup = true;
  }

  function closePopup() {
    showPopup = false;
  }

  function handleOutsideClick() {
    if (event.target === document.getElementById("popupBackground")) {
      closePopup();
    }
  }
  setContext("hideLoginComp", hideLoginComp);
</script>

<div class="bgAnim">
  <img src={bg} alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<div class="viewport flex aic jcc">
  <div class="pageContainer flex aic jcc">
    <div class="prevBtn flex aic jcc">
      <button class="arrowButton clickable"
        ><i class="fa-solid fa-angles-left faAngles clickable"></i></button
      >
    </div>
    <div class="screen flex aic jcc fdc">
      <div class="topBar flex jcsb">
        <WindowButton />
      </div>
      <main>
        <header class="flex jcsb">
          <div class="titleContainer">
            <h3 class="title">{title}</h3>
            <h5 class="subtitle">{subtitle}</h5>
          </div>
          <button
            class="regButton top flex aic jcc"
            id="regDown"
            value={registerBtnValue}
            on:click={handleRegister}
            ><span class="regButton-content">Register</span></button
          >
        </header>
        <div class="entryInfoContainer flex jcc aic">
          <div class="entryInfo">{entryInfo}</div>
        </div>
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
              <div class="wrapper flex aic jcc">
                {#if descriptionSelected}
                  <div class="descriptionContainer flex fdc">
                    <slot name="description"></slot>
                  </div>
                {:else if speakersSelected}
                  <div class="speakersContainer">
                    <slot name="speaker"></slot>
                  </div>
                {:else if infoSelected}
                  <div
                    class="infoCardContainer flex fdc jcse aic"
                    style="width: 100%;height:100%"
                  >
                    <slot name="info"></slot>
                  </div>
                {:else if contactSelected}<div
                    class="contactCardContainer flex fdc jcse aic"
                    style="width: 100%;height:100%"
                  >
                    <slot name="contact"></slot>
                  </div>
                {/if}
              </div>
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
        <div class="bottomRegisterBtnContainer flex jcc">
          <button class="regButton bottom" id="regDown"
            ><span class="regButton-content">Register</span></button
          >
        </div>
      </main>
      <div class="bottomBar flex jcsb"></div>
    </div>
    <div class="nextBtn flex aic jcc">
      <button class="arrowButton clickable"
        ><i class="fa-solid fa-angles-right faAngles clickable"></i></button
      >
    </div>
  </div>
</div>
{#if showPopup}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    id="popupBackground"
    class="popup-background"
    on:click={handleOutsideClick}
  >
    {#if loginComp}
      <div class="loginComp comp flex aic jcc">
        <LoginForm {parentFunc} />
      </div>
    {:else if paymentComp && $isLoggedIn}
      <div class="paymentComp comp flex aic jcc">
        <Payment {permitID} {permitName} {permitPrice} />
      </div>
    {/if}
  </div>
{/if}

<!-- </div>
{/if} -->

<style>
  .popup-background {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  }

  .bgAnim {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvh;
    z-index: -10;
  }
  .bgAnim img {
    width: 100vw;
    height: 100vh;
  }
  .bgBlur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -9;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .viewport {
    width: calc(100vw - 4rem);
    height: 100vh;
    width: calc(100dvw - 4rem);
    height: 100dvh;
    background: url("../assets/gradient.gif");
  }
  .pageContainer {
    height: 95vh;
    width: 100%;
    /* backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); */

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
  .bottomRegisterBtnContainer {
    display: none;
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
    margin-top: 1.5vh;
    height: 8vh;
    width: 100%;
    color: #fff;
    padding: 0 3vw;
  }
  header .titleContainer h3 {
    font-size: 2rem;
  }

  .entryInfoContainer {
    width: 100%;
  }
  .entryInfo {
    color: #fff;
    font-size: .95rem;
    margin-top: 1rem;
    padding: .3rem 2rem;
    letter-spacing: 1px;
    font-style: italic;

    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 25px;
  }
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

  .detailsContainer .nav button:hover {
    color: #fff;
  }
  .detailsContainer .nav button.selected {
    color: #fff;
    border-bottom: 3px solid white;
  }
  .detailsContainer .nav button {
    box-shadow:
      -5px 0 10px -5px rgba(0, 0, 0, 0.1),
      5px 0 10px -5px rgba(0, 0, 0, 0.1);
  }

  .detailsContainer .content {
    height: 90%;
    width: 90%;
    background: rgba(16, 18, 27, 0.6);
    border-radius: 10px;
    /* overflow: hidden; */
  }

  .detailsContainer .content .wrapper {
    position: relative;
    padding: 2rem;
    /* margin-top: 2rem; */
    /* padding-top: 6rem; */
    /* top: 2rem; */
    height: calc(100% - 2rem);
    width: 100%;
    overflow-y: auto;
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

  @media (max-width: 1024px) {
    .prevBtn,
    .nextBtn {
      display: none;
    }
    .viewport {
      margin: 2.5vh 0;
    }
    .viewport,
    .pageContainer,
    main,
    article,
    .photoContainer,
    .detailsContainer {
      height: auto;
    }
    .screen {
      width: 95%;
    }
    article {
      flex-direction: column-reverse;
      margin-bottom: 5vh;
    }
    .photoContainer,
    .detailsContainer {
      width: 90%;
      margin-top: 5vh;
    }
    .bottomRegisterBtnContainer {
      display: flex;
      margin: 0 0 1.25rem;
    }
  }

  @media (max-width: 767px) {
    .viewport {
      width: 100vw;
    }
    header {
      height: auto;
      padding: 1rem;
    }
    article {
      width: 95%;
    }
    .detailsContainer {
      width: 100%;
    }
    .detailsContainer .content {
      width: 95%;
    }
    .regButton.top {
      display: none;
    }
  }
</style>
