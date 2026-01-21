<!--  MARK: JS-->
<script>
    let { data } = $props();
    const webinars = data.webinars;

    import { enhance } from "$app/forms";
    import { Filter} from '$lib/index.js'
    import { WebinarCard} from '$lib/index.js'
    const search = []
    const categories = []
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

<form action="" method="get" use:enhance>
    <fieldset>
        <legend>Filters</legend>
        <p class="intro-filters">
            View all speakers or use the filter to view your bookmarked speakers
        </p>

        <label class="label-search" for="webinarSearch">Type here a webinar you are looking for</label>

        <div class="container-filters">
            <div class="searchbar">
                <input
                    type="search"
                    id="webinarSearch"
                    placeholder="Search..."
                />
                <button class="img-search"><img src={search} alt="" /></button>
            </div>  

            <select name="category" id="category">
                <option value="all">All</option>
                {#each categories as category}
                    <option value={category.name}>{category.name}</option>
                {/each}
            </select>

            <select name="sort" id="new-old">
                <option value="-date">New to Old</option>
                <option value="date">Old to New</option>
                <option value="title">A-Z</option>
                <option value="-title">Z-A</option>
            </select>

            <button class="filteren" type="filteren">Filter webinars</button>
            <button class="reset-filter" type="reset">Reset filter</button>
        </div>
    </fieldset>
</form>

<section class="container-results">
    <h2>Results</h2>
    <p class="results">1 result</p>
    <hr />
</section>

<WebinarCard data={data}></WebinarCard>

<!--  MARK: CSS-->

<style>
    /*INTRO*/
    .container-intro {
        background-color: var(--primary-color-blue-light-1);
        padding: 2em 1em 5em 1em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    ul {
        display: flex;
        gap: 0.5em;
        list-style-type: none;
        padding: 1em;
        font-weight: var(--primary-font-weight);
    }

    li a {
        color: var(--neutral-color-darker);
    }

    h1 {
        margin: 0.5em;
    }

    .intro-webinars {
        margin: 1em;
        max-width: clamp(20em, 40vw, 62.5em);
        line-height: 1.4;
    }

    /*RESULTS*/
    .container-results {
        margin: 0.5em;
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    h2 {
        font-size: var(--font-size-large);
    }

</style>
