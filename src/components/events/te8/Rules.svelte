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
        "The event comprises 2 rounds, with a maximum of 2 participants per team.",
        "Participants can bring their own laptops or use the lab systems provided.",
        "The organizers' decision is final."
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