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
        "Join us for an exciting event that celebrates the vibrant world of anime through a series of thrilling quiz rounds",
        "Participants will compete in teams of two, showcasing their knowledge and quick recognition skills across various anime-themed challenges.",
        " It's a perfect opportunity for all anime enthusiasts to dive deep into their favourite series and characters, and to demonstrate their otaku expertise."

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