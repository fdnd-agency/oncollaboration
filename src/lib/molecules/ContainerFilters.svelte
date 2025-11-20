<div class="container-filters">
    <!-- <div class="searchbar">
        <input
            type="search"
            id="webinarSearch"
            placeholder="Search..."
        />
        <button class="img-search"><img src={search} alt="" /></button>
    </div> -->
</div>

<script>
      import { Select, Button} from '$lib/index.js'
</script>

<div class="container-filters">

    <Select name="category" id="category" style="border: 1px solid var(--primary-color-blue-dark-2);">
        <option value="all">All</option>
        {#each categories as category}
            <option value={category.name}>{category.name}</option>
        {/each}
    </Select >

    <Select name="recent" id="new-old" style="border: 1px solid var(--primary-color-blue-dark-2);">
        <option value="new-old">New to Old</option>
        <option value="old-new">Old to New</option>
    </Select >

    <Select name="alfabetisch" id="alfabetisch" style="border: 1px solid var(--primary-color-blue-dark-2);">
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
    </Select >

    <Button type="filteren" class="filteren">
        Filter webinars
    </Button>

    <Button type="reset" class="reset-filter">
        Reset filter
    </Button>
</div>

