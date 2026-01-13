<script>
    let { text, ...restProps } = $props();
</script>

<p {...restProps}>
    {text}
</p>