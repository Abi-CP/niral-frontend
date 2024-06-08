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
        "After a devastating apocalypse on Earth, humanity now survives in remote forest outposts governed by a military authority known as the Forest Rangers.",
        " A team of rangers is sent on a secret mission to an abandoned research station, the last known location of the renowned biologist, Dr. Celestia Nova.",
        " Dr. Nova was on the verge of discovering a groundbreaking ecological phenomenon that could ensure the survival of the human race and restore the natural world. ",
        "Your team must unravel the mystery of her disappearance, decipher her research, and escape the forest station before it succumbs to the encroaching wilderness. ",
        " Join `Nature's Enigma,` a thrilling nature-themed escape room adventure. Gather your team of explorers and get ready to unlock the secrets of the natural world in a race against time."



    ]
</script>
<style>

    div,p{
        font-size: 1rem;
    }


    .desc{
        list-style: none;
       
    }
    p{
        text-indent: 30px;
    }
  
</style>