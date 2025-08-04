<script>
  import { onMount } from "svelte";

  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const targetDate = new Date("2025-10-01T07:00:00");

  // Function to update the countdown
  function updateCountdown() {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();

    // Calculations for days, hours, minutes, and seconds
    const daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursValue = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesValue = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown with leading zeros
    days = daysValue < 10 ? `0${daysValue}` : `${daysValue}`;
    hours = hoursValue < 10 ? `0${hoursValue}` : `${hoursValue}`;
    minutes = minutesValue < 10 ? `0${minutesValue}` : `${minutesValue}`;
    seconds = secondsValue < 10 ? `0${secondsValue}` : `${secondsValue}`;
  }

  // Update the countdown every second
  onMount(() => {
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  });
</script>

<p id="timer">
  <span class="days">{days}</span>D <span class="hours">{hours}</span>H
  <span class="minutes">{minutes}</span>M
  <span class="seconds">{seconds}</span>S
</p>
<!-- <p class="msg" style="text-align: center;">Stay Tuned...</p> -->

<style>
    * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
  #timer, .msg {
    margin-top: 15vh;
    font-size: 1.2rem;
    color: red;
  }
  #timer:hover {
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
  }

  .days,
  .minutes,
  .hours,
  .seconds, .msg {
    color: white;
    font-size: 5rem;
    font-family: "ds digi";
  }

  @media (max-width: 1000px) {
    #timer, .msg {
      margin-top: 7vh;
    }
  }

  @media (max-width: 767px) {
    .days,
    .minutes,
    .hours,
    .seconds {
      font-size: 3rem;
    }
  }
</style>
