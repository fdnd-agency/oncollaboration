<script>
    import "$lib/global.css"
    import FooterUlLinks from "$lib/atoms/footer-ul-links.svelte"
    import Strong from "$lib/atoms/strong.svelte"
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

<nav>
    <Strong>
        Navigation
    </Strong>
    <FooterUlLinks></FooterUlLinks>
</nav>

<style>
    nav {
        display: grid;
    }
</style>