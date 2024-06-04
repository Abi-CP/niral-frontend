<script>
  let selectedPermit = '';

  function handleSelection(event) {
    selectedPermit = event.target.textContent.trim();
  }
</script>

<div class="permitThumbnails">
  <button class="permitWrapper" on:click={handleSelection}>
    <div class="p1">Accommodation Permit</div>
  </button>
  <button class="permitWrapper" on:click={handleSelection}>
    <div class="p2">Events Permit</div>
  </button>
  <button class="permitWrapper" on:click={handleSelection}>
    <div class="p3">Hackathon Permit</div>
  </button>
  <button class="permitWrapper" on:click={handleSelection}>
    <div class="p4">Workshop: Gen-AI Permit</div>
  </button>
</div>

<div class="infoContainer">
  <p>{selectedPermit}</p>
</div>

<style>
  .permitWrapper {
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .permitWrapper:hover {
    background-color: #f0f0f0;
  }

  .infoContainer {
    margin-top: 20px;
  }
</style>
