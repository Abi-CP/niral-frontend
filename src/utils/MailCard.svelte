<!-- MailCard.svelte -->
<script>
  export let email;

  function sendEmail() {
    window.location.href = `mailto:${email}`;
  }
</script>

<!-- <div class=" flex jcsb"> -->
<button class="mail-card flex aic jcc clickable" on:click={sendEmail}>
  <div class="icon-container flex aic jcc">
    <i class="fa-solid fa-envelope"></i>
  </div>
  <div class="container">
    <h5>{email}</h5>
  </div>
</button>

<!-- </div> -->

<style>
.mail-card {
  height: 2.8rem;
  color: white;
  width: 85%;
  padding: 0.7rem 1.5rem 0.7rem 2.5rem;
  margin: 0.5rem;
  border-radius: 5rem;
  background-color: rgba(16, 18, 27, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.mail-card:hover {
  background-color: rgba(16, 18, 27, 0.7);
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.8); /* Add a neon border effect */
}

  .icon-container {
    justify-content: space-between;
    margin-right: 2rem;
  }

  button i {
    font-size: 1rem;
  }

  .container h5 {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
  
    .mail-card {
      width: 100%;
    }
  }
</style>
