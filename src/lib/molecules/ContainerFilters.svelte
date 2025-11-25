<script>
    let { data } = $props();
    const categories = data.categories;
    import search from "$lib/assets/search.svg";
    
    import { Select, SearchInput, Button } from "$lib/index.js";
</script>

<div class="container-filters">
    <div class="all-filters">
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
        <option value="all">All Category</option>
        {#each categories as category}
            <option value={category.name}>{category.name}</option>
        {/each}
    </Select>

    <Select
        name="recent"
        id="recent"
        style="border: 1px solid var(--primary-color-blue-dark-2);"
    >
        <option value="sort">Sort by</option>
        <option value="new-old">New to Old</option>
        <option value="old-new">Old to New</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
    </Select>
    <Button type="filteren" class="filteren">Filter webinars</Button>

    <Button type="reset" class="reset-filter">Reset filter</Button>
</div>
</div>

<style>

.container-filters {
    container-type: inline-size;
}

    .all-filters {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 1.5em 0em 0em 0em;
    }

    @container (min-width: 400px) {
    .all-filters {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@container (min-width: 700px) {
    .all-filters {
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
        max-width: 65em; 
    }
}

    .searchbar {
        position: relative;
        width: 100%;
    }

    @container (min-width: 400px) {
    .searchbar {
        grid-column: 1 / -1;
    }
}


@container (min-width: 700px) {
    .searchbar {
        grid-column: 1 / 4;
    }
}

</style>
