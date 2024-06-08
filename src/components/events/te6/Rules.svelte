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
        "Each team can have 2-3 members.",
        "Teams must specify whether they are focusing on the front end or back end .",
        "The competition will span over 3 hours.",
        "All submissions must be made by the specified deadline.",
        "The evaluation pattern will be revealed on the event day.",
        "Strictly no use of any AI tools."
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