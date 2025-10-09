<script>
    let { data } = $props();
    const webinars = data.webinars;
    const categories = data.categories;
    import search from "$lib/assets/search.svg";
</script>

<svelte:head>
    <title>Webinars</title>
    <meta name="description" content="Webinars" />

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</svelte:head>

<section>
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

<form action="" method="get">
    <fieldset>
        <legend>Filters</legend>
        <p class="intro-filters">
            View all speakers or use the filter to view your bookmarked speakers
        </p>

        <label class="label-search" for=""
            >Type here a webinar you are looking for</label
        >

        <input type="search" placeholder="Search..." />
        <button><img src={search} alt="" /></button>

        <select name="category" id="category">
            <option value="all">All</option>
            {#each categories as category}
                <option value={category.name}>{category.name}</option>
            {/each}
        </select>

        <select name="recent" id="new-old">
            <option value="new-old">New to Old</option>
            <option value="old-new">Old to New</option>
        </select>

        <select name="alfabetisch" id="alfabetisch">
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>

        <button class="filteren">Filter webinars</button>
        <button class="reset-filter">Reset filter</button>
    </fieldset>
</form>

<style>
    section {
        background-color: var(--primary-color-blue-light-1);
        padding: 2em 1em 6em 1em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    ul {
        display: flex;
        gap: 0.5em;
        list-style-type: none;
        padding: 1em;
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

    form{
        padding: 2em;
    margin: -3em 1em 1em 1em;
    background-color: var(--neutral-color-lightest);
    border-radius: 15px;
    }

    fieldset {
        border: none;
        margin: 1em;
        padding: 1em;
    }

    legend {
        font-family: var(--primary-font-family);
        font-weight: var(--primary-font-weight);
        line-height: var(--primary-line-height);
        font-size: var(--font-size-medium);
    }

  
</style>
