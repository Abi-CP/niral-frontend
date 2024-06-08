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
        "Explore the realms of innovation with a spectrum ranging from software models to integrated hardware-software solutions or groundbreaking prototypes.",
        " Embrace creativity as you craft your vision.",
        "Your presentation, a fusion of elegance and substance, will unfold with an engaging introduction, crystal-clear objectives, an immersive description, and the promising outcomes paving the way to a transformative future."
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