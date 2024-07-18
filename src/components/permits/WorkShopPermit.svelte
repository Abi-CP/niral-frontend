<script>
  import PermitTemplate from "./PermitTemplate.svelte";

  let name = "Gen-AI Workshop Permit";
  export let date = "N/A";
  export let status = "applied";
  export let transactionDate = "N/A";
  export let transactionId = "N/A";
  export let verifiedDate = undefined;
  let validity = "June 12, 2024";
  let expiry = "2024-06-12 23:59";

  if(verifiedDate){
    date=verifiedDate
  }
</script>

<PermitTemplate
  {name}
  {date}
  {status}
  {transactionDate}
  {transactionId}
  {validity}
  {expiry}
/>
