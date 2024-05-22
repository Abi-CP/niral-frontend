<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
    {
        "name": "Karthik Narendren",
        "phone": "+91 75502 10518"
    },
    {
        "name": "Aiswariya",
        "phone": "+91 6369 765 738"
    },
    {
        "name": "Soundharya",
        "phone": "+91 82705 96210"
    }
]

let email = "cegniral@gmail.com"
</script>

{#each contacts as contact}
    <ContactCard name={contact.name} phone={contact.phone} />
{/each}

<div class="mail flex jcc">
    <MailCard {email}/>
</div>

<style>
    .mail{
        width: 100%;
        margin-top: 1.5rem;
    }
</style>