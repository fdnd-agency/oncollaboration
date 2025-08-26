<script>
  import {Search, Filter, FullWebinarSection , WebinarHeader} from "$lib/index.js";
  
  let { data } = $props();
</script>


  <WebinarHeader />

  <Search />

  <Filter activeCategory={data.category} currentPage="webinars" />

  <FullWebinarSection {data} />



