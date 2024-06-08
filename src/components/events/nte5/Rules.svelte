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
        "Time limit is followed strictly.",
        "Maximum of 2 members per team is allowed.",
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