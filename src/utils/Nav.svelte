<script>
  import { onMount, onDestroy } from "svelte";
  import NavSideBar from "../components/nav/NavSideBar.svelte";
  import NavFab from "../components/nav/NavFAB.svelte";

  export let screenWidth;


</script>

{#if screenWidth > 767}
  <div class="sideBar">
    <NavSideBar/>
  </div>
{:else}
  <NavFab/>
{/if}

<style>
  .sideBar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #f0f0f0;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
    z-index: 998;
    transition: transform 0.3s ease-in-out;
  }

  /* .sideBar--hidden {
    transform: translateX(-100%);
  } */
</style>
