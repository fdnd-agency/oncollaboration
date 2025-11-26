<script>
    import "$lib/global.css";
    import Logos from "$lib/atoms/header-logos.svelte";
    import Nav from  "$lib/molecules/header-nav.svelte";
</script>


<header>
    <Logos></Logos>
        <Nav></Nav>
</header>

<style>
     header {
        background-color: var(--primary-color-blue-dark-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
        position: sticky;
        top: 0;
        z-index: 100;

        @media (min-width: 900px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    
</style>

