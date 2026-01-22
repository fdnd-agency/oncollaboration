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
    position: relative;
    display: grid;
    align-content: center;
    max-width: 73.5rem;
    row-gap: 2rem;
    padding-block: 1rem;
    overflow: hidden;

    @media ( min-width: 56.25em ) {
        padding-block: 2rem;
    }
}

</style>