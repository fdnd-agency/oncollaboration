<script>
    let { title, children, type = "button", ...restProps } = $props();
</script>

<button {type} {...restProps}>
    {@render children?.()}
</button>

<style>
    button {
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
        padding: 0.5em;
    }

    .filteren,
    .reset-filter {
        border-radius: var(--border-radius-small);
        background-color: var(--primary-color-aqua-dark-3);
        border: 1px solid var(--primary-color-aqua-dark-3);
    }

    @container (min-width: 700px) {
    .filteren {
        grid-column: 3;
        grid-row: 2;
    }
}

@container (min-width: 700px) {
    .reset-filter {
        grid-column: 4;
        grid-row: 2;
    }
}

    .search-button {
        position: absolute;
        right: 0em;
        top: 0em;
        height: 100%;
        width: 3em;
        background-color: var(--primary-color-aqua-dark-3);
        display: flex;
        place-content: center;
    }

    .watchlist {
        /* background-color: var(--primary-color-aqua-dark-3); */
          background-color: var(--primary-color-aqua-dark-2);
        border: 1px solid var(--primary-color-aqua-dark-3);
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        font-size: var(--font-size-small);
        width: fit-content;
        display: flex;
        align-items: center;
        gap: .5em;
        margin: 1em 0em 0em 1em;
    }

</style>
