<div class="rules-container">
    <h3>Rules</h3>
    <ul>
        {#each rules as rule }
            <li>
                <p>{rule}</p>
            </li>
        {/each}
    </ul>
    <h3>JUDGEMENT BASED ON:    </h3>
    <ul>
        {#each judgement as judgement }
            <li>
                <p>{judgement}</p>
            </li>
        {/each}
        
    </ul>

</div>
<script>
    const rules = [
        "Each group can have a maximum of two members.",
        "Ensure that a copy of the PPT is submitted via email at least two days prior to the event.",
        "Each group will have 5 minutes for the presentation followed by a 2-minute Q&A session."
    ]
    const judgement = [
        "Creativity - Originality and innovativeness of the idea",
        "Speaking Skill - Clarity, confidence, and effectiveness of the presentation",
        "Idea of Concept - Strength and feasibility of the concept presented",
        "Applications of the Prototype - Practical applications and potential impact of the prototype"
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