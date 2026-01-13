<script>
    let { data } = $props();
    import { ContainerCard} from '$lib/index.js'
</script>

<div class="container-cards">
    {#each webinars as webinar}

    <ContainerCard></ContainerCard>

    {/each}
</div>