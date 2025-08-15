<script>
   let { ResultsContourings } = $props(); 
</script>

{#if ResultsContourings != 'all'}
  <h2>Contouring results for {data.category}</h2>
{:else}
  <h2>All contourings</h2>
{/if}

<style>
h2 {
  margin: 1em 0;
}
</style>