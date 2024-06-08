<script>
  import ContactCard from "../../../utils/ContactCard.svelte";
  import MailCard from "../../../utils/MailCard.svelte";

let contacts = [
    {
        "name": "Renuga S",
        "phone": "+91  86677 68824"
    },
    {
        "name": "Dinesh Kumar",
        "phone": "+91 77085 80647"
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