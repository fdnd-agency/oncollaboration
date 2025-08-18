<script>
    let { content } = $props();
</script>

<div class="doctors-container">
  <article id="doctors-united">
    <div class="image-wrapper">
      <img src="images/Subtract.png" alt="A group of doctors gathered togehter" width="30" height="30">
      <img class="doctors-large-screen" src="images/doctors-tablet-desktop.png" alt="A group of doctors gathered togehter" width="30" height="30">
    </div>  
    <div class="text-wrapper">
      <h2>Doctors united</h2>
      <p>{content[1].text}</p>
    </div>
  </article>
</div>

<style>
  .doctors-container {
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  #doctors-united {
    width: 100%;
    background-color: white;
    padding: 1em;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin-top: -3em;
    padding: 0.5em;
    grid-area: text-doctors;
    height: auto;
  }

  .image-wrapper img:nth-child(1){
    width: 100%;
    height: 15em;
  }

  .image-wrapper img:nth-child(2) {
    display: none;
    width: 22.313em;
  }

  .doctors-large-screen {
    grid-area: image-doctors;
  }

  h2 {
    font-size: var(--text-sm);
    font-weight: bolder;
    color: var(--primary-color);
    margin: unset;
    padding-bottom: 0.5em;
  }

  p {
    line-height: var(--line-height-mobile);
  }

  @container (min-width: 23.438em) {
    .doctors-container h2 {
      font-size: var(--text-md);
    }
  }

  @container (min-width: 48em){
    .doctors-container #doctors-united {
      display: grid;
      background-color: transparent;
      grid-template-columns: repeat(2, minmax(18.75em, 1fr));
      grid-template-rows: 1fr;
      justify-content: center;
      grid-template-rows: 25em;
      gap: 1.5em;
      padding: 2.5em;
      align-items: stretch;
      grid-template-areas: 
      "text-doctors image-doctors";
    }

    h2 {
      padding-bottom: unset;
      font-size: 1.75em;
    }

    .text-wrapper {
      margin-top: unset;
      background-color: white;
      height: 100%;
      overflow: auto;
      gap: 0.7em;
      border-radius: 0.7em;
      padding: 1.5em 1.5em;
    }

    .image-wrapper {
      height: 100%;
      display: flex;            
      justify-content: center;
      align-items: center;
    }

    .image-wrapper img:nth-child(1) {
      display: none;
    }

    .image-wrapper img:nth-child(2) {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 0.7em;
    }

    p {
      font-size: 1.125rem;
    }
  }

  @container (min-width: 64em) {
    .doctors-container #doctors-united {
      padding: 4em;
    }
    .doctors-container h2  {
      font-size: 2.5rem;
    }

    p {
      line-height: 1.6;
      font-size: 1.25rem;
    }
  }

  @container (min-width: 89em) {
    .doctors-container #doctors-united {
      grid-template-columns: 47.75em 38.75em;
    }
  }
</style>