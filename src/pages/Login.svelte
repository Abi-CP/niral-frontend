<script>
  import { isLoggedIn } from "../stores/loginStatus";
  import { onDestroy, onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import LoginForm from "../components/LoginForm.svelte";


  let unsubscribe;
  let toNavigate = true
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

    if ($isLoggedIn) {
      navigate("/account");
    }

    unsubscribe = isLoggedIn.subscribe((value) => {
      if (value) {
        navigate("/account");
      }
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>


<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<div class="main  flex jcc aic">

<LoginForm {toNavigate}/>

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
   .main {
    background: url("buzzx4xo.png");
    width: 100%;
    height: 90vh;
    height: 100dvh;
  }
</style>