<script>

  import { navigate } from "svelte-routing";

</script>
<div class="windowBtnsContainer flex jcsb">
  <button class="windowBtn clickable" on:click={()=>{navigate("/")}}></button><button class="windowBtn  clickable" on:click={()=>{navigate("/")}}></button><button
    class="windowBtn clickable" on:click={()=>{navigate("/")}}
  ></button>
</div>

<style>
  .windowBtnsContainer {
    margin: 0.8rem 1rem;
    width: 4rem;
  }
  .windowBtn {
    height: 1rem;
    width: 1rem;
    border-width: 0px;
    border-radius: 5rem;
  }

  .windowBtn:nth-child(1) {
    background: #f9544b;
  }
  .windowBtn:nth-child(2) {
    background: #f8ce52;
  }
  .windowBtn:nth-child(3) {
    background: #5fcf65;
  }
</style>
