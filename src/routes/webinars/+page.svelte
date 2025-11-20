<!--  MARK: JS-->
<script>
    let { data } = $props();
    const webinars = data.webinars;
    const categories = data.categories;
    import search from "$lib/assets/search.svg";
    import watchlist from "$lib/assets/watchlist.svg";
    import arrow from "$lib/assets/arrow-right.svg";
    import { enhance } from "$app/forms";
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

        <!-- <label class="label-search" for="webinarSearch">Type here a webinar you are looking for</label> -->

        <!-- <div class="container-filters">
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

            <select name="recent" id="new-old">
                <option value="new-old">New to Old</option>
                <option value="old-new">Old to New</option>
            </select>

            <select name="alfabetisch" id="alfabetisch">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>

            <button class="filteren" type="filteren">Filter webinars</button>
            <button class="reset-filter" type="reset">Reset filter</button>
        </div> -->
    </fieldset>
</form>

<section class="container-results">
    <h2>Results</h2>
    <p class="results">1 result</p>
    <hr />
</section>

<div class="container-cards">
    {#each webinars as webinar}
        <article>
            <div class="container-thumbnail">
                <picture>
                    <source
                        srcset={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}?format=avif`}
                        type="image/avif"/>
                    <source
                        srcset={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}?format=webp`}
                        type="image/webp"/>
                    <img
                        class="thumbnail"
                        src={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}`}
                        alt={webinar.title}
                        height="150"
                        width="250"
                        loading="lazy"/>
                </picture>

                <p class="duration">{webinar.duration}</p>
                <p class="category">
                    {webinar.categories[0].avl_categories_id.name}
                </p>

                <button class="watchlist">Add to watchlist
                    <img src={watchlist} alt="" aria-hidden="true" />
                </button>
            </div>

            <h3>{webinar.title}</h3>

            <p class="speakers-fullname">
                {webinar.speakers[0].avl_speakers_id.fullname}
            </p>

            <a class="to-webinar-detail" href={`/webinars/${webinar.slug}`}
                >View webinar <img src={arrow} alt="" aria-hidden="true" /></a>
        </article>
    {/each}
</div>

<!--  MARK: CSS-->

<style>
    /*INTRO*/
    .container-intro {
        background-color: var(--primary-color-blue-light-2);
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

    /*FILTERS*/
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

        @media (min-width: 500px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }

        @media (min-width: 700px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            max-width: 65em;
        }
    }

    .searchbar {
        position: relative;
        width: 100%;

        @media (min-width: 700px) {
            grid-row: 1;
            grid-column: 1 / 3;
        }
    }

    label {
        font-family: var(--primary-font-family);
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0, 0, 0, 0);
    }

    input {
        padding: 0.5em;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-small);
        background-position: 1em;
        font-size: var(--font-size-small);
        border: 1px solid var(--primary-color-blue-dark-2);
    }

    .img-search {
        position: absolute;
        right: 0em;
        width: clamp(3rem, 1.2222rem + 8.8889vw, 4rem);
        height: 100%;
        background-color: var(--primary-color-aqua-dark-3);
        border-radius: 0px var(--border-radius-small) var(--border-radius-small)
            0px;
        border: 1px solid var(--primary-color-blue-dark-2);
    }

    select {
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        border: 1px solid var(--primary-color-blue-dark-2);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
    }

    #category {
        grid-column: 1;
        grid-row: 2;
    }

    #new-old {
        @media (min-width: 700px) {
            grid-column: 2;
            grid-row: 2;
        }
    }

    #alfabetisch {
        @media (min-width: 700px) {
            grid-column: 3;
            grid-row: 2;
        }
    }

    .filteren {
        @media (min-width: 700px) {
            grid-column: 4;
            grid-row: 2;
        }
    }

    .reset-filter {
        @media (min-width: 700px) {
            grid-column: 5;
            grid-row: 2;
        }
    }

    .filteren,
    .reset-filter {
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        background-color: var(--primary-color-aqua-dark-3);
        border: 1px solid var(--primary-color-aqua-dark-3);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
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

    /*CARDS*/

    .container-cards {
        margin: 1em;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 1em;
        max-width: 60em;
        display: flex;
        justify-items: center;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: 600px) {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 900px) {
            grid-template-columns: 1fr 1fr 1fr;
            justify-self: center;
        }

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-content: center;

        }
    } 

    article {
        background-color: var(--primary-color-blue-light-2);
        border: 1px solid var(--primary-color-blue-dark-2);
        border-radius: var(--border-radius-medium);
        display: flex;
        flex-direction: column;
        align-self: center;
        max-width: 17em;
    }

    .container-thumbnail {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .thumbnail {
        margin: 0.5em;
        display: flex;
        justify-self: center;
        border-radius: var(--border-radius-medium);
        display: block;
    }

    .duration {
        background-color: var(--neutral-color-darker);
        color: var(--neutral-color-lightest);
        font-size: var(--font-size-small);
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        width: fit-content;
        position: absolute;
        top: 1em;
        right: 1.5em;
    }

    .category {
        background-color: var(--primary-color-blue-dark-2);
        color: var(--neutral-color-lightest);
        font-size: var(--font-size-small);
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        width: fit-content;
        position: absolute;
        top: 1em;
        left: 1.5em;
    }

    .watchlist {
        background-color: var(--primary-color-aqua-dark-3);
        border: 1px solid var(--primary-color-aqua-dark-3);
        padding: 0.5em;
        border-radius: var(--border-radius-small);
        font-size: var(--font-size-small);
        width: fit-content;
        position: absolute;
        top: 8.5em;
        display: flex;
        align-items: center;
        gap: .5em;
    }

    h3 {
        width: 230px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 1.5em 1em .5em 1em;
    }

    .speakers-fullname {
        margin: 1em 1.5em;
    }

    .to-webinar-detail {
        background-color: var(--primary-color-red-dark-2);
        color: var(--neutral-color-lightest);
        border-radius: var(--border-radius-small);
        font-weight: var(--secondary-font-weight);
        margin: 1em;
        padding: 0.5em;
        width: fit-content;
        display: inline-flex;
        align-self: start;
        align-items: center;
        gap: 0.4em;
    }
</style>
