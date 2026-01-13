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