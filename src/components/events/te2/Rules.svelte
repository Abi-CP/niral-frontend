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
        "No internet access will be provided for any rounds.",
        "Participants are expected to have basic knowledge of digital message decryption.",
        "The organisers' decision will be final.",
        "In case of a tie, time will be the tiebreaker."
    ]
</script>
<style>
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left:40px;
    }
    li{
        list-style-type:circle;
        list-style:decimal;
        padding: 10px;
    }
</style>