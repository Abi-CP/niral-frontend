<script>
  export let name = "N/A";
  export let date = "N/A";
  export let status = "applied";
  export let transactionDate = "N/A";
  export let transactionId = "N/A";
  export let validity = "14, 15, June";
  export let expiry = "2024-06-15 17:20";

  let isExpired = false;

  // Convert the expiry timestamp to a Date object
  let expiryDate = new Date(expiry);

  // Get the current date
  let now = new Date();

  // Check if the expiry date is less than the current date
  if (expiryDate < now) {
    isExpired = true;
  }

  // console.log(isExpired); // Output: true if the timestamp has expired, false otherwise
  let isExpanded = false;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }

  let waveText =
    status == "pending" || status == "applied"
      ? `Permit Verification request have been submitted. Kindly wait until verification.`
      : status == "verified"
        ? `Congradulations! Your pass have been verified successfully`
        : status == "rejected"
          ? `Your request have been rejected. Ensure valid details and try again or contact [Naveen: +91 79043 74673]`
          : "";
  let spans = [];

  // Generate the spans with appropriate delay
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
    <div
      class="statusIcon flex jcc aic"
      style="background-color: {status == 'pending' || status == 'applied'
        ? 'orange'
        : status == 'verified'
          ? 'green'
          : status == 'rejected'
            ? 'red'
            : ''};"
    >
      <i
        class="fa-solid fa-{status == 'pending' || status == 'applied'
          ? 'exclamation'
          : status == 'verified'
            ? 'check'
            : status == 'rejected'
              ? 'xmark'
              : ''}"
      ></i>
    </div>
  </div>
  <div class="flex jcsb">
    <div>
      <p class="headingTxt">
        Status: <span
          style="color: {status == 'pending' || status == 'applied'
            ? '#FF6347'
            : status == 'verified'
              ? 'green'
              : status == 'rejected'
                ? 'red'
                : ''};">{status}</span
        >
      </p>
      <p class="headingTxt">{date ? date : transactionDate}</p>
    </div>
    <div class="flex aie">
      {#if !isExpanded}
        <i class="fa-solid fa-plus"></i>{/if}
    </div>
  </div>
  <div class="container">
    <p style={isExpired ? "text-decoration: line-through;" : ""}>
      Validity: {validity}
    </p>
    <div class="details">
      <div class="waveTextContainer">
        <div class="wave-text">
          {#each spans as span, index (index)}
            <span style="--i: {span.delay}">{span.char}</span>
          {/each}
        </div>
      </div>
      <p>Transaction Date: {transactionDate}</p>
      <p>Transaction ID: {transactionId}</p>
      <p>Verified Date: {date ? date : "N/A"}</p>
    </div>
  </div>
</div>

<style>
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

  .ticket.expired .headingTxt {
    text-decoration: line-through;
  }
  .ticket.expanded {
    color: #fff;
    background-color: #0f3cc9;
  }
  .ticket.expanded .headingTxt {
    text-decoration: none;
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

  .statusIcon {
    height: 25px;
    width: 25px;
    border-radius: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .headingTxt {
    font-size: 0.9rem;
    text-transform: capitalize;
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
