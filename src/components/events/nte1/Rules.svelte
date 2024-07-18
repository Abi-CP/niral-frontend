<script>
  const rules = [
    "Event comprises single round, with a maximum of 3 members allowed per team",
    "Using mobile phones for any assistance is prohibited",
    "Decision taken by the organizers are final",
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
