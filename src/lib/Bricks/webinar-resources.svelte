<script>
  import { Resources } from "$lib/index.js";
  let { resources } = $props();
</script>

<div class="resources">
  <Resources 
    heading="Resources"
    {resources}
  />
</div>

<style>
.resources {
  grid-column: 1;
}
</style>