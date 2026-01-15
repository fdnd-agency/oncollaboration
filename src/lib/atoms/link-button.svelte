<script>
    let { href = "#", children, ...restProps } = $props();
</script>

<a {href} {...restProps}>
    {@render children?.()}
</a>

<style>
     .to-webinar-detail {
        /* background-color: var(--primary-color-aqua-dark-2); */
        background-color: var(--primary-color-aqua-dark-3);
        color: var(--neutral-color-lightest);
        border-radius: var(--border-radius-small);
        font-weight: var(--secondary-font-weight);
        margin: 1em;
        padding: 0.5em;
        width: fit-content;
        display: inline-flex;
        align-self: start;
        align-items: center;
        gap: 0.4em;
    }
</style>