<script>
  import {Search, Filter, ContouringOverview} from "$lib/index.js";
  export let data;
  let viewtransition = true //What does this mean
</script>

<main>
  <h1>Contourings</h1>

  <Search />

  <Filter activeCategory={data.category} currentPage="contourings"/>

  {#if data.category != 'all'}
    <h2>Contouring results for {data.category}</h2>
  {:else}
    <h2>All contourings</h2>
  {/if}
  
  {#if data.contourings.length != 0}
    <ul>
      {#each data.contourings as contouring}
      <li>
        <ContouringOverview {...contouring} {viewtransition}/>
      </li>
      {/each}
    </ul>
  {:else}
    <p>No contourings found for {data.category}.</p>
  {/if}
</main>

<style>
  main {
    width: 100%;
  }

  h1 {
    font-size: var(--font-size-sm);
    opacity: 0;
  }

  h2 {
    margin: 1em 0 0 1rem;
  }

  p {
    margin-left: 1em;
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