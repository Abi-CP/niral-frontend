<script>
  import { isLoggedIn } from "../stores/loginStatus";
  import { onDestroy, onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import LoginForm from "../components/LoginForm.svelte";


  let unsubscribe;
  let toNavigate = false
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

<LoginForm {toNavigate}/>