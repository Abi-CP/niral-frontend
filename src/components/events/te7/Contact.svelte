<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
  {
    "name": "Vishnuvardhan",
    "phone": "9600150240 "
},
{
    "name": "Abhinav Premkumar",
    "phone": "7708296899"
}


]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

