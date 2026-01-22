<script>
    import "$lib/global.css";
    import Header from "$lib/organisms/header.svelte"
    import Footer from "$lib/organisms/footer.svelte"

    let { children } = $props();
</script>

<a href="#main-content" class="skip-link"> Skip to content </a>
<Header></Header>
<main id="main-content">
{@render children?.()}
</main>
<Footer></Footer>


<style>
    
.skip-link {
    position: absolute;
    z-index: 1000;
    margin: 1em;
    padding: 1em;
    background-color: var(--primary-color-aqua-dark-3);
    border-radius: var(--border-radius-small);
    color: var(--primary-color-blue-dark-2);
    text-decoration: none;
    transform: translateY(-200%);
    transition: transform 0.3s;

    &:focus {
        transform: translate(0%);
    }
}
</style>