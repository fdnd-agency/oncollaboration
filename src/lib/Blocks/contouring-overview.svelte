<script>
  let {
    slug = "",
    image_scan = "",
    title = "",
    user_id = "",
    categories = [],
    viewtransition = false
  } = $props();

</script>

<article>
  <a href="/contourings/{slug}">
    <div>
      <img 
      src="https://fdnd-agency.directus.app/assets/{image_scan.id}?width=384&fit=cover&format=avif" 
      alt="{title}" 
      width="384" 
      height="384" 
      style={viewtransition ? `--contouring: image-${image_scan.id}` : ''} />    

      {#each categories as category}
        <span>{category.avl_categories_id.name}</span>
      {/each}
    </div>
    <h3>{title}</h3>
    <p>{user_id.fullname}</p>
  </a>
</article>

<style>
  article {
    max-width: var(--card-max-width);
  }

  article a {
    color: var(--text-color);
    text-decoration: none;
    display: grid;
  }

  article div {
    position: relative;
    width: fit-content;
  }
  
  span {
    position: absolute;
    color: var(--text-color);
    font-size: var(--font-size-lg);
    font-weight: 700;
    border-radius: var(--border-radius-sm);
    padding: 5px;
    gap: 10px;
    background-color: var(--alt-text-color);
    bottom: 10px;
    right: 10px;
    opacity: 0;
    visibility: hidden;
    text-transform: capitalize;

    @media (min-width: 600px){
      opacity: 1;
      visibility: visible;
    }
  }

  img {
    width: 100%;
    max-width: 16rem;
    height: auto;
    border-radius: var(--border-radius-md);
    view-transition-name: var(--contouring);
  }

  h3,
  p {
    margin: 0;
    padding: 0;
    color: var(--text-color);
    text-decoration: none;
  }

  h3 {
    font-size: var(--font-size-md);

    @media (min-width: 600px) {
      font-size: var(--font-size-xl);
    }
  }

  p {
    font-size: var(--font-size-sm);

    @media (min-width: 600px){
      font-size: var( --font-size-lg);
    }
  }
</style>
