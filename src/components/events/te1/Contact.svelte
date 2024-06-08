<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
    {
        "name": "Renuga S",
        "phone": "+91  86677 68824"
    },
    {
         "name":"SHERBIN THARIKA",
         "phone"   : "+91 9344062437"
    }
]

let email = "cegniral@gmail.com"
</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

