<!-- // App.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";
  import { Router } from "svelte-routing";
  import Routes from "./routes/Routes.svelte";
  import Nav from "./utils/Nav.svelte";
  import toast, { Toaster } from "svelte-french-toast";

  let screenWidth = window.innerWidth;

  // Function to update screenWidth when window is resized
  function updateScreenWidth() {
    screenWidth = window.innerWidth;
  }

  onMount(() => {
    // Add event listener for window resize
    window.addEventListener("resize", updateScreenWidth);
  });

  onDestroy(() => {
    // Remove event listener when component is destroyed
    window.removeEventListener("resize", updateScreenWidth);
  });
</script>

<main>
  <Router>
    <nav>
      <Nav {screenWidth} />
    </nav>
    <div id="root" style="padding-left: {screenWidth > 767 ? '4rem' : '0'}">
      <Routes/>
      <Toaster/>
      <button on:click={() => toast.success('This is a success toast!')}>
        Show Success Toast
      </button>
    </div>
  </Router>
</main>

<style>
  main {
    background: url("./buzzx4xo.png");
    min-height: 100dvh;
  }
</style>
