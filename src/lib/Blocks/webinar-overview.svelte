<script>
  export let slug = "";
  export let thumbnail = "";
  export let duration = "";
  export let title = "";
  export let speakers = [];
  export let categories = [];
</script>

<article>
  <a href="/webinars/{slug}">
    <div class="container-image">
      <img src="https://fdnd-agency.directus.app/assets/{thumbnail.id}?width=384&fit=cover&format=avif" alt="{thumbnail.title}" width="384" height="384"/>
      <p class="duration">{duration}</p>
    </div>
    <h3>{title}</h3>
    <p class="speakers">
      {#each speakers as speaker}
        <span>{speaker.avl_speakers_id.fullname}</span>
      {/each} 
    </p>
    <div class="categories">
      {#each categories as category}
        <p class="category">{category.avl_categories_id.name}</p>
      {/each}  
    </div>
  </a>
</article>

<style>
  article {
    margin-inline: .5rem;
    width: 100%;
    max-width: var(--card-max-width);
    height: 100%;
  }

  article a {
    color: var(--text-color);
    text-decoration: none;
    display: grid;
    grid-template-rows: max-content max-content 1fr max-content;
    height: 100%;
  }

  article p {
    font-size: var(--font-size-xs);
  }

  article .container-image {
    position: relative;
  }  

  article .container-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: var(--border-radius-md);
  }

  article .container-image .duration {
    position: absolute;
    background-color: #1F000B;
    color: var(--alt-text-color);
    padding: var(--padding-label);
    bottom: 10px;
    right: 10px;
    border-radius: var(--border-radius-sm);
    z-index: 1;
  }

  article h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    word-break: break-all;
    font-size: var(--font-size-sm);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  article .speakers {
    display: inline;
  }

  article .speakers span {
    text-transform: uppercase;
    color: var(--primary-color);
    margin-block: .2rem;
  }

  article .speakers span:not(:first-child)::before {
    content: "—";
  }

  article .categories {
    display: flex;
    margin-top: auto;
  }

  article .categories .category {
    display: none;
    margin-inline-end: .5rem;
    padding: var(--padding-label);
    width: fit-content;
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-sm);
    text-transform: capitalize;
  }

  article:first-of-type {
    margin-left: 0;
  }
  
  @media only screen and (min-width: 600px) {
    article {
      margin-inline: 1rem;
    }

    article p {
      margin-top: 10px;
      font-size: var(--font-size-lg);
    }

    article h3 {
      -webkit-line-clamp: 2;
      line-clamp: 2;
      font-size: var(--font-size-2xl);
    }

    article .categories .category {
      display: block;
    }
  }
</style>