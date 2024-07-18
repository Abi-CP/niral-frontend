<script>
  import { onMount } from "svelte";
    import EventCard from "../components/events/EventCard.svelte";
  import { navigate } from "svelte-routing";
    onMount(() => {
        navigate('/')
    })
</script>
<div class="cardContainer flex center wrap">
    <EventCard/>
    <EventCard/>
    <EventCard/>
</div>
<!-- svelte-ignore css-unused-selector -->
<style>
.flex {
    display: flex;
}

.center {
    align-items: center;
    justify-content: center;
}

.wrap {
    flex-wrap: wrap;
}

.cardContainer {
    width: 100vw;
    gap: calc((100% - 2*30vh) /2 - 1px);
    row-gap: 2vh;
    background: #000;
    padding: 10vh 0;
}
</style>