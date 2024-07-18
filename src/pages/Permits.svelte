<script>
  import BuyPermit from "../components/permits/BuyPermit.svelte";
  import { onMount } from "svelte";
  import { isLoggedIn } from "../stores/loginStatus";
  import { setContext } from "svelte";
  import LoginForm from "../components/LoginForm.svelte";
  import Payment from "../components/Payment.svelte";
  import toast from "svelte-french-toast";
  import { navigate } from "svelte-routing";

  let img;
  onMount(async () => {
    img = new Image();
    img.src = "../assets/gif/spirits-blue.gif";
    img.onload = () => {
      const bgAnimImg = document.querySelector(".bgAnim img");
      if (bgAnimImg instanceof HTMLImageElement) {
        bgAnimImg.src = img.src;
      }
    };
  });

  function handleBuyPermit(event) {
    switch (event.detail.permitId) {
      case "p1":
        permitID = "p1";
        permitName = "Gen AI Workshop Permit";
        permitPrice = 299;
        validity = "June 12, 2024";
        buyPermitFunc();
        break;

      case "p2":
        permitID = "p2";
        permitName = "Hack X Game Permit";
        permitPrice = 120;
        validity = "June 12, 2024";
        buyPermitFunc();
        break;
      case "p3":
        permitID = "p3";
        permitName = "Events Permit";
        permitPrice = 120;
        validity = "June 13-15, 2024";
        buyPermitFunc();
        break;

      case "p4":
       navigate('/accommodation')
        break;
    }
  }

  let permitID = "p4";
  let permitName = undefined;
  let permitPrice;
  let validity;

  let loginComp = false;
  let paymentComp = false;
  let showPopup = false;

  let parentFunc = true;

  function handleOutsideClick() {
    if (event.target === document.getElementById("popupBackground")) {
      closePopup();
    }
  }
  setContext("hideLoginComp", hideLoginComp);

  function buyPermitFunc() {
    showPopup = true;
    loginComp = !$isLoggedIn;
    paymentComp = true;
  }

  function hideLoginComp() {
    loginComp = false;
  }

  function closePopup() {
    showPopup = false;
  }
</script>

<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<div class="pageRoot flex aic jcse fdc">
  <h3>Get Your Permits Now!</h3>
  <div class="infoContainer flex aic jcc" style="color: white; margin-bottom: 20px;"><p style="border: .5px solid white; border-radius: 10px; padding: 10px;text-align:center;"><span style="color: #ff3130;">OFFLINE REGISTRATIONS ALLOWED FOR WORKSHOP.</span> <br> Kindly contact: Saravana Kumar +91 75300 21670; Renuga +91 86677 68824 </p></div>
  
  <div class="container flex jcc">
    <div class="wrapper">
      <div class="imgContainer">
        <img
          src="../assets/img/permits/p4.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="permitContainer">
        <BuyPermit
          name={"Accomodation Permit"}
          validity={"June 13, 14 & 15, 2024"}
          price={"₹ 250 - ₹ 400 per day"}
          waveText={"This permit let you avail the accomodation option for the NIRAL '24. This option is allowed only for the Participants of Niral '24. "}
          permitId={"p4"}
          on:buyPermit={()=>{toast.error('ONLINE Registrations closed!')}}
          />
          <!-- on:buyPermit={handleBuyPermit} -->
      </div>
    </div>
    <div class="wrapper">
      <div class="imgContainer">
        <img
          src="../assets/img/permits/p1.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="permitContainer">
        <BuyPermit
          name={"Gen-AI Workshop Permit"}
          validity={"June 12, 2024"}
          price={"₹ 299"}
          waveText={"You should get this permit to attend the Gen-AI Workshop. "}
          permitId={"p1"}
          on:buyPermit={()=>{toast.error('ONLINE Registrations closed!')}}
          />
          <!-- on:buyPermit={handleBuyPermit} -->
      </div>
    </div>
    <div class="wrapper">
      <div class="imgContainer">
        <img
          src="../assets/img/permits/p3.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="permitContainer">
        <BuyPermit
          name={"Events Permit"}
          validity={"June 14 - 15 , 2024"}
          waveText={"You should get this permit to attend any of the events. "}
          price={"₹ 120"}
          permitId={"p3"}
          on:buyPermit={()=>{toast.error('ONLINE Registrations closed!')}}
          />
          <!-- on:buyPermit={handleBuyPermit} -->
      </div>
    </div>
    <div class="wrapper">
      <div class="imgContainer">
        <img
          src="../assets/img/permits/p2.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="permitContainer">
        <BuyPermit
          name={"Hack X Game Permit"}
          validity={"June 13, 2024"}
          price={"₹ 120"}
          waveText={"You should get this permit to participate in Hack X Game. "}
          permitId={"p2"}
          on:buyPermit={()=>{toast.error('ONLINE Registrations closed!')}}
          />
          <!-- on:buyPermit={handleBuyPermit} -->
      </div>
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
        <Payment {permitID} {permitName} {permitPrice} {validity} />
      </div>
    {/if}
  </div>
{/if}

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
  .pageRoot {
    min-height: 100vh;
    width: 100%;
    padding: 7.5rem 0;
  }
  h3 {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    color: aliceblue;
  }
  .container {
    flex-wrap: wrap;
  }

  .imgContainer {
    max-width: 300px;
    height: auto;
  }
  .wrapper {
    border: 0.5px solid white;
    margin: 0.5rem;
    height: fit-content;
  }

  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1000px) {
    /* .container{
      flex-direction: column;
    } */
  }
</style>
