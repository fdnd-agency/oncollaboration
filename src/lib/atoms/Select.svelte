<script>
    let {
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

    @container (min-width: 700px) {
    #category {
        grid-column: 2 / 1; 
    }
}

@container (min-width: 700px) {
    #recent {
        grid-column: 2 / 2;
    }
}
</style>