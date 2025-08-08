<script>
  let { content } = $props();
</script>

<div class="hero-container">
  <article>
    <div class="hero-header">
      <span>Welcome to</span>
      <h1>Oncollaboration</h1>
    </div>
    <div class="hero-image-text">
      <img class="hero-image" src="images/welcome-image.png" alt=" A group of doctors" width="30" height="30"/>
      <img class="hero-image-desktop" src="images/welkom-image-desktop.png" alt=" A group of doctors" width="30" height="30"/>
      <div class="hero-paragraph">
        <p>
          {#if content}
            {content[0].text}
          {/if}
        </p>
        <a href="#doctors">Learn more →</a>
      </div>
    </div>
  </article>
</div>

<style>
  .hero-container {
    margin-top: 1em;
    width: 100%;
    position: relative;
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .hero-header {
    position: absolute;
    top: -0.3em;
  }

  span {
    font-size: var(--test-xs);
  }

  h1 {
    color: var(--primary-color);
    font-size: var(--text-md);
    font-weight: bolder;
  }

  img {
    width: 100%;
    height: auto;
  }

  .hero-header {
    grid-area: header;
  }

  .hero-image {
    grid-area: image;
  }

  .hero-image-desktop {
    display: none;
    grid-area: image-desktop;
    height: 22.625em;
  }

  .hero-paragraph {
    grid-area: paragraph;
  }

  p,
  span {
    line-height: var(--line-height-mobile);
  }

  p  { 
    font-size: var(--test-xs);
    font-weight: normal;
    max-width: 22.5em;
  }

  .hero-paragraph {
    position: relative;
    left: 50%;
    right: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    background-color: var(--text-light);
    height: auto;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    z-index: -1;
    padding-top: 2.5em;
    bottom: 2em;
    padding-left: 1.4em;
    align-items: center;
  }

  .hero-paragraph a {
    color: var(--primary-color);
    float: right;
    cursor: pointer;
    font-weight: 500;
    font-size: var(--test-xs);
    padding: 0.5em;
    align-self: flex-end;
  }
  
  @container (min-width: 20em) {
    .hero-header {
      top: 0;
    }
  }

  @container (min-width: 23.438em) {
    .hero-header {
      top: 0.3em;
    }
  }
  
  /* Container size when reaching tablet size */
  @container (min-width: 43.199em) {
    .hero-header {
      top: 1em;
    }

    .hero-header h1{
      font-size: 3.125em;
    }

    span {
      font-size: 1.875em;
    }

    .hero-container .hero-image-text{
      display: grid;
      align-items: end;
      grid-template-columns: 21em 21em;
      grid-template-rows: 8em 16em;
      gap: 0.7em;
      grid-template-areas:
        "header image-desktop"
        "paragraph image-desktop";
    }

    .hero-container .hero-image {
      display: none;
    }

    .hero-container .hero-image-desktop {
      display: block;
    }

    .hero-container .hero-paragraph{
      z-index: unset;
      position: unset;
      width: 21em;
      margin: unset;
      padding: 0.5em;
      height: 17em;
      border-radius: 0.7em;
      padding: 1.5em 1.5em;
      overflow: auto;
    }

    p {
      line-height: 1.6;
    }
  }

  /* For laptop size */
  @container (min-width: 47em) {
    .hero-header {
      top: 0.5em;
    }

    .hero-header h1{
      font-size: 3.438em;
    }

    .hero-container .hero-image-text{
      grid-template-columns: 24.5em 24.5em;
      grid-template-rows: 5.5em 18em;
    }    

    .hero-container .hero-paragraph{
      width:  24.5em;
      height: 16.5em;
    }

    .hero-container .hero-image {
      width: 24.5em;
    }    
  }

  @container (min-width: 65.25em) {
    .hero-header {
      top: 2em;
    }

    .hero-header h1{
      font-size: 5em;
    }

    .hero-container .hero-image-text{
      grid-template-columns: 32.5em 32.5em;
      grid-template-rows: 13.5em 20em;
    } 

    .hero-container .hero-paragraph{
      width: 32.5em;
      height: 23.5em;
    }

    p {
      max-width: 31.875em;
    }

    .hero-container .hero-image-desktop {
      width: 32.5em;
      height: 31.875em;
    }    
  }
</style>