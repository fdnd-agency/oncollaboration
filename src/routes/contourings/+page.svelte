<script>
  import {Search, Filter, ContouringOverview} from "$lib/index.js";
  /** @type {{data: any}} */
  let { data } = $props();
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
    width: 85vw;
    margin: 0 auto;
    margin-bottom: 6rem;
  }

  h1 {
    font-size: var(--font-size-sm);
    opacity: 0;
  }

  h2 {
    margin: 1em 0;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1080px) {
    ul {
      justify-content: left;
    }
  }
</style>