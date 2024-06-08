<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
    
    {
        "name": "Balasundari S",
        "phone": "+91 7358394577"
    },
    {
         "name":"Divyaa R",
         "phone"   : "+91 7397243643"
    }
]

let email = "cegniral@gmail.com"
</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

