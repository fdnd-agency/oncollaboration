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
  {#each data.FeaturedWebinars as featuredWebinar}
    <FeaturedWebinar {...featuredWebinar}/>
  {/each}
  {/if}

  <section>
    <h2>All webinars</h2>
    <ul>
  
      {#each data.webinars as webinar}
      <li>
        <WebinarOverview {...webinar}/>
      </li>
      {/each}
    </ul>
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

  ul {
    display: flex;
    flex-wrap: wrap;
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