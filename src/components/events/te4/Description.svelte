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
        "Welcome to Code Brawl,",
        "An intense coding competition where participants are challenged to solve real-world problems with a focus on space and time complexity.",
        "The event is designed to test participant’s problem-solving skills, algorithmic knowledge, and coding efficiency.",
        "Get ready for an engaging and stimulating experience!"
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