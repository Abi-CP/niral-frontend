<script>

</script>

<main>
    <div class="glassScreen">

    </div>
</main>

<style>

main{
    width: 100vw;
    height: 100vh;
    padding-left: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.glassScreen{
    width: calc(100vw -8rem);
    height: calc(100vh - 4rem);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.5vh;
    -webkit-backdrop-filter: blur(10px) saturate(100%);
    backdrop-filter: blur(10px) saturate(120%);
}

</style>