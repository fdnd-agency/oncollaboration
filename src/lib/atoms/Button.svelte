<script>
    let { title, children, type = "button", ...restProps } = $props();
</script>

<button {type} {...restProps}>
    {@render children?.()}
</button>

<style>
    button {
    padding: 0.5em;
    font-family: var(--primary-font-family);
    font-size: var(--font-size-small);
}

.filteren,
.reset-filter {
    background-color: var(--primary-color-aqua-dark-3);
    border: 1px solid var(--primary-color-aqua-dark-3);
    border-radius: var(--border-radius-small);
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
    top: 0em;
    right: 0em;
    display: flex;
    place-content: center;
    width: 3em;
    height: 100%;
    background-color: var(--primary-color-aqua-dark-3);
}

.watchlist {
    display: flex;
    align-items: center;
    gap: .5em;
    width: fit-content;
    margin: 1em 0em 0em 1em;
    padding: 0.5em;
    background-color: var(--primary-color-aqua-dark-2);
    border: 1px solid var(--primary-color-aqua-dark-2);
    border-radius: var(--border-radius-small);
    color: var(--neutral-color-lightest);
    font-size: var(--font-size-small);
}

</style>
