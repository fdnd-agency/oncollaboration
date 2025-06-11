<script>
    let { content } = $props();
</script>

<article>
    <div class="wrapper">
        <div class="image-wrapper">
          <img src="images/Subtract.png" alt="A group of doctors gathered togehter" width="30" height="30">
        </div>  
        <div class="text-wrapper">
          <h2>Doctors united</h2>
          <p>{content[1].text}</p>
        </div>
    </div>
</article>

<style>
    article {
    width: 100vw; 
    position: relative;
    left: 50%; 
    transform: translateX(-50%); 
    box-sizing: border-box; 
    padding-left: calc(50vw - (90vw / 2) + 0.5em); 
    padding-right: calc(50vw - (90vw / 2) + 0.5em); 
    background: white;
    padding: 10px;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: 193px;
  }

  h2 {
    font-size: 22px;
    font-weight: bolder;
    color: var(--primary-color);
    padding-bottom: 1em;

    @media (min-width: 375px) {
      font-size: 24px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: 170px 120px;
    grid-template-rows: auto;
    gap: 0.5em;
    grid-template-areas: 
    "image-wrapper image-wrapper"
    "text-wrapper text-wrapper"
    ;

    @media (min-width: 375px) and (max-width: 419px) {
     grid-template-columns: 190px 150px;
     grid-template-rows: auto;
    }

    @media (min-width: 420px) {
      grid-template-columns: 215px 180px;
      grid-template-rows: auto;
    }
  }

  .image-wrapper {
    grid-area: image-wrapper;
  }

  .text-wrapper {
    grid-area: text-wrapper;
    margin-top: -3em; 
    padding-bottom: 1em;
  }
</style>