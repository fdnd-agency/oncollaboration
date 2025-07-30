<script>
  import { ContouringOverview } from "$lib/index.js";
  let viewtransition = true; //What does this mean
  let { Contourings } = $props();
</script>

{#if Contourings.length != 0}
  <ul>
    {#each Contourings as contouring}
      <li>
        <ContouringOverview {...contouring} {viewtransition} />
      </li>
    {/each}
  </ul>
{:else}
  <p>No contourings found for {data.category}.</p>
{/if}

<style>
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 1080px) {
      justify-content: left;
    }
  }
</style>
