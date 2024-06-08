<script>
  export let name = "N/A";
  export let validity = "14, 15, June";
  export let price = "₹";
  export let waveText = "N/A";

  let isExpired = false;

  let isExpanded = false;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }

  waveText = `Permit Verification request have been submitted. Kindly wait until verification.`;

  let spans = [];

  waveText.split("").forEach((char, index) => {
    spans.push({ char, delay: index % 30 });
  });
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  class="ticket {isExpired ? 'expired' : ''} {isExpanded ? 'expanded' : ''}"
  tabindex="0"
  on:focus={toggleExpand}
  on:blur={() => (isExpanded = false)}
>
  <div class="flex jcsb">
    <h4>{name}</h4>
  </div>
  <div class="flex jcsb">
    <div>
      <p class="price">{price}</p>
    </div>
    <div class="flex aie">
      {#if !isExpanded}
        <i class="fa-solid fa-plus"></i>{/if}
    </div>
  </div>
  <div class="container">
    <p style={isExpired ? "text-decoration: line-through;" : ""}>
      Date Valid: {validity}
    </p>
    <div class="details">
      <div class="waveTextContainer">
        <div class="wave-text">
          {#each spans as span, index (index)}
            <span style="--i: {span.delay}">{span.char}</span>
          {/each}
        </div>
      </div>
    </div>
    <div class="btnContainer flex jcc">
      <button type="button">Get Now</button>
    </div>
  </div>
</div>

<style>
  button {
    background-color: white;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #f2f2f2; /* Light gray */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  .ticket {
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: #f0f0f0;
    min-width: 250px;
    max-width: 300px;
    color: black;
    margin: 1rem;
  }

  .ticket.expanded {
    color: #fff;
    background-color: #0f3cc9;
  }

  .container {
    margin-top: 0.5rem;
    display: none;
    font-size: 0.95rem;
  }
  .details {
    margin: 1rem 1rem;
    font-size: 0.85rem;
  }

  .ticket.expanded .container {
    display: block;
  }


  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }


  @keyframes colorWave {
    0%,
    100% {
      color: #9eb5fa;
    }
    50% {
      color: white;
    }
  }

  .waveTextContainer {
    margin: 0rem 0rem 1rem;
  }

  .wave-text {
    display: inline;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 0;
    color: #9eb5fa;
    white-space: pre-wrap;
  }

  .wave-text span {
    animation: colorWave 1.5s infinite;
    animation-delay: calc(0.1s * var(--i));
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    .ticket {
      width: 95%;
    }
  }
</style>
