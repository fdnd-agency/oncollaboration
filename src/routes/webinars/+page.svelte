<script>
  import {Search, Filter, WebinarOverview, FeaturedWebinar} from "$lib/index.js";
  
  let { data } = $props();
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter activeCategory={data.category} currentPage="webinars" />

  <section>
    {#if data.category != 'all'}
      <h2>Webinar results for {data.category}</h2>
    {:else}
      <h2>Featured Webinar</h2>
        <section class="featured-webinar">
          {#each data.FeaturedWebinars as featuredWebinar}
            <FeaturedWebinar {...featuredWebinar}/>
          {/each}
        </section>
      <h2>All webinars</h2>
    {/if}

    {#if data.webinars.length != 0}
      <ul>
        {#each data.webinars as webinar}
          <li>
            <WebinarOverview {...webinar}/>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No webinars found for {data.category}.</p>
    {/if}
  </section>
</main>

<style>
  main {
    width: 85vw;
    margin: 0 auto;
  }

  section {
    margin: 4em 0;
  }

  h1 {
    font-size: var(--font-size-sm);
    opacity: 0;
  }
  
  .featured-webinar {
    display: flex;
    justify-content: center;
    margin: 0;
  }

  h2 {
    margin: 1em 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  li {
    max-width: var(--card-max-width);
  }

  @media only screen and (min-width: 600px) {
    ul {
      gap: 50px;
    }
  }
</style>