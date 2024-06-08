<script>
  import { onMount } from "svelte";
  import { isLoggedIn } from "../stores/loginStatus";
  import { setContext } from "svelte";
  import LoginForm from "../components/LoginForm.svelte";
  import Payment from "../components/Payment.svelte";

  import ContactCard100 from "../utils/ContactCard100.svelte";
  import toast from "svelte-french-toast";
  let img;

  let permitID = "p4";
  let permitName = undefined;
  let permitPrice;

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

  function handleRegister() {
    const storedData = sessionStorage.getItem("userDetails");

    // Parse the data back into an object
    const parsedData = JSON.parse(storedData);

    // Access the organization field
    const organization = parsedData.organization;
    if (organization === "professional") {
      toast.error(
        "Accomodation for Professionals is not allowed. Please contact us."
      );
      return;
    }
    // console.log(permitID);
    showPopup = true;
    loginComp = !$isLoggedIn;
    console.log(loginComp);
    paymentComp = true;
  }

  function hideLoginComp() {
    loginComp = false;
  }

  function closePopup() {
    showPopup = false;
  }

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

  let showModal = false;
  let accomCostDates = [false, true, true];
  let foodCost = false;
  let totalCost = 0;
  const dates = ["13 June 2024", "14 June 2024", "15 June 2024"];

  const selectedDates = dates.filter((date, index) => accomCostDates[index]);
  let validityString;

  function toggleModal() {
    showModal = !showModal;
  }

  const calculateTotalCost = () => {
    const accomCost =
      accomCostDates.filter(Boolean).length * (foodCost ? 400 : 250);
    totalCost = accomCost;
    permitPrice = totalCost;
    validityString =
      selectedDates.map((date) => date.split(" ")[0]).join(", ") +
      " June 2024" +
      (foodCost ? " WITH FOOD" : " NO FOOD");
  };

  calculateTotalCost();
</script>

<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<div class="pageHolder">
  <div class="left flex jcse fdc">
    <div class="makeAccommodation">
      <h1>Accommodation Charges:</h1>
      <div class="chargesText flex fdc jcc aic">
        <p class="blackContainer">Without food per day ₹250</p>
        <p class="blackContainer">With food per day ₹400</p>
      </div>
      <div class="accommodationDates flex jcse blackContainer">
        <label class="container">
          <input
            type="checkbox"
            bind:checked={accomCostDates[0]}
            on:change={calculateTotalCost}
          />
          <div class="checkmark" class:checked={foodCost} />
          May 13
        </label>
        <label class="container">
          <input
            type="checkbox"
            bind:checked={accomCostDates[1]}
            on:change={calculateTotalCost}
          />
          <div class="checkmark" class:checked={foodCost} />
          May 14
        </label>
        <label class="container">
          <input
            type="checkbox"
            bind:checked={accomCostDates[2]}
            on:change={calculateTotalCost}
          />
          <div class="checkmark" class:checked={foodCost} />
          May 15
        </label>
      </div>
      <div class="foodFee flex aic jcc">
        <label for="foodCost" class="container">
          <input
            type="checkbox"
            id="foodCost"
            bind:checked={foodCost}
            on:change={calculateTotalCost}
          />
          <div class="checkmark" class:checked={foodCost} />
          I require food for the days I had requested accommodation.
        </label>
      </div>
      <div class="chargesDisplay flex jcc blackContainer">
        ₹
        <p>{totalCost}</p>
      </div>
      <div class="bookAccomodation flex jcc">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="button" on:click={handleRegister}>
          Book Accommodation<span class="button-border" />
        </div>
      </div>

      <div class="rulesBtnContainer flex jcc">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="button" on:click={toggleModal}>
          Rules and Instructions<span class="button-border" />
        </div>
      </div>
    </div>
    <div class="queries">
      <h1>Contact us for more info</h1>
      <div class="contactInfo blackContainer">
        <ul>
          <!-- <li> -->
          <div class="member">
            <ContactCard100 name={"Aiswariya"} phone={"+91 6369 765 738"} />
          </div>
          <!-- </li> -->
          <!-- <li> -->
          <div class="member">
            <ContactCard100 name={"Soundharya"} phone={"+91 82705 96210"} />
          </div>
          <!-- </li> -->
        </ul>
      </div>
    </div>
  </div>
  <!-- <div class="right flex fdc">
    <h1 class="flex jcc">Rules & Instructions</h1>
    <button class="clickable" on:click={() => (showRulesPopup = true)}>Show Rules</button>

  </div> -->
