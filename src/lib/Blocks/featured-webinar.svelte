<script>
  export let thumbnail = "";
  export let slug = "";
  export let duration = "";
  export let title = "";
  export let description = "";
  export let categories = "";
</script>

<section>
  <h2>Featured Webinar</h2>
  <article>
    <div class="container-image">
      <a href="/webinars/{slug}">
        <img src="https://fdnd-agency.directus.app/assets/{thumbnail}?width=412&fit=cover&format=avif" alt="{title}" width="412" height="322" />
        <span class="duration">{duration}</span>
      </a>
    </div>

    <div class="featured-webinar-info">
      <a href="/webinars/{slug}">
        <h3>{title}</h3>
        <p>{@html description}</p>
      </a>
    </div>

    <div class="bottom-featured-card">
      {#if categories.length > 0}
        {#each categories as category}
          <p class="category">{category.avl_categories_id.name}</p>
        {/each}
      {:else}
        <p>No categories available</p>
      {/if}

      <div class="action-link">
        <a href="/webinars/{slug}">Watch webinar</a>
      </div>
   </div>
  </article>
</section>

<style>
  * {
    display: block;
  }

  section{
    container-type: inline-size;
    container-name: main-container;
    padding-block: 1em;
    width: 90%;
  }

  article {
    display: grid;
    grid-template-areas:
      "a"
      "b"
      "c";
    gap: .5em;
    grid-template-columns: 1fr;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  .container-image {
    grid-area: a;
    position: relative;
  }

  .container-image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
  }

  .container-image span {
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: var(--alt-text-color);
    background-color: var(--text-color);
    padding: var(--padding-label);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-md);
    z-index: 1;
  }

  .featured-webinar-info {
    grid-area: b;
  }

  .featured-webinar-info h3 {
    margin: 0.5em 0;
    font-size: var(--font-size-xl);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .featured-webinar-info p {
    margin: 0.5em 0;
    font-size: var(--font-size-md);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bottom-featured-card {
    grid-area: c;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-featured-card p {
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-sm);
    padding: 5px;
    text-transform: capitalize;
  }

  .action-link a {
    background-color: var(--primary-color);
    color: white;
    padding: 5px;
    border-radius: var(--border-radius-sm);
    text-transform: capitalize;
    grid-area: d;
    transition: .2s;
  }

  .action-link a:hover {
    background-color: var(--hover-state-color);
  }

  @container main-container (min-width: 821px) {
    article {
      grid-template-areas:
        "a b"
        "a c"
        "a c";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr 1fr;
    }

    .bottom-featured-card {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-self: start;
    }

    .action-link a{
      font-size: 22px;
    }
  }

  @container main-container (600px < width <820px) {
    article {
      grid-template-areas:
        "a b"
        "a c"
        "a c";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
    }

    .bottom-featured-card {
      display: flex;
      flex-direction: column;
      justify-self: start;
      gap: 4rem;
    }

    .container-image img {
      width: 100%;
      min-width: 422px;
      height: auto;
      border-radius: var(--border-radius-md);
    }
  }

  @media only screen and (min-width: 600px){
    section {
      padding: 1em;
      width: 100%;
    }
  }
</style>