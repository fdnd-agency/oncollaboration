<script>
    import FooterUlLinks from "$lib/atoms/footer-ul-links.svelte"
    import Strong from "$lib/atoms/strong.svelte"
    let { class: className, ...rest } = $props();
</script>

<nav class={className} {...rest}>
    <Strong>
        Navigation
    </Strong>
    <FooterUlLinks></FooterUlLinks>
</nav>

<style>

nav {
    display: grid;
    grid-template-rows: 3.4em 10em;
}

</style>