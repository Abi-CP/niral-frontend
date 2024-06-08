<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
  {
    "name": "Ayush Bhargaw",
    "phone": "6209-847844"
},
{
    "name": "Rahul Kumar",
    "phone": "97985 39657"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

