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
        "Each team can have a maximum of 2 members.",
        "The participants expected to have basic knowledge on SQL.",
        "The organisers' decision will be final."

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