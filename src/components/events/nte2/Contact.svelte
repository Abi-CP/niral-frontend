<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
  {
    "name": "Aiswariya ",
    "phone": " 6369765738"
},
{
    "name": "Malini",
    "phone": "7904653721"
},
{
    "name": "SHALINI.S",
    "phone": "+91 6380235446"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

