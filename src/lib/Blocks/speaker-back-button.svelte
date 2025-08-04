<script>
    function nav_back() {
    window.history.back();
  }
</script>

<button onclick={nav_back} aria-label="back">
  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>tv</title>
    <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

<style>
  button {
    display: none;

    @media (min-width: 1080px) {
      display: block;
      width: 40px;
      height: 40px;
      color: var(--primary-color);
      border: none;
      background-color: transparent;
    }
  }

  button svg {
    width: 40px;
    height: 40px;
  }

  button svg path {
    width: 21px;
    height: 21px;
    stroke: var(--primary-color);
  }
</style>
