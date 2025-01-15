<script>
  import { QandA, Resources } from "$lib/index.js";
  export let data;
</script>

<main>
  <section class="container">
    <h1>{data.contouring.title}</h1>
    <img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan}?width=384&fit=cover&format=avif" alt="CT-Scans" width="384" height="384" style:--contouring="image-{data.contouring.image_scan}"/>
  </section>
 
  <div class="used-literature">
    <Resources 
      heading = "Used Literature"
      resources = {data.contouring.used_literature}
    />
  </div>

  <div class='q-a'>
    <QandA 
      comments = {data.comments} />
  </div>
</main>

<style>
  main {
    width: fit-content;
    margin: 0 auto;
  }
  
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

  .used-literature {
    margin-block: 1rem 2rem;
    width: 100%;
  }
  
  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }
</style>