</div>
{#if showModal}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-backdrop" on:click={toggleModal} on:keydown={toggleModal}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      class="modal"
      role="dialog"
      aria-modal="true"
      on:click|stopPropagation={null}
    >
      <div class="right flex fdc">
        <h1 class="flex jcc">Rules & Instructions</h1>
        <div class="rules">
          <h1>Rules</h1>
          <ul>
            <li>
              Only non-Chennai participants will be provided accommodation
              services. Participants must register online to avail themselves of
              our accommodation services.
            </li>
            <li>
              Registration for accommodation is not part of the Events
              registration, and is to be done separately.
            </li>
            <li>
              Hospitality services will be available from 6 AM on 13th May, 2024
              to 8 PM on 15th May, 2024.
            </li>
            <li>
              Accommodation will be provided on a sharing basis. Any requests
              for individual rooms will not be entertained. However, we will try
              to accommodate students from the same college together in rooms
              and dorms (if possible). Allotment of rooms and dorms are at the
              discretion of the Hospitality team.
            </li>
            <li>
              Services will be offered on a "First Register, First Serve" basis.
            </li>
            <li>
              Mattresses and buckets will be provided. However, participants are
              encouraged to carry their own blankets.
            </li>
            <li>
              Random checks will be made to avoid any illegal stays on campus.
              Any participant failing to produce his or her Accommodation
              Receipt will be fined and disqualified.
            </li>
            <li>
              Participants are responsible for their belongings during their
              stay. Neither the Niral 2024 Hospitality team nor the institute
              will take responsibility for any loss of property incurred.
            </li>
            <li>Girls in-time is 8.20 PM. Boys in-time is 9.00 PM.</li>
            <li>
              The Hospitality team has the right to cancel or wait-list
              accommodation while processing your request.
            </li>
            <li>
              Smoking and drinking are strictly prohibited inside the campus.
              Any act of misbehaviour inside the campus will be severely dealt
              with, leading to the immediate expulsion of the team (in question)
              from the campus and cancellation of registration.
            </li>
            <li>
              Any damage caused by the participants to institute property during
              their stay will result in forfeiture of the caution deposit and/or
              recovery of the amount due to the damage (whichever is higher).
            </li>
          </ul>
        </div>
        <div class="instructions">
          <h1>Instructions</h1>
          <ul>
            <li>
              On reaching the campus, report immediately to the Registration
              Desk for the registration process, and if accommodation is needed,
              approach the accommodation desk.
            </li>
            <li>
              It is mandatory to bring your college ID card and a soft copy of
              it.
            </li>
            <li>
              If registration was done online with the payment, bring a hard or
              soft copy of the confirmation mail at the time of registration
              (for accommodation too).
            </li>
            <li>
              At the time of check-in, the caution deposit of Rs. 500 should be
              paid, which will be refunded at the time of check-out.
            </li>
            <li>
              After Accommodation registration and payment of applicable fees,
              rooms and dormitories will be allotted by the Niral-2024
              Hospitality team.
            </li>
            <li>
              During check-out, the participants are required to return all the
              utilities provided at the time of check-in in order to redeem
              their refundable deposit.
            </li>
            <li>
              The refund of Caution deposit money will be made at the sole
              discretion of the Niral Hospitality team.
            </li>
            <li>No refund will be provided for the cancellation of rooms.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
{/if}
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
        <Payment
          {permitID}
          {permitName}
          {permitPrice}
          validity={validityString}
        />
      </div>
    {/if}
  </div>
{/if}

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

  .pageHolder {
    justify-content: center;
    position: relative;
    display: flex;
    height: fit-content;
    min-width: fit-content;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px) saturate(120%);
    -webkit-backdrop-filter: blur(10px) saturate(100%);
    border-radius: 1.5vh;
    color: #fff;
  }

  .left {
    min-height: 100vh;
    /* width: 50%; */
    padding: 5%;
    /* justify-content: right; */
  }
  .right {
    /* width: 50%; */
    padding: 20px;
    justify-content: left;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1.5vh;
    padding: 5%;
    overflow: auto;
  }

  /* Hide the default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    margin-left: 5px;
    display: flex;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    margin: 5px 15px;
    top: 0;
    left: 0;
    min-height: 1.3em;
    min-width: 1.3em;
    height: 1.3em;
    width: 1.3em;
    background-color: #ccc;
    border-radius: 10px;
    border: 2px;
    box-shadow: 0px 0px 17px #c7bbb8;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #f32121;
    box-shadow: 0px 0px 17px #f32121;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid rgb(233, 222, 222);
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
  .left h1,
  .instructions h1,
  .rules h1 {
    font-size: 25px;
    color: rgba(255, 255, 0, 0.644);
  }

  .right > h1 {
    text-decoration: underline;
    color: rgba(255, 166, 0, 0.575);
    padding: 5px;
  }

  .left h1 {
    padding: 5px;
  }
  .chargesText p {
    margin: 10px;
  }

  .chargesText :hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(61, 189, 57, 0.247);
  }

  .blackContainer {
    margin: 10px;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.074);
    border: 1px solid rgba(255, 255, 255, 0.222);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
  }
  .foodFee {
    margin: 20px;
  }
  .button {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    color: #f4f0ff;
    text-align: center;
    backdrop-filter: blur(10px);
    cursor: pointer;
    width: fit-content;
    margin: 20px;
  }

  .button::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    background: linear-gradient(
        180deg,
        rgba(8, 77, 126, 0) 0%,
        rgba(8, 77, 126, 0.42) 100%
      ),
      rgba(47, 255, 255, 0.24);
    box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
    z-index: -1;
  }

  .button::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(8, 77, 126, 0) 0%,
        rgba(8, 77, 126, 0.42) 100%
      ),
      rgba(47, 255, 255, 0.24);
    box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
    border-radius: 0.5rem;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-in;
  }

  .button:hover::after {
    opacity: 1;
  }

  .button-border {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    z-index: -1;
  }

  .button-border::before {
    content: "";
    position: absolute;
    border-radius: 0.5rem;
    padding: 1px;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(184, 238, 255, 0.24) 0%,
        rgba(184, 238, 255, 0) 100%
      ),
      linear-gradient(
        0deg,
        rgba(184, 238, 255, 0.32),
        rgba(184, 238, 255, 0.32)
      );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    pointer-events: none;
  }
  ul {
    text-decoration: none;
  }

  .modal {
    background: rgb(13 71 100);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* padding: 1rem; */
    overflow-y: scroll;
    height: 90vh;
    width: 80%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 1.5vh;
    color: #fff;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .right {
    padding: 20px;
    justify-content: left;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1.5vh;
    padding: 5%;
    overflow: auto;
  }

  .chargesDisplay {
    width: 50%;
    margin: auto;
  }
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
  @media screen and (max-width: 767px) {
    .pageHolder {
      display: block;
    }
    .right,
    .left {
      width: 100%;
    }
    h1 {
      font-size: 1rem !important;
    }
    .chargesText {
      font-size: 1rem;
    }

    .accommodationDates label {
      font-size: 1rem;
    }
    .checkmark {
      margin: 0 0.5rem;
    }
    .foodFee label {
      font-size: 1rem;
    }

    .button {
      font-size: 1rem;
      padding: 0.7rem 1.5rem;
    }
  }
</style>
