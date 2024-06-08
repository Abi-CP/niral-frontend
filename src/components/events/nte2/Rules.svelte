<div class="rules-container">
   
    <ul>
        {#each rules as rule }
            <li>
                <p>{rule}</p>
            </li>
        {/each}
    </ul>
    
</div>
<script>
    const rules = [
        "Each team must consist of two members.",
        "Mobile phones and other electronic devices are not permitted during the quiz.",
        "The organisers' decision will be final.",
        "Any form of cheating will result in disqualification.",
        "Be punctual, late arrivals will be prohibited.",
        "Enjoy the experience and may the best minds prevail!"
    ]
   
</script>
<style>
    ul{
        display: flex;
        flex-direction: column;
        
        padding-left:40px;
        
    }
    li{
        list-style-type:circle;
        list-style:decimal;
        padding: 3px 10px;
    }
</style>