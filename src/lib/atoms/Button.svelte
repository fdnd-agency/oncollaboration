<script>
    const {
        title,
        children,
        type = 'button',
        ...restProps
    } = $props()
</script>

<button type="{type}" {...restProps}>
    {@render children?.()}
</button>

<!--
<Button type="submit" class="foo" style="font-weigh: bold;">
    <img src="" alt="" srcset="">
</Button>

<Button type="reset" class="bar" style="font-variant: italic;">
    Klik mij!
</Button>
-->


