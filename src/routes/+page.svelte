<script>
  import { ContouringOverview, Search, WebinarOverview } from "$lib/index.js";
  export let data;

  let newestWebinars = data.webinars.slice(0,4);
  let newestContourings = data.contourings.slice(0,4);
</script>

<main>
  <h1>Home</h1>

  <Search />

  <section>
    <h2>Webinars</h2>
    <div class="carrousel">
      {#each newestWebinars as webinar}
        <div class="card">
          <WebinarOverview  {...webinar}/>
        </div>
      {/each}
    </div>
    <a href="/webinars">See All Webinars</a>
  </section>

  <section>
    <h2>Contourings</h2>
    <div class="carrousel">
      {#each newestContourings as contouring}
        <div class="contouringcard">
          <ContouringOverview {...contouring} />
        </div>
      {/each}
    </div>
    <a href="/contourings">See all contourings</a>
  </section>
</main>

<style>
  h1 {
    font-size: var(--font-size-2xl);
  }

  h2 {
    font-size: var(--font-size-lg);
    margin-bottom: 0.5em;
    margin-top: 0.8em;
  }

  a {
    display: inline-flex;
    color: var(--alt-text-color);
    background-color: var(--primary-color);
    font-size: var(--font-size-sm);
    text-decoration: none;
    font-weight: 700;
    padding: var(--padding-button);
    border-radius: var(--border-radius-sm);
    margin: 1em 0;
    text-transform: capitalize;
    transition: .2s;
  }

  a:hover {
    background-color: var(--hover-state-color);
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

  .card {
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .contouringcard {
    flex: 0 0 calc(100% - 42%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .carrousel::-webkit-scrollbar {
    display: none;
  }
  
  @media only screen and (min-width: 500px) {
    .card {
      flex: 0 0 auto;
    }

    .contouringcard {
      flex: 0 0 auto;
    }
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: var(--font-size-4xl);
    }

    h2 {
      font-size: var(--font-size-3xl);
    }

    a {
      font-size: var(--font-size-lg);
    }
  }

  @media only screen and (min-width: 1000px) {
    .carrousel {
      margin: 0;
    }
  }
</style>
