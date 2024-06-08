<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
  {
    "name": "Sushmitha A T",
    "phone": "6374795985"
},
{
    "name": "Jayashree I",
    "phone": "7397441357"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

