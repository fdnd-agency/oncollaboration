<script>
  import { ContouringHeader, ContouringSearchResult, ContouringContent, Search, Filter} from "$lib/index.js";
  let { data } = $props();
  
</script>

<main>
  <ContouringHeader />
  <Search />
  <Filter activeCategory={data.category} currentPage="contourings"/>
  <ContouringSearchResult ResultsContourings={data.category}/>
  <ContouringContent Contourings={data.contourings}/>
  
</main>

<style>
  main {
    width: 85vw;
    margin: 0 auto;
    margin-bottom: 6rem;
  }
</style>