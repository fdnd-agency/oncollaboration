<script>
    let { data } = $props();
    const webinars = data.webinars;
    import { ContainerCard} from '$lib/index.js'
</script>


<div class="container-cards">
    {#each webinars as webinar}
        <ContainerCard {webinar} />
    {/each}
</div>


<style>
     
.container-cards {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-items: center;
    width: fit-content;
    max-width: 60em;
    gap: 2em 3em;
    margin: 1em;
    margin-left: auto;
    margin-right: auto;
    padding: 0em 0em 3em 0em;

    @media (min-width: 650px) {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
        justify-self: center;
    }

    @media (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
    }

    @media (min-width: 1920px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}

</style>