<script>
  import formatDate from "$lib/JavaScript/format-date";
  let {
    thumbnail = "",
    slug = "",
    duration = "",
    title = "",
    speakers = [],
    date = $bindable(""),
    categories = ""
  } = $props();

  date = formatDate(date);
</script>

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
    <p>
      {title}
    </p>
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

<style>
  article {
    display: flex;
    flex-direction: column;
    max-width: var(--card-max-width);

    @media (min-width: 882px) {
      flex-direction: row;
      max-width: none;
    }
  }

  article a {
    text-decoration: none;
    color: inherit;
    font-family: var(--heading-font);
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
    font-family: var(--font);
    font-size: var(--font-size-sm);
    color: var(--alt-text-color);
    padding: var(--padding-label);
    bottom: 10px;
    right: 10px;
    border-radius: var(--border-radius-sm);
    z-index: 1;
  }

  article .speakers span {
    text-transform: uppercase;
    color: var(--primary-color);
    margin-block: 0.2rem;
  }

  .date {
    display: none;

    @media (min-width: 882px) {
      display: block;
      font-size: var(--font-size-md);
    }
  }

  .category {
    display: none;

    @media (min-width: 882px){
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

  .featured-webinar-info p {
    font-size: var(--font-size-lg);
    font-family: var(--heading-font);

    @media (min-width: 600px) {
      font-size: var(--font-size-xl);
    }

    @media (min-width: 882px) {
      font-size: var(--font-size-xl);
    }
  }

  @media (min-width: 882px) {
    
   .container-image {
      min-width: 50vw;
      margin-right: 20px;
    }

    article .container-image .duration {
      font-size: var(--font-size-lg);
    }

    p {
      padding: 8px 0;
    }

    article .speakers span {
      font-size: var(--font-size-md);
    }
  }
  @media (min-width: 1180px) {
    .featured-webinar-info p {
      font-size: var(--font-size-2xl);
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
