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
        "Join us for an engaging event named  TECHNICAL CONNECTIONS, where participants (2 – participants per team) will put their problem-solving skills to the test.",
        " In this challenge, various photos will be displayed, each containing visual hints that, when connected, reveal a technical word. Participants will need to analyse and connect the dots between these images to uncover the hidden term",
        "A basic understanding of technical vocabulary and keen observation skills are expected, ensuring an enjoyable and intellectually stimulating experience for all involved."

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
        text-align: justify;
    }
  
</style>