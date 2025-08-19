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
          <a href="#doctors">Learn more →</a>
        </p>
      </div>
    </div>
  </article>
</div>

<style>
  .hero-container {
    margin-top: 2em;
    width: 100%;
    position: relative;
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 48em) and (max-width: 64em) {
        margin-top: 4em;
    }

    @media (min-width: 64em) {
        margin-top: 5em;
    }
  }

  article {
    width: 100%;
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
    margin-bottom: -2.5em;
  }

  .hero-image {
    grid-area: image;
    max-height: 23.875em;
    max-width: 100%;
    height: 100%;
  }

  .hero-image-desktop {
    display: none;
    grid-area: image-desktop;
    height: auto;
    width: 100%;
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
    display: flex;
    flex-direction: column;
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
  
  @container (width > 20em) {
    .hero-header {
      margin-bottom: -3em;
    }
  
    .hero-header h1 {
      font-size: var(--text-lg);
    }
  }

  @container (width > 23.438em) {
    .hero-header {
      margin-bottom: -3.5em;
    }
  }

  @container (width > 24.019em) {
    .hero-header {
      margin-bottom: -4.5em;
    }

    .hero-header h1 {
      font-size: 2rem;
    }
  }

  @container (width > 29.981em) {
    .hero-header {
      margin-bottom: -4.5em;
    }
  }
  
  /* Container size when reaching tablet size */
  @container (width > 43.199em) {
    .hero-header {
      margin: 0 0 -2.5em 1em;
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
      grid-template-columns: 0.7fr 1fr;
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
      height: 27em;
    }

    .hero-container .hero-paragraph{
      z-index: unset;
      position: unset;
      width: 21em;
      margin: unset;
      padding: 0.5em;
      height: 20em;
      border-radius: 0.7em;
      padding: 1.5em 1.5em;
      overflow: auto;
    }

    p {
      line-height: 1.6;
    }
  }

  /* For laptop size */
  @container (width > 47em) {
    .hero-header h1{
      font-size: 3.438em;
    }

    .hero-container .hero-image-text{
      grid-template-columns: 0.7fr 1fr;
      grid-template-rows: 7.7em 16em;
    }    

    .hero-container .hero-paragraph{
      width: 100%;
    }

    p {
      font-size: 1.125rem;
    }

    span {
      font-weight: 200;
    }
  }

  @container (width > 64em) {
    .hero-header {
      margin: 0 0 5.5em 1em
    }
    .hero-container .hero-image-text{
      grid-template-columns: 0.7fr 1fr;
      grid-template-rows: 9.7em 16em;
    }  

    .hero-container .hero-image-desktop {
      display: block;
      height: 40em;
    }

    .hero-container .hero-paragraph{
      height: 29.5em;
    }

    /* Block code 64em voor de nieuwe change */
      /* @container (width > 64em) {
    .hero-container .hero-image-text{
      grid-template-columns: 0.7fr 1fr;
      grid-template-rows: 9.7em 16em;
    }  

    .hero-container .hero-image-desktop {
      display: block;
      height: 30em;
    }

    .hero-container .hero-paragraph{
      height: 22em;
    } */
    }
</style>