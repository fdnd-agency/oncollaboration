<script>
    import { WebinarOverview, EmptyState } from "$lib/index.js";
    let { data } = $props();
</script>

  <section>
    <h2>History</h2>
    {#if data.webinars.length === 0}
    <ul class="carrousel">
      {#each data.webinars as webinar}
        <li>
          <WebinarOverview {...webinar} />
        </li>
      {/each}
    </ul>
  {:else}
    <ul class="carrousel">
      <li>
        <EmptyState name="history" />
      </li>
    </ul>
  {/if}
  </section>

  <style>
    section {
      margin: 4em 0;
    }

    section h2 {
      font-size: var(--font-size-xl);
    }

    section > h2 {
      margin: 0.8em 0 0.5em 0;
    }

    .carrousel {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 0px;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
      margin: 0 auto;
      gap: 10px;
    }

    .carrousel li {
      flex: 0 0 calc(100% - 20%);
      scroll-snap-align: start;
      border-radius: 10px;
      box-sizing: border-box;

      @media (min-width: 31.25em) {
          flex: 0 0 auto;
      }
    }
</style>