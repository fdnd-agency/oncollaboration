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