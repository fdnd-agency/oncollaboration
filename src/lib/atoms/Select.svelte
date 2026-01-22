<script>
    let { children, name = "", ...restProps } = $props();
    import arrowDownSvg from "$lib/assets/arrow-down.svg";
</script>

<select {name} {...restProps} style="--arrow: url({arrowDownSvg})">
    {@render children?.()}
</select>

<style>
    
select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0.5em;
    background-image: var(--arrow);
    background-repeat: no-repeat;
    background-position: right 0.5em center;
    background-size: 1em;
    border-radius: var(--border-radius-small);
    font-family: var(--primary-font-family);
    font-size: var(--font-size-small);
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
