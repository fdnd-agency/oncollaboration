<script>
    import "$lib/global.css"
    import FooterUlLinks from "$lib/atoms/footer-ul-links.svelte"
    import Strong from "$lib/atoms/strong.svelte"
    let { class: className, ...rest } = $props();
</script>

<svelte:head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</svelte:head>

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