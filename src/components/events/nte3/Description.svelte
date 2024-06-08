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
        "Unleash your creativity in `Oru Kadha Sollatuma Sir` ! Participants will begin telling a story with an initial word provided to them.",
        " Every 15-20 seconds, a new word will be given, and they must seamlessly incorporate it into their story. ",
        "Each participant has a time limit of 2 minutes to weave an engaging and coherent tale. This fast-paced, fun event tests your quick thinking and storytelling skills. Are you ready to rise to the challenge and captivate your audience with your impromptu narrative? Join us and let your imagination run wild!"
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