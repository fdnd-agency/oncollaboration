<script>
  import { ContouringHeader, ContouringSearchResult, ContouringContent, Search, Filter} from "$lib/index.js";
  let { data } = $props();
  
</script>

  <ContouringHeader />
  <Search />
  <Filter activeCategory={data.category} currentPage="contourings"/>
  <ContouringSearchResult ResultsContourings={data.category}/>
  <ContouringContent Contourings={data.contourings}/>
  


