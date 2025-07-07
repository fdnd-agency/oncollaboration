<script>
  let { content } = $props();
</script>

<section>
  <h2>FAQ</h2>

  {#if content}
    <details>
      <summary>{content[7].heading}</summary>
      <p>{content[7].text}</p>
    </details>

    <details>
      <summary>{content[8].heading}</summary>
      <p>{content[8].text}</p>
    </details>

    <details>
      <summary>{content[9].heading}</summary>
      <p>{content[9].text}</p>
    </details>
  {/if}
</section>

<style>

  details {
    background-color: var(--background-color-alt);
    margin-bottom: 1em;
    border-radius: 10px;
    width: 100%;
    min-height: 5em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  summary {
    font-weight: bold;
    position: relative;
    padding: 1em 3em 1em 1em;
  }

  summary::marker {
    content: "";
  }

  summary::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%) rotate(90deg);
    border-top: 0.8em solid transparent;
    border-bottom: 0.8em solid transparent;
    border-left: 0.8em solid var(--text-dark);
    border-radius: 4px;
    transition: 0.2s;
  }

  details[open] summary::after {
    transform: translateY(-50%) rotate(270deg);
  }

  details[open] p{
    padding: 1em 1em 2em 1em;
  }
</style>
