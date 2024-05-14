<!-- App.svelte -->
<script>

  import { Router } from "svelte-routing";
  import Routes from "./routes/Routes.svelte";
  import Nav from "./utils/Nav.svelte";
  import toast, {Toaster} from 'svelte-french-toast'

function handleClick() {
  toast.success('Hello, world!')
}

function someFunction () {
  // notifier.success('Notifications work!', 5000)
}

	let screenWidth = window.screen.width;
  setTimeout(()=>{
    // console.log("2s");
        // createToast('success', "message")
    },2000)
</script>

<main>
  <Router>
    <Nav screenWidth={screenWidth}/>
    <Routes />
  </Router>
  <!-- <Toast/> -->
  <!-- <Child/> -->
  <!-- <Check1/> -->
  <!-- <Toast/> -->
  <!-- <NotificationDisplay /> -->
  <Toaster />
<button type="button" on:click={handleClick}>Toast</button>

</main>

<style>
  main {
    background: url("./buzzx4xo.png");
    height: 150dvh;
  }
</style>
