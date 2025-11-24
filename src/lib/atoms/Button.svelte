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

    .search-button {
        position: absolute;
        right: 0em;
        top: 0em;
        height: 100%;
        background-color: var(--primary-color-aqua-dark-3);
    }
    
</style>
