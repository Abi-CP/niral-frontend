<script>
  export let name;
  export let phone;

  function callNumber() {
    window.location.href = `tel:${phone}`;
  }

  function openWhatsApp() {
    window.location.href = `https://wa.me/${phone.replace(/\s/g, "")}`;
  }
</script>

<div class="contact-card flex jcsb">
  <div class="container">
    <h5>{name}</h5>
    <p>{phone}</p>
  </div>
  <div class="button-container flex aic jcc">
    <button class="flex aic jcc clickable" on:click={callNumber}
      ><i class="fa-solid fa-phone"></i></button
    >
    <button class="flex aic jcc clickable" on:click={openWhatsApp}
      ><i class="fa-brands fa-whatsapp"></i></button
    >
  </div>
</div>

<style>
  .contact-card {
    width: 100%;
    padding: 0.7rem 1.5rem 0.7rem 2.5rem;
    margin: 0.5rem;
    border-radius: 10px;
    background-color: rgba(16, 18, 27, 0.45);
  }
  .contact-card:hover {
  background-color: rgba(16, 18, 27, 0.55);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

  .button-container {
    justify-content: space-evenly;
    width: 30%;
    min-width: 5.5rem;
  }

  button {
    height: 2.8rem;
    width: 2.8rem;
    padding: 0.75rem;
    border: 0.25px solid rgba(255, 255, 255, 0.15) !important;
    border-radius: 5rem;
    background-color: rgba(16, 18, 27, 0.7);
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
  background-color: rgba(16, 18, 27, 0.8);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
  button i {
    font-size: 1rem;
    margin: 0 .5rem;
  }
  button .fa-whatsapp {
    font-size: 1.25rem;
  }
  .container h5 {
    font-size: 1rem;
  }
  .container p {
    font-size: 0.8rem;
  }
  @media (max-width: 767px) {
    .contact-card {
      margin: 0.5rem 0.2rem;
      width: 100%;
      padding: 0.7rem 0.7rem 0.7rem 1.5rem;
    }
    button {
      height: 2.5rem;
      width: 2.5rem;
      padding: 0.75rem;
    }

    button i {
      font-size: 0.8rem;
    }
    button .fa-whatsapp {
      font-size: 1.2rem;
    }
    .button-container {
      justify-content: space-between;
    }
  }
</style>
