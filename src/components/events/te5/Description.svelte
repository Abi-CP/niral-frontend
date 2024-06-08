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
        "Dive into the world of programming under pressure with our Blind Code Typing Challenge.",
        " This event tests not only your coding skills but also your ability to type code accurately without seeing the screen.",
        " Participants will write code to solve given problems, relying on their memory and touch-typing skills.",
        " It's a unique and thrilling way to showcase your programming prowess."
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