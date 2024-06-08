<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
  {
    "name": "Subash G  ",
    "phone": " 7806884405"
},
{
    "name": "Elavarasan V",
    "phone": "7397321350"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

