<script>
  import { Link } from "svelte-routing";

  export let  isLoggedIn
  

  const links = [
    { to: "/", label: "Home", icon: "fa-solid fa-house" },
    { to: "/workshops", label: "Workshops", icon: "fa-solid fa-screwdriver-wrench" },
    { to: "/events", label: "Events", icon: "fa-solid fa-calendar-days" },
    { to: "/sponsors", label: "Sponsors", icon: "fa-solid fa-gem" },
    { to: "/accommodation", label: "Accommodation", icon: "fa-solid fa-bed" },
    { to: "/team", label: "Team", icon: "fa-solid fa-users" },
    { to: "/contact", label: "Contact", icon: "fa-regular fa-paper-plane" },
    { to: isLoggedIn ? "/account" : "/login", label: isLoggedIn ? "Account" : "Login", icon: isLoggedIn ? "fa-regular fa-circle-user" : "fa-solid fa-arrow-right-to-bracket" },
  ];
</script>

<div class="side-nav flex jcc" id=".side-navBar">
  <ul>
    {#each links as link}
    <Link to={link.to}>
      <li>
          <p>{link.label}</p>
          <i class={link.icon}></i>
        </li>
      </Link>
    {/each}
  </ul>
</div>

<style>
  .side-nav {
    width: 4rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    animation: slideRight 0.2s ease-out forwards;
    backdrop-filter: blur(5px);
    flex-direction: column;
    transition: width .05s; 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0 15px;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: .8rem 1.4rem;
  }

  ul li:hover {
    background: linear-gradient(90deg, rgba(0,0,0,0),rgba(255, 255, 255, 0.07),rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.1));
  }

  ul li p {
    font-size: 1rem;
    white-space: nowrap;
    text-align: right;
    padding: 0 1rem;
    display: none;
    animation-delay: 0.5s;
    width: 0;
    transition: width .5s;
  }

  .side-nav:hover {
    width: 15rem;
  }

  .side-nav:hover ul li p {
    display: block;
    width: fit-content;
    /* animation: slideRight 0.2s ease-out forwards;
    animation-delay: 0.5s; */
  }

  .side-nav {
    background-color: rgba(0, 0, 0, 0.6);
    /* max-width: 300px; */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(10px);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
  }

  p {
    color: #fff; /* Text color */
    font-weight: bold;
    display: inline-block; /* Align text and image */
    /* flex-grow: 0; */
  }

  i {
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    margin-left: auto;
  }

  @keyframes slideRight {
    from {
      opacity: 0.5;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

</style>
