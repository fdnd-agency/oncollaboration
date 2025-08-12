<script>
  import { ContouringHero, ContouringResources, ContouringQanda, NavBack} from "$lib/index.js";
  
  let { data } = $props();
</script>

<NavBack />

<div>
  <ContouringHero Hero={data.contouring}/>
  <ContouringResources Resource={data.contouring}/>
  <ContouringQanda QANDA={data.comments} /> 
</div>

<style>
  div {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 6rem;
  } 
</style>