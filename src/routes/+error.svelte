<script>
    import "$lib/global.css";
    import Link from "$lib/atoms/homepage-button.svelte";
 
</script>

<main class="overlay">
    <h1>Sorry this page is not working, please return to the homepage</h1>
    <Link href="/">return to the homepage</Link>
</main>

<style>

    .overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: var(--primary-color-blue-light-1);
        height: 100vh;
        padding-inline: 1rem;
    }

    h1 {
        text-align: center;
        text-wrap: balance;
        color: var(--primary-color-blue-dark-2);
    }

</style>