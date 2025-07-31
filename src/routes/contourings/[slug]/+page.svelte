<script>
  import { ContouringHero, ContouringResources, ContouringQanda, NavBack} from "$lib/index.js";
  
  let { data } = $props();
</script>

<NavBack />

<main>
  <ContouringHero Hero={data.contouring}/>
  <ContouringResources Resource={data.contouring}/>
  <ContouringQanda QANDA={data.comments} /> 
</main>

<style>
  main {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 6rem;
  } 
</style>