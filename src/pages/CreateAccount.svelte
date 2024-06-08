<script>
  import { onMount } from "svelte";
  import RegistrationForm from "../components/RegistrationForm.svelte";

  let regFields = {
    editable: true,
    userDetails: {
      details: {
        emailId: undefined,
        firstName: undefined,
        lastName: undefined,
        mobileNo: undefined,
        dateOfBirth: undefined,
        password: undefined,
      },
      organization: "cegian",
      specificDetails: undefined,
    },
    specificDetails: {
      cegian: {
        college: "CEG",
        rollNo: undefined,
        department: undefined,
        branch: undefined,
        year: undefined,
      },
      other: {
        college: undefined,
        department: undefined,
        branch: undefined,
        year: undefined,
        state: undefined,
        city: undefined,
      },
      professional: {
        organization: undefined,
        experience: undefined,
        state: undefined,
        city: undefined,
      },
    },
  };

  let img
  onMount(() => {
    img = new Image();
    img.src = "../assets/gif/spirits-blue.gif";
    img.onload = () => {
      const bgAnimImg = document.querySelector(".bgAnim img");
      if (bgAnimImg instanceof HTMLImageElement) {
        bgAnimImg.src = img.src;
      }
    };
  })
</script>


<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<div class="reg-form-container">
  <div class="reg-form-wrapper">
    <RegistrationForm {regFields} />
  </div>
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
  .reg-form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reg-form-wrapper {
    margin: 5rem 1rem;
    width: 90vw;
    max-width: 675px;
  }
</style>
