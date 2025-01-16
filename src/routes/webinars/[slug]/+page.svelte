<script>
  import { QandA, Resources } from "$lib/index.js";
  export let data; 

  function nav_back() {
    window.history.back();
  }
</script>

<button type="button" on:click={nav_back} class="back-btn">Back</button>

<main>
  <video controls width="250">
    <source src="https://fdnd-agency.directus.app/assets/{data.webinar.video}">
    <track kind="captions">
  </video>
  
  <h1>{data.webinar.title}</h1>
  
  <div class='description'>
    {@html data.webinar.description}
  </div>
  
  <Resources 
    heading = "Resources"
    resources = {data.webinar.resources}
  />
  
  <div class='q-a'>
    <QandA 
      comments = {data.comments} />
  </div>
</main>

<style>
  .description :global(p) {
    padding-block: .2rem;
  }

  video {
    width: 90vw;
    margin: 0 auto;
  }

  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 600px){
    video {
      width: 50vw;
    }
  }
</style>