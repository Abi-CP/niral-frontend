<div class="flex jcc fdc">
    <ul class="desc">
        {#each descData as data }
            <li>
                <p>{data}</p>
            </li>
        {/each}
     
   
</div>
<script>
    const descData = [
        "Calling all data detectives!",
        " Put your SQL skills to the test in this thrilling murder mystery competition.",
        " Unleash your investigative prowess by crafting precise queries to solve a complex case.",
        " Each query you write acts as a magnifying glass, uncovering hidden clues and leading you closer to the truth.",
        "Embrace the challenge, unravel the mystery, and expose the culprit!."


    ]
</script>
<style>

    div,p{
        font-size: 1rem;
    }


    .desc{
        list-style: none;
       
    }
  
</style>