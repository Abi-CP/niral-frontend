<div class="flex jcc fdc">
    <ul class="desc">
        {#each descData as data }
            <li>
                <p>{data}</p>
            </li>
        {/each}
    </ul>
   
</div>
<script>
    const descData = [
        "Step into the labyrinth of the unknown, where each twist and turn unveils a new riddle.",
        " Enigma's Odyssey is a voyage through the mind's eye, a challenge for the curious and the bold. ",
        "Dare to decode the mysteries, connect the dots, and discover the unseen paths. Are you ready to embark on this epic quest?"
    ]
</script>
<style>

    div,p{
        font-size: 1rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .desc{
        list-style: none;
       
    }
    p{
        text-indent: 30px;
    }
  
</style>