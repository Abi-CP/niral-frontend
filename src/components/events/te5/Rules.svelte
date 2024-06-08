<div class="rules-container">
    <h3>Rules</h3>
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
        "Single player  game.",
        "The organisers' decision will be final.",
        "If participants disobey the rules of organisers and turn on the monitor,then the participant is considered to be disqualified."

    ]
  
</script>
<style>
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left:40px;
        margin-bottom: 10px;
    }
    li{
        list-style-type:circle;
        list-style:decimal;
        padding: 6px 10px;
    }
</style>