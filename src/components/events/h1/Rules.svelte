<script>
    const rules = [
     "Teams must consist of 2 or 3 members.",
     "Arrive at the venue at least 15 minutes early.",
     "The challenge is to build a working prototype for the given problem statement within 12 hours.",
     "Any technology stack can be used to build the application.",
     "Be prepared for intermediary challenges to keep the game exciting.",
     "The organizers' decision is final."
    ];
  </script>
  
  <div class="rules-container">
    <ul>
      {#each rules as rule}
        <li>
          <p>{rule}</p>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    ul {
      display: flex;
      flex-direction: column;
  
      padding-left: 40px;
    }
    li {
      list-style-type: circle;
      list-style: decimal;
      padding: 3px 10px;
    }
  </style>
  