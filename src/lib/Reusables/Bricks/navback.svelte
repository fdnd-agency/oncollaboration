<script>
  function nav_back() {
    window.history.back();
  }
</script>

<div class="bread-crumbs">
  <button type="button" onclick={nav_back} class="back-btn">Back</button>
</div>

<style>
  .bread-crumbs {
    width: 85vw;
    margin: 0 auto;
  }

  button {
    margin-block: 1rem;
    background-color: var(--primary-color);
    color: var(--alt-text-color);
    border: transparent;
    cursor: pointer;
    font-size: var(--font-size-md);
    width: fit-content;
    height: 34px;
    padding: 0.4rem 0.8em;
    border-radius: var(--border-radius-sm);
    text-transform: capitalize;
    transition: .2s;
  }

  button:hover {
    background-color: var(--hover-state-color);
  }
</style>