<script>
  import {Search, Filter, ContouringOverview} from "$lib/index.js";
  export let data;
  let viewtransition = true //What does this mean
</script>

<main>
  <Search />

  <Filter activeCategory={data.category} currentPage="contourings"/>

  {#if data.category != 'all'}
  <h2>Contouring results for {data.category}</h2>
  {:else}
  <h2>All contourings</h2>
  {/if}
  
  <ul>
    {#each data.contourings as contouring}
    <li>
      <ContouringOverview {...contouring} {viewtransition}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100%;
  }

  h2 {
    margin: 1em 0 0 1em;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 2em 1em 0 1em;
  }

  @media screen and (min-width: 1080px) {
    ul {
      justify-content: left;
    }
  }
</style>