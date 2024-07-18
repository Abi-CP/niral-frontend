<script>
    import PermitTemplate from "./PermitTemplate.svelte";
  
    let name = "Accomodation Permit";
    export let date = "N/A";
    export let status = "applied";
    export let transactionDate = "N/A";
    export let transactionId = "N/A";
    export let verifiedDate = undefined
   export let validity
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
  