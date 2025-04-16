<script>
  import { Search, SearchResults } from "$lib/index.js";
  let { data } = $props();
</script>

<main>
  <h1>Search Results</h1>
  <Search />
  <p>Results for: <strong>"{data.query}"</strong></p>
  <SearchResults {data} />
</main>

<style>
  main {
    margin: 1rem;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 1599px) {
    main {
      margin: 4rem;
    }
  }
</style>