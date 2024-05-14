<script>
  import { navigate } from "svelte-routing";
  import { pendingPayment } from "../stores/pendingPayment";

  const updatePendingPayment = () => {
    pendingPayment.update(() => {
      return {
        pending: true,
        permitID: "",
      };
    });
    navigate("/payment")
  };
</script>

<button style="width: 100vw;height:50vh;" on:click={updatePendingPayment}></button>