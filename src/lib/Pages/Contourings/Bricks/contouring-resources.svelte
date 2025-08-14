<script>
    import { Resources } from "$lib/index.js";
    let { Resource } = $props();
</script>

<div class="used-literature">
  <Resources 
    heading = "Used Literature"
    resources = {Resource.used_literature}
  />
</div>

<style>
  .used-literature {
    margin-block: 1rem 2rem;
    width: 100%;
  }
</style>