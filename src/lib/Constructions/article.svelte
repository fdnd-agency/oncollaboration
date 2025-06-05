<script>
  let { content } = $props();
</script>

<article>
  <div class="text-wrapper">
    <span>Welcome to</span>
    <h1>Oncollaboration</h1>
  </div>
  <div class="image-wrapper">
    <img
      src="images/welcome-image.png"
      alt=" A group of doctors"
      width="30"
      height="30"
    />
  </div>
  <div class="text-container">
    <p>
      {#if content}
        {content[0].text}
      {/if}
    </p>
    <a href="/">Learn more →</a>
  </div>
</article>

<style>
  article {
    position: relative;
    margin-top: 2em;
    font-size: 0.75rem;
    height: auto;
  }

  span {
    font-size: var(--p-font-size-light-mobile);
    font-weight: var(--p-font-weight-light-mobile);
  }

  article h1 {
    color: var(--primary-color);
    font-size: var(--h1-size-mobile);
    font-weight: var(--h1-font-weight-mobile);
  }

  p,
  span {
    line-height: var(--line-height-mobile);
  }

  p  { 
    font-size: var(--p-font-size-mobile);
    font-weight: var(--p-font-weight-mobile);
  }

  .text-wrapper {
    position: absolute;
    top: -0.2em;
    left: -0.2em;

    @media (min-width: 375px) {
      top: 0.25em;
      left: 0.5em;
    }
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  .text-container {
    background-color: white;
    height: auto;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  a {
    color: var(--primary-color);
    float: right;
    cursor: pointer;
    font-weight: var(--a-font-weight-mobile);
    font-size: var(--a-font-size-mobile);
  }
</style>
