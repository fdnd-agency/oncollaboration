<script>
    let { data } = $props();
    import { ContainerFilters} from '$lib/index.js'
</script>

<form action="" method="get" use:enhance>
    <fieldset>
        <legend>Filters</legend>
        <p class="intro-filters">
            View all speakers or use the filter to view your bookmarked speakers
        </p>

        <ContainerFilters data={data}></ContainerFilters>
    </fieldset>
</form>

<style>

form {
    margin: -3em 1em 1em 1em;
    padding: 1em;
    background-color: var(--neutral-color-lightest);
    border-radius: var(--border-radius-medium);
}

fieldset {
    margin: 1em;
    padding: 1em;
    border: none;
}

legend {
    font-family: var(--primary-font-family);
    font-size: var(--font-size-medium);
    font-weight: var(--primary-font-weight);
    line-height: var(--primary-line-height);
}

</style>