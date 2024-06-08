<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [

  {
    "name": "Abishek",
    "phone": "9500471675 "
},
{
    "name": "Visagan",
    "phone": "7339124748"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

