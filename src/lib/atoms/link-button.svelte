<script>
    let { href = "#", children, ...restProps } = $props();
</script>

<a {href} {...restProps}>
    {@render children?.()}
</a>

<style>
.to-webinar-detail {
    display: inline-flex;
    align-self: start;
    align-items: center;
    gap: 0.4em;
    width: fit-content;
    margin: 1em;
    padding: 0.5em;
    background-color: var(--primary-color-aqua-dark-3);
    border-radius: var(--border-radius-small);
    color: var(--primary-color-blue-dark-2);
    font-weight: var(--secondary-font-weight);
}
</style>