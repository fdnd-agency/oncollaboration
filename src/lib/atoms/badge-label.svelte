<script>
    let { text, ...restProps } = $props();
</script>

<p {...restProps}>
    {text}
</p>

<style>
     .duration {
        background-color: var(--neutral-color-darker);
        color: var(--neutral-color-lightest);
        font-size: var(--font-size-small);
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        width: fit-content;
        position: absolute;
        top: 1em;
        right: 1.5em;
    }

    .category {
        background-color: var(--primary-color-blue-dark-2);
        color: var(--neutral-color-lightest);
        font-size: var(--font-size-small);
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        width: fit-content;
        position: absolute;
        top: 1em;
        left: 1.5em;
    }
</style>