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
        "Single player game", "The participants are expected to have basic knowledge on data structure and algorithms", "Time limit will be maintained strictly", "The organisers' decision will be final"
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