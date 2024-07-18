<script>
  import { onMount, onDestroy } from "svelte";
  import { Link } from "svelte-routing";
  import { isLoggedIn } from "../../stores/loginStatus";

  let navIcon;
  let fabActive = false;

  const links = [
    { to: "/", label: "Home", icon: "fa-solid fa-house" },
    {
      to: "/workshops",
      label: "Workshops",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    // { to: "/events", label: "Events", icon: "fa-solid fa-dice" },
    {
      to: "/sponsors",
      label: "Sponsors",
      icon: "fa-solid fa-handshake-simple",
    },
    { to: "/permits", label: "Permits", icon: "fa-solid fa-ticket" },
    { to: "/accommodation", label: "Accommodation", icon: "fa-solid fa-bed" },
    { to: "/contact", label: "Contact", icon: "fa-solid fa-phone" },
    { to: "/team", label: "Team", icon: "fa-solid fa-user" },
    {
      to: "/account",
      label: "Account",
      icon: "fas fa-circle-user",
      authRequired: true,
    }, // This needs to be conditionally rendered
    {
      to: "/login",
      label: "Login",
      icon: "fas fa-arrow-right-to-bracket",
      authRequired: false,
    }, // This needs to be conditionally rendered
    // { to: "/", label: "Quick Search", icon: "fa-solid fa-search" },
  ];

  function toggleFab() {
    fabActive = !fabActive;
    if (navIcon.innerHTML == "☰") {
      navIcon.innerHTML = "×";

      // navIcon.style.padding = "10px 0 0";
      document.body.style.overflow = "hidden";
    } else {
      navIcon.innerHTML = "☰";
      // navIcon.style.padding = "0 0 10px";
      document.body.style.overflow = "auto";
    }
  }

  onMount(() => {
    navIcon = document.getElementById("navIcon");
  });

  onDestroy(() => {
    navIcon.removeEventListener("click");
  });
</script>

{#if fabActive}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="FABcontainer" on:click={toggleFab}>
    <div id="navBox">
      <ul>
        {#each links as link}
          {#if link.authRequired === undefined || link.authRequired === $isLoggedIn}
            <li>
              <Link to={link.to} on:click={toggleFab}>
                <span class="txt clickable">{link.label}</span>
                <i class={`clickable ${link.icon}`}></i>
              </Link>
            </li>
          {/if}
        {/each}
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
    backdrop-filter: blur(5px);
  }

  #navIcon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ac0d6e;

    /* padding: 0 0 5px; */
    color: #fff;
    font-size: 1.2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.3);
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
    height: 70vh;
    max-width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: end;
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
