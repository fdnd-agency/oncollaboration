<script>
  let { Hero } = $props();
</script>

<section class="container">
  <h1>{Hero.title}</h1>
  <img src="https://fdnd-agency.directus.app/assets/{Hero.image_scan}?width=384&fit=cover&format=avif" alt="CT-Scans" width="384" height="384" style:--contouring="image-{Hero.image_scan}"/>
</section>

<style>
  .container {
    display: grid;
    margin: 30px auto;
    grid-template-rows: auto 1fr;
    gap: 20px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
    view-transition-name: var(--contouring);
  }
</style>