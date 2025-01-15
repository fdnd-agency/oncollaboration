<script>
  export let id; 
</script>

<details>
  <summary>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.67213 10.2297C8.47131 10.2297 9.15061 9.95004 9.71004 9.39061C10.2695 8.83118 10.5492 8.15188 10.5492 7.3527C10.5492 6.55352 10.2695 5.87422 9.71004 5.31479C9.15061 4.75536 8.47131 4.47565 7.67213 4.47565C6.87295 4.47565 6.19365 4.75536 5.63422 5.31479C5.07479 5.87422 4.79508 6.55352 4.79508 7.3527C4.79508 8.15188 5.07479 8.83118 5.63422 9.39061C6.19365 9.95004 6.87295 10.2297 7.67213 10.2297ZM7.67213 9.07893C7.19262 9.07893 6.78504 8.9111 6.44938 8.57545C6.11373 8.23979 5.9459 7.83221 5.9459 7.3527C5.9459 6.87319 6.11373 6.46561 6.44938 6.12995C6.78504 5.7943 7.19262 5.62647 7.67213 5.62647C8.15164 5.62647 8.55922 5.7943 8.89488 6.12995C9.23053 6.46561 9.39836 6.87319 9.39836 7.3527C9.39836 7.83221 9.23053 8.23979 8.89488 8.57545C8.55922 8.9111 8.15164 9.07893 7.67213 9.07893ZM7.67213 12.1478C6.11639 12.1478 4.69918 11.7136 3.42049 10.8451C2.1418 9.97668 1.21475 8.81254 0.639343 7.3527C1.21475 5.89286 2.1418 4.72872 3.42049 3.86028C4.69918 2.99184 6.11639 2.55762 7.67213 2.55762C9.22787 2.55762 10.6451 2.99184 11.9238 3.86028C13.2025 4.72872 14.1295 5.89286 14.7049 7.3527C14.1295 8.81254 13.2025 9.97668 11.9238 10.8451C10.6451 11.7136 9.22787 12.1478 7.67213 12.1478ZM7.67213 10.8691C8.87623 10.8691 9.98176 10.5521 10.9887 9.91807C11.9957 9.28405 12.7656 8.42893 13.2984 7.3527C12.7656 6.27647 11.9957 5.42135 10.9887 4.78733C9.98176 4.15331 8.87623 3.83631 7.67213 3.83631C6.46803 3.83631 5.3625 4.15331 4.35553 4.78733C3.34856 5.42135 2.57869 6.27647 2.0459 7.3527C2.57869 8.42893 3.34856 9.28405 4.35553 9.91807C5.3625 10.5521 6.46803 10.8691 7.67213 10.8691Z"/>             
    </svg>  
  </summary>
  <iframe title="document-preview" src="https://fdnd-agency.directus.app/assets/{id}"></iframe>
</details>


<style>
  details {
    display: inline-flex;
    align-items: center;
    align-content: center; /*For safari and Firefox*/
    justify-content: center;
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    transition: .2s;
  }

  details svg {
    fill: var(--alt-text-color);
  }

  details[open] {
    background-color: var(--accent-color-1);
  }

  details:hover {
    background-color: var(--hover-state-color);
  }
  
  summary {
    list-style: none;
    text-align: center; /*For safari and Firefox*/
    height: 16px;
    cursor: pointer;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  iframe {
    z-index: 1;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 70vw;
    max-width: 420px;
    height: 50vh;
    max-height: 420px;
    border: 2px solid var(--background-category-color);
    background-color: var(--background-category-color);
  }

  @media only screen and (min-width: 1080px){
    iframe {
      top: 5rem;
    }
  }
</style>