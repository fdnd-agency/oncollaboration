<script>
  let { description } = $props();

  let showFullDescription = $state(false);
 
  function truncateText(text, limit = 199) {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
</script>

<div class="description">
  {#if showFullDescription}
    {@html description}
  {:else}
    {@html truncateText(description)}
  {/if}
    <button onclick={() => {showFullDescription = !showFullDescription;}} class="expand-text-btn">
    {showFullDescription ? "Read Less" : "Read More"}
  </button>
</div>

<style>
.description :global(p) {
  padding-block: 0.2rem;
}

.expand-text-btn {
  margin-block: 1rem;
  background-color: var(--primary-color);
  color: var(--alt-text-color);
  border: transparent;
  cursor: pointer;
  font-size: var(--font-size-md);
  width: fit-content;
  height: 34px;
  padding: 0.4rem 0.8em;
  border-radius: var(--border-radius-sm);
  text-transform: capitalize;
  transition: .2s;
}

.expand-text-btn:hover {
  background-color: var(--hover-state-color);
}
</style>