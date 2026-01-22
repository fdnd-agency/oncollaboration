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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    padding-inline: 1rem;
    background: var(--primary-color-blue-light-1);
}

h1 {
    color: var(--primary-color-blue-dark-2);
    text-align: center;
    text-wrap: balance;
}

:global(.link-styling) {
    width: clamp(16.25em, 100%, 20.625em);
    height: 2.5em;
}


</style>