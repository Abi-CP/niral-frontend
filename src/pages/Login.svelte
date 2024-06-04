<script>
  import { isLoggedIn } from "../stores/loginStatus";
  import { onDestroy, onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import LoginForm from "../components/LoginForm.svelte";


  let unsubscribe;
  let toNavigate = true
  onMount(() => {
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
<div class="main  flex jcc aic">

<LoginForm {toNavigate}/>

</div>
<style>
   .main {
    background: url("buzzx4xo.png");
    width: 100%;
    height: 90vh;
    height: 100dvh;
  }
</style>