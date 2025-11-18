<select name="category" id="category">
    <option value="all">All</option>
    {#each categories as category}
        <option value={category.name}>{category.name}</option>
    {/each}
</select>