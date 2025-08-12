<script>
  import { Search, SearchResults } from "$lib/index.js";
  
  let { data } = $props();
</script>


  <h1>Search Results</h1>
  <Search />
  <p>Results for: <strong>"{data.query}"</strong></p>
  <SearchResults {data} />
