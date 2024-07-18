<!-- // App.svelte -->

<script>
  import { onMount } from "svelte";
  import { Router } from "svelte-routing";
  import Routes from "./routes/Routes.svelte";
  import Nav from "./utils/Nav.svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { isLoggedIn } from "./stores/loginStatus";

  import { serverUrl } from "../public/env";
  import Particles from "./components/Particles.svelte";
  import StarTail from "./components/StarTail.svelte";

  let screenWidth = window.innerWidth;

  async function checkLogin(token) {
    try {
      const response = await fetch(`${serverUrl}/auth/partcipantLogin`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const { token, userDetails } = await response.json();
        document.cookie = `authToken=${token}; path=/;`;
        sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
        isLoggedIn.set(true);
      }
    } catch (error) {
      isLoggedIn.set(false);
      console.log("Error during login: ", error);
    }
  }

  // onMount(async () => {
  //   // if(!sessionStorage.getItem("userDetails")){

  //   const authToken = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("authToken="));
  //   if (authToken) {
  //     const token = authToken.split("=")[1];
  //     await checkLogin(token);
  //   }
  //   // }
  // });

  // setTimeout(() => {
  //   toast("NIRAL '24 has been postponed to August 2024 (Tentatively)", {
  //     icon: "ℹ️",
  //     duration: 7500,
  //   });
  // }, 2500);

  // setTimeout(() => {
  //   alert("NIRAL '24 has been postponed to August 2024 (Tentatively) ");
  // }, 20000);
</script>

<main>
  <!-- <Particles /> -->
  <!-- <StarTail /> -->
  <Router>
    <nav>
      <Nav {screenWidth} />
    </nav>
    <div id="root" style="padding-left: {screenWidth > 767 ? '4rem' : '0'}">
      <Routes />
      <Toaster />
    </div>
  </Router>
</main>
