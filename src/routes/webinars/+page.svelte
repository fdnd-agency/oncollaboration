<!--  MARK: JS-->
<script>
    let { data } = $props();
    const webinars = data.webinars;
    const categories = data.categories;
    import search from "$lib/assets/search.svg";
</script>

<!--  MARK: svelte:head-->

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

<!--  MARK: HTML-->

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

        <label class="label-search" for="">Type here a webinar you are looking for</label>

        <div class="container-filters">
            <div class="searchbar">
                <input type="search" placeholder="Search..." />
                <button class="img-search"><img src={search} alt="" /></button>
            </div>

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
        </div>
    </fieldset>
</form>

<!--  MARK: CSS-->

<style>
    section {
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

    form {
        padding: 1em;
        margin: -3em 1em 1em 1em;
        background-color: var(--neutral-color-lightest);
        border-radius: var(--border-radius-medium);
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

    .container-filters {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 1.5em 0em 0em 0em;

        @media (min-width: 700px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr; 
    }
    }

    .searchbar{
        position: relative;
        width: 100%;
        grid-row: 1;
        grid-column: 1 / 3;
    }

    label {
        font-family: var(--primary-font-family);
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0, 0, 0, 0);
    }

    input{
        padding: .5em;
        width: 100%;
        border-radius: var(--border-radius-small);
        background-position: 1em;
        font-size: var(--font-size-small);
        border: 1px solid var(--primary-color-blue-dark-2);
    }

.img-search{
        position: absolute;
        right: 0em;
        width: clamp(3rem, 1.2222rem + 8.8889vw, 4rem);
        height: 100%;
        background-color: var(--primary-color-aqua-dark-3);
        border-radius: 0px var(--border-radius-small) var(--border-radius-small) 0px;
        border: 1px solid var(--primary-color-blue-dark-2);
}

    select {
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        border: 1px solid var(--primary-color-blue-dark-2);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
    }

    #category{
        grid-column: 1;
        grid-row: 2;
    }

    #new-old{
        grid-column: 2;
        grid-row: 2;
    }

    #alfabetisch{
        grid-column: 3;
        grid-row: 2;
    }

    .filteren{
        grid-column: 4;
        grid-row: 2;
    }

    .reset-filter{
        grid-column: 5;
        grid-row: 2;
    }

    .filteren,
    .reset-filter {
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        border: none;
        background-color: var(--primary-color-aqua-dark-3);
        border: 1px solid var(--primary-color-aqua-dark-3);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
    }
</style>
