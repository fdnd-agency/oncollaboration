<script>
    const {
        children,
        name = '',
        ...restProps
    } = $props()
</script>


<select name={name} {...restProps}>
    {@render children?.()}
</select>

<style>
 select {
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
    }
</style>