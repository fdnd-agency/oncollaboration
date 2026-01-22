<script>
    let { text, ...restProps } = $props();
</script>

<p {...restProps}>
    {text}
</p>

<style>
    
.duration {
    position: absolute;
    top: 1em;
    right: 1.5em;
    width: fit-content;
    padding: 0.5em;
    background-color: var(--neutral-color-darker);
    border-radius: var(--border-radius-small);
    color: var(--neutral-color-lightest);
    font-size: var(--font-size-small);
}

.category {
    position: absolute;
    top: 1em;
    left: 1.5em;
    width: fit-content;
    padding: 0.5em;
    background-color: var(--primary-color-blue-dark-2);
    border-radius: var(--border-radius-small);
    color: var(--neutral-color-lightest);
    font-size: var(--font-size-small);
}
</style>