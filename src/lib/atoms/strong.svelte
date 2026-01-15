<script>
    import "$lib/global.css"
    let { children } = $props();
</script>

<strong>
    {@render children?.()}
</strong>

<style>
    strong {
        color: var(--neutral-color-lightest);
        font-family: var(--primary-font-family);
        font-style: var(--secondary-font-weight);
    }
</style>