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
        "Get ready for an electrifying competition that lets teams unleash their web development talents, whether they shine on the front end or back end of a website!",
"This is your chance to showcase your creativity, technical brilliance, and problem-solving prowess in a thrilling, high-energy environment.",
"Whether you're a master at crafting visually stunning, user-friendly interfaces or an expert at building robust, high-performance back ends with flawless data management, this event is made for you.",
"Dive into the excitement, push the boundaries of innovation, and demonstrate your expertise in the fast-paced world of web development.",
"Impress the judges and your peers with your ingenuity and technical skills, and seize the opportunity to make a lasting impact.",
"Get ready to dazzle and dominate in this ultimate web development showdown!"

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