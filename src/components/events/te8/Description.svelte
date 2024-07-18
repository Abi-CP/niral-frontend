<script>
  const descData = [
    "Embark on an extraordinary journey in the 'Data Alchemist Odyssey!'"," Participants will delve into the mystical world of data, unraveling hidden patterns and uncovering secrets.",
    " In this challenge, you'll be tested on your ability to transform raw data into gold."," Are you ready to prove your alchemical prowess and rise to the top? Join us and let the odyssey begin!",
  ];
</script>

<div class="flex jcc fdc">
  <ul class="desc">
    {#each descData as data}
      <li>
        <p>{data}</p>
      </li>
      <br>
    {/each}
  </ul>
</div>

<style>
  div,
  p {
    font-size: 1rem;
  }

  .desc {
    list-style: none;
  }
</style>
