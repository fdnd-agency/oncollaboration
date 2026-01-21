<script>
    import "$lib/global.css";
    import Header from "$lib/organisms/header.svelte"
    import Footer from "$lib/organisms/footer.svelte"

    let { children } = $props();
</script>

<Header></Header>
{@render children?.()}
<Footer></Footer>

