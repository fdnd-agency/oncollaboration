<script>
  import { goto } from '$app/navigation';
  let searchQuery = '';

  // Redirect to the /search page with the URL-encoded search query
  function handleSearch() {
    goto(`/search?query=${encodeURIComponent(searchQuery)}`);
  }
</script>


<form on:submit|preventDefault={handleSearch}>
  <input 
    type="text" 
    placeholder="Search" 
    id="search" 
    name="search" 
    bind:value={searchQuery} 
  />
  
  <button type="submit" name="search" id="search-btn" aria-label="Search">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path fill="currentColor" fill-rule="evenodd" d="M10 2a8 8 0 1 0 4.906 14.32l5.387 5.387a1 1 0 0 0 1.414-1.414l-5.387-5.387A8 8 0 0 0 10 2m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" clip-rule="evenodd"></path>
    </svg>
  </button>
</form>

<style>
  form {
    margin: 1rem auto;
    display: flex;
    width: 85vw;
  }

  input {
    padding: var(--padding-label);
    width: 85%;
    border: none;
    padding-inline-start: 20px;
    font-size: var(--font-size-xl);
    border-start-start-radius: var(--border-radius-sm);
    border-end-start-radius: var(--border-radius-sm);
  }

  button {
    padding: var(--padding-label);
    width: 15%;
    background-color: var(--primary-color);
    border: none;
    border-start-end-radius: var(--border-radius-sm);
    border-end-end-radius: var(--border-radius-sm);
    cursor: pointer;
    transition: .2s;
  }
  
  button:hover {
    background-color: var(--hover-state-color);
  }

  button svg path {
    fill: var(--alt-text-color);
  }
</style>