<script>
  import {Search, Filter, WebinarOverview, FeaturedWebinar} from "$lib/index.js";
  export let data;
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter activeCategory={data.category} currentPage="webinars" />

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
  
  <ul>
    {#each data.webinars as webinar}
    <li>
      <WebinarOverview {...webinar}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100%;
  }

  h1 {
    font-size: var(--font-size-sm);
    opacity: 0;
  }
  
  .featured-webinar {
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  li {
    max-width: var(--card-max-width);
  }

  @media only screen and (min-width: 600px) {
    h2 {
      margin-left: 1em;
      margin-top: 2em;
    }

    ul {
      margin: 2em 1em 0 1em;
      gap: 50px;
    }
  }
</style>