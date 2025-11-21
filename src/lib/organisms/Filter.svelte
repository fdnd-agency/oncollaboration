<script>
    import { SearchBar, ContainerFilters} from '$lib/index.js'
</script>

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
 


<form action="" method="get" use:enhance>
    <fieldset>
        <legend>Filters</legend>
        <p class="intro-filters">
            View all speakers or use the filter to view your bookmarked speakers
        </p>

        <SearchBar></SearchBar> 

        <ContainerFilters></ContainerFilters>
    </fieldset>
</form>