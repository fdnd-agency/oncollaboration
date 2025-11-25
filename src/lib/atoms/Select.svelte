<script>
    let { children, name = "", ...restProps } = $props();
    import arrowDownSvg from "$lib/assets/arrow-down.svg";
</script>

<select {name} {...restProps} style="--arrow: url({arrowDownSvg})">
    {@render children?.()}
</select>

<style>
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
        background-image: var(--arrow);
        background-repeat: no-repeat;
        background-position: right 0.5em center;
        background-size: 1em;
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
