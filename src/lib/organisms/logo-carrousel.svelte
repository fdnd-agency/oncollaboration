<script>
    import "$lib/global.css";
    import Carrousel from "$lib/molecules/carrousel.svelte";
    let { data } = $props();
</script>

<section class="homepage-carrousel">
    <Carrousel data={data} />
</section>

<style>
    .homepage-carrousel {
        display: grid;
        position: relative;
        align-content: center;
        max-width: 73.5rem;
        row-gap: 2rem;
        overflow: hidden;
        padding-block: 1rem;

        @media ( min-width: 56.25em ) {
            padding-block: 2rem;
        }
    }
</style>