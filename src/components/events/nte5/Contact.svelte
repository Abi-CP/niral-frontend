<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [

  {
    "name": "Shiva Balan K ",
    "phone": " 6382242736"
},
{
    "name": "Ajay Venkatesh PS",
    "phone": "8778176646"
},
{
  "name":"Ramprasath R",
  "phone":"8903995382"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

