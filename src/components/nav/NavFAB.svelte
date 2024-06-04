<script>
  import { onMount, onDestroy } from "svelte";
  import { Link } from "svelte-routing";
  import { isLoggedIn } from "../../stores/loginStatus";

  let navIcon;
  let fabActive = false;

  function toggleFab() {
    fabActive = !fabActive;
    if (navIcon.innerHTML == "☰") {
      navIcon.innerHTML = "×";
    } else {
      navIcon.innerHTML = "☰";
    }
  }

  onMount(() => {
    navIcon = document.getElementById("navIcon");
    // navBox = document.getElementById("navBox");
    // navIcon.addEventListener("click", () => {
    //   toggleFab();
    // });
  });

  onDestroy(() => {
    navIcon.removeEventListener("click");
    // navBox.removeEventListener("click");
  });
</script>

{#if fabActive}
  <div class="FABcontainer">
    <div id="navBox">
      <ul>
        <li>
          <Link to="/workshops" on:click={toggleFab}
            ><span class="txt clickable">Workshop</span>
            <i class="clickable fa-solid fa-atom"></i>
            </Link
          >
        </li>
        <li>
          <Link to="/events" on:click={toggleFab}
            ><span class="txt clickable">Events</span><i
              class="clickable fa-solid fa-dice"
            ></i></Link
          >
        </li>
        <li>
          <Link to="/sponsors" on:click={toggleFab}
            ><span class="txt clickable">Sponsors</span>
            <i class="clickable fa-solid fa-handshake-simple"></i>
            </Link
          >
        </li>
        <li>
          <Link to="/accomodation" on:click={toggleFab}
            ><span class="txt clickable">Accommodation</span><i
              class="clickable fa-solid fa-house"
            ></i></Link
          >
        </li>
        <li>
          {#if $isLoggedIn}
            <Link to="/account" on:click={toggleFab}
              ><span class="txt clickable">Account</span><i
                class="clickable fas fa-envelope"
              ></i></Link
            >
          {:else}
            <Link to="/login" on:click={toggleFab}
              ><span class="txt clickable">Login</span><i
                class="clickable fas fa-envelope"
              ></i></Link
            >
          {/if}
        </li>
        <li>
          <Link to="/contact" on:click={toggleFab}
            ><span class="txt clickable">Contact</span><i
              class="clickable fa-solid fa-phone"
            ></i></Link
          >
        </li>
        <li>
          <Link to="/team" on:click={toggleFab}
            ><span class="txt clickable">Team</span><i
              class="clickable fa-solid fa-user"
            ></i></Link
          >
        </li>
        <li>
          <Link to="/" on:click={toggleFab}
            ><span class="txt clickable">Quick Search</span><i
              class="clickable fa-solid fa-search"
            ></i></Link
          >
        </li>
      </ul>
    </div>
  </div>
{/if}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-interactive-supports-focus -->
<div id="navIcon" role="button" on:click={toggleFab}>&#9776;</div>

<!-- svelte-ignore css-unused-selector -->
<style>
  .FABcontainer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }

  #navIcon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;
  }

  #navBox {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
    justify-content: center;
    align-items: center;
    z-index: -1; /* Initial z-index, hides the menu behind other content */
  }
  #navBox ul {
    /* margin-top: 5vh; */
    height: 70vh;
    /* width: 100vw; */
    max-width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: end;
    /* margin: 50px; */
  }

  #navBox ul li {
    padding: 10px;
    display: flex;
    justify-content: right;
    align-items: center;
    color: #fff;
    color: #e8f3ff;
    max-width: max-content;
  }

  #navBox ul li a span {
    font-size: 0.95rem;
    /* font-weight: 600; */
    border-radius: 1.2rem;
    padding: 0.25rem 1.4rem;
    text-align: right;
    display: inline-block;
    box-sizing: border-box;
  }

  #navBox ul li a i {
    margin-left: 2rem;
    font-size: 1rem;
    padding: 1rem;
    border: 1px dotted whitesmoke;
    border-radius: 2rem;
  }

  #navBox ul li:nth-child(1) a span {
    background-color: #007bff;
  }
  #navBox ul li:nth-child(2) a span {
    background-color: #28a745;
  }

  #navBox ul li:nth-child(3) a span {
    background-color: #7b00ff;
  }

  #navBox ul li:nth-child(4) a span {
    background-color: #dc3545;
  }

  #navBox ul li:nth-child(5) a span {
    background-color: #215a1a;
  }

  #navBox ul li:nth-child(6) a span {
    background-color: #17a2b8;
  }

  #navBox ul li:nth-child(7) a span {
    background-color: #fd7e14;
  }
  #navBox ul li:nth-child(8) a span {
    background-color: rgb(136, 32, 189);
  }
</style>
