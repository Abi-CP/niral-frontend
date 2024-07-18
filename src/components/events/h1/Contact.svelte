<script>
    import ContactCard from "../../../utils/ContactCard.svelte";
    // import MailCard from "../../../utils/MailCard.svelte";
  
  let contacts = [
    {
      "name": "George Lifin Rell",
      "phone": "+91 90258 04715"
  },
  {
      "name": "Saravana Kumar",
      "phone": "+91 75300 21670"
  }
  
  
  ]
  
  </script>
  
  {#each contacts as contact}
      <ContactCard name={contact.name} phone={contact.phone} />
  {/each}
  
  