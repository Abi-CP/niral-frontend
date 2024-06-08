<script>
    import PermitTemplate from "./PermitTemplate.svelte";
  
    let name = "Accomodation Permit";
    export let date = "N/A";
    export let status = "applied";
    export let transactionDate = "N/A";
    export let transactionId = "N/A";
    export let verifiedDate = "N/A";
   export let validity
    let expiry = "2024-06-12 23:59";
  </script>
  
  <PermitTemplate
    {name}
    {date}
    {status}
    {transactionDate}
    {transactionId}
    {verifiedDate}
    {validity}
    {expiry}
  />
  