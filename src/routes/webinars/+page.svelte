<!--  MARK: JS-->
<script>
    let { data } = $props();
    const webinars = data.webinars;

    import { Filter } from '$lib/index.js'
    import { WebinarCard} from '$lib/index.js'
</script>

<!--  MARK: svelte:head-->

<svelte:head>
    <title>Webinars</title>
    <meta name="description" content="Webinars" />
</svelte:head>

<!--  MARK: HTML-->

<section class="container-intro">
    <ul>
        <li><a href="/">Home &rsaquo;</a></li>
        <li><a href="/webinars">Webinars</a></li>
    </ul>

    <h1>Webinars</h1>

    <p class="intro-webinars">
        Our webinars provide physicians with the latest medical insights,
        clinical updates, and practical tips to enhance patient care. Join the
        live sessions.
    </p>
</section>

<Filter data={data}></Filter>

<section class="container-results">
    <h2>Results</h2>
    <p class="results">1 result</p>
    <hr />
</section>

<WebinarCard data={data}></WebinarCard>

<!--  MARK: CSS-->

<style>
    
.container-intro {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 2em 1em 5em 1em;
    background-color: var(--primary-color-blue-light-1);
}

ul {
    display: flex;
    gap: 0.5em;
    padding: 1em;
    list-style-type: none;
    font-weight: var(--primary-font-weight);
}

li a {
    color: var(--neutral-color-darker);
}

h1 {
    margin: 0.5em;
}

.intro-webinars {
    max-width: clamp(20em, 40vw, 62.5em);
    margin: 1em;
    line-height: 1.4;
}

.container-results {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 0.5em;
    padding: 2em;
}

h2 {
    font-size: var(--font-size-large);
}

.container-results, :global(.container-card) {
    opacity: 0;
    animation: ScrollerOpacity 1s ease forwards;
    animation-timeline: view();
    animation-range: 10% 30%;
}

@media (prefers-reduced-motion: reduce) {
    .container-results, :global(.container-card){
        opacity: 1;      
        animation: none; 
        transform: none; 
    }
}

@keyframes ScrollerOpacity {
    from {
        opacity: 0;
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
