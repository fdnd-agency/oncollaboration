<script>
    let { data } = $props();
    const categories = data.categories;
    import search from "$lib/assets/search.svg";
    
    import { Select, SearchInput, Button } from "$lib/index.js";
</script>

<div class="container-filters">
    <div class="searchbar">
        <SearchInput
            id="webinarSearch"
            label="Type here a webinar you are looking for"
            placeholder="Search..."
            class="searchbar"
        />
        <Button type="filteren" class="search-button" style="border-radius: 0px var(--border-radius-small) var(--border-radius-small)
        0px; border: 1px solid var(--primary-color-blue-dark-2); ">
        <img class="img-search" src={search} alt="" />
        </Button>
    </div>

    <Select
        name="category"
        id="category"
        style="border: 1px solid var(--primary-color-blue-dark-2);"
    >
        <option value="all">All</option>
        {#each categories as category}
            <option value={category.name}>{category.name}</option>
        {/each}
    </Select>

    <Select
        name="recent"
        id="recent"
        style="border: 1px solid var(--primary-color-blue-dark-2);"
    >
        <option value="new-old">New to Old</option>
        <option value="old-new">Old to New</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
    </Select>
    <Button type="filteren" class="filteren">Filter webinars</Button>

    <Button type="reset" class="reset-filter">Reset filter</Button>
</div>

<style>
    .container-filters {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 1.5em 0em 0em 0em;
    }

    .searchbar {
        position: relative;
        width: 100%;
    }
    
</style>
