<script>
    import { navigate } from 'svelte-routing';
    import { pendingPayment } from '../stores/pendingPayment';
    import { onMount, onDestroy } from 'svelte';
  
    let storeValue;
  
    const unsubscribe = pendingPayment.subscribe(value => {
      storeValue = value;
    });
  
    onMount(() => {
      // Initialize the store value
      storeValue = $pendingPayment;
      if (!storeValue.pending) {
        navigate('/');
      }
    });
  
    onDestroy(() => {
      unsubscribe();
    });
  
    const updatePendingPayment = () => {
      pendingPayment.update(() => {
        return {
          pending: false,
          permitID: "",
        };
      });
      navigate('/');
    };
  </script>
  
  <p>Pending Payment: {storeValue.pending}</p>
  <p>Permit ID: {storeValue.permitID}</p>
  
  <button style="width: 100vw; height: 50vh;" on:click={updatePendingPayment}>Update Pending Payment</button>