<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
    
{
    "name": "SOUNDHARYA.R",
    "phone": "+91 8270596210"
},
{
    "name": "SHALINI.S",
    "phone": "+91 6380235446"
},
{
    "name": "AISWARIYA.A.K",
    "phone": "+91 6369765738"
},
{
    "name": "MALINI.S",
    "phone": "+91 7904653721"
}

]

</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

