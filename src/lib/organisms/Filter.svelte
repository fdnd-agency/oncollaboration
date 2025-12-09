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
        padding: 1em;
        margin: -3em 1em 1em 1em;
        background-color: var(--neutral-color-lightest);
        border-radius: var(--border-radius-medium);
    }

    fieldset {
        border: none;
        margin: 1em;
        padding: 1em;
    }

    legend {
        font-family: var(--primary-font-family);
        font-weight: var(--primary-font-weight);
        line-height: var(--primary-line-height);
        font-size: var(--font-size-medium);
    }
</style>