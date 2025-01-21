<script>
  export let thumbnail = "";
  export let slug = "";
  export let duration = "";
  export let title = "";
  export let speakers = [];
  export let date = "";
  export let categories = "";
</script>

<section>
  <article>
    <div class="container-image">
      <a href="/webinars/{slug}">
        <img
          src="https://fdnd-agency.directus.app/assets/{thumbnail}?width=412&fit=cover&format=avif"
          alt={title}
          width="412"
          height="322"
        />
        <span class="duration">{duration}</span>
      </a>
    </div>

    <div class="featured-webinar-info">
      <a href="/webinars/{slug}">
        <h3>{title}</h3>
      </a>
      <p class="speakers">
        {#each speakers as speaker}
          <span>{speaker.avl_speakers_id.fullname}</span>
        {/each}
      </p>
      <p class="date">Date: {date}</p>
      {#if categories.length > 0}
        {#each categories as category}
          <p class="category">{category.avl_categories_id.name}</p>
        {/each}
      {:else}
        <p>No categories available</p>
      {/if}
    </div>
  </article>
</section>

<style>
  article {
    display: flex;
    flex-direction: column;
    max-width: var(--card-max-width);
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
    background-color: #1f000b;
    color: var(--alt-text-color);
    padding: var(--padding-label);
    bottom: 10px;
    right: 10px;
    border-radius: var(--border-radius-sm);
    z-index: 1;
  }

  article a {
    text-decoration: none;
    color: inherit;
  }
  
  article .speakers span {
    text-transform: uppercase;
    color: var(--primary-color);
    margin-block: 0.2rem;
  }

  .date {
    display: none;
  }

  .category {
    display: none;
  }

  .featured-webinar-info {
    font-size: var(--font-size-sm);
  }

  @media screen and (min-width: 600px) {
    h3 {
      font-size: var(--font-size-xl);
    }

    article {
      margin: 32px 16px;
    }
  }

  @media screen and (min-width: 882px) {
    h3 {
      font-size: var(--font-size-xl);
    }

    article {
      flex-direction: row;
      max-width: none;
    }

    .container-image {
      min-width: 50vw;
      margin-right: 20px;
    }

    p {
      padding: 8px 0;
    }

    article .speakers span {
      font-size: var(--font-size-md);
    }

    .date {
      display: block;
      font-size: var(--font-size-md);
    }

    .category {
      display: inline-block;
      font-size: 13.33px;
      margin: 8px 0;
      padding: var(--padding-button);
      text-transform: capitalize;
      background-color: var(--background-category-color);
      border: none;
      border-radius: var(--border-radius-sm);
      flex-shrink: 0;
      cursor: pointer;
      color: inherit;
    }
  }
  @media screen and (min-width: 1180px) {
    h3 {
      font-size: var(--font-size-2xl);
    }

    article {
      margin: 32px 32px;
    }

    article .speakers span {
      font-size: var(--font-size-lg);
    }

    .date {
      display: block;
      font-size: var(--font-size-lg);
    }
  }
</style>
