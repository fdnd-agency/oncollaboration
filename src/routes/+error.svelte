<script>
    import "$lib/global.css";
    import Link from "$lib/atoms/homepage-button.svelte";
 
</script>

<main class="overlay">
    <h1>Sorry this page is not working, please return to the homepage</h1>
    <Link class="link-styling" href="/">return to the homepage</Link>
</main>

<style>

    .overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: var(--primary-color-blue-light-1);
        height: 100vh;
        gap: 2rem;
        padding-inline: 1rem;
    }

    h1 {
        text-align: center;
        text-wrap: balance;
        color: var(--primary-color-blue-dark-2);
    }

    :global(.link-styling) {
            width: clamp(16.25em, 100%, 20.625em);
            height: 2.5em;
    }


</style>