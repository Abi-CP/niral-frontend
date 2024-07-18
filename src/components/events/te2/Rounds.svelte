<script>
  const rounds = [
    {
      round: "Round 1",
      desc: "In Round 1, gear up for a series of exhilarating decryption questions designed to ignite your passion for cryptography. These questions will challenge you to deploy various decryption techniques and algorithms. It's a high-stakes race where speed and accuracy are your best allies! Your performance will be scored meticulously, and in the event of a tie, the fastest solvers will prevail. Every second counts in this fast-paced, heart-pounding round!",
    },
    {
      round: "Round 2",
      desc: "Round 2 cranks the excitement up to maximum! Brace yourself for the ultimate decryption showdown, where you’ll tackle a mind-bending digitally encrypted message. You’ll have to solve a puzzle that guides you to decrypt the digital message. This round is a thrilling test of your cryptographic prowess and creative problem-solving skills. In the event of a tie, the fastest solvers will prevail. Prepare for an adrenaline-fueled, brain-teasing adventure that will leave you exhilarated and eager for more!",
    },
  ];
</script>

<div>
  <div class="rounds">
    {#each rounds as round}
      <div class="round">
        <h3><i class="fa-solid fa-bolt"></i> {round.round}</h3>
        <p>{round.desc}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .rounds {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .round {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .round h3 {
    font-weight: bold;
  }
  .round p {
    font-size: 15px;
    text-align: justify;
    text-indent: 30px;
    color: rgb(217, 217, 217);
  }
</style>
