<script>
  import { ContouringOverview, EmptyState, ProfileInfo, ProfileNotification, ProfileHistory, ProfileFavourites } from "$lib/index.js";  
  let { data } = $props();

  const user = data.user;
  const favouriteWebinars = data.favourites; 

  let viewtransition = true;
</script>

<main>

  <ProfileInfo {user} />
  <ProfileNotification {data} />
  <ProfileHistory {data} />
  <ProfileFavourites {favouriteWebinars} />

  <section>
    {#if data.category != "all"}
      <h2>Contouring results for {data.category}</h2>
    {:else}
      <h2>contourings</h2>
    {/if}

    {#if data.contourings.length != 0}
      <ul class="carrousel">
        {#each data.contourings as contouring}
          <li>
            <ContouringOverview {...contouring} {viewtransition} />
          </li>
        {/each}
      </ul>
    {:else}
    <ul class="carrousel">
      <li>
        <EmptyState name="contouring" />
      </li>
    </ul>
    {/if}
  </section>
</main>

<style>
  main > section {
    margin: 4em 0;
  }

  main section h1 {
    font-size: var(--font-size-2xl);
    text-transform: uppercase;
  }

  main section h2 {
    font-size: var(--font-size-xl);
  }

  main section h1,
  main section > h2 {
    margin: 0.8em 0 0.5em 0;
  }

  main section:nth-child(1) section {
    display: flex;
    justify-content: space-between;

    @media (min-width: 600px) {
      display: block;
    }
  }

  main section:nth-child(1) section > div {
    display: flex;

    @media (min-width: 500px) {
      justify-content: flex-end;
    }

    @media (min-width: 600px) {
      justify-content: flex-start;
      margin-bottom: 11px;
    }
  }

  main section:nth-child(1) section > div picture {

    margin-right: 0.5rem;
    
    @media (min-width: 1080px) {
      margin-right: 10rem;
    }
  }

  main section:nth-child(1) section > div picture img {
    border-radius: var(--border-radius-sm);
    object-fit: cover;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1; /* Dwing altijd een vierkante verhouding af */
    max-width: 100px;
    display: block;

    @media (min-width: 600px) {
      max-width: 452px;
      max-height: 452px;
    }
  }

  main section:nth-child(1) section div .profile-info {
    @media (min-width: 600px) {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }

  main section:nth-child(1) section > div div p {
    font-size: var(--font-size-sm);

    @media (min-width: 600px) {
      font-size: var(--font-size-xl);
    }
  }

  main section:nth-child(1) section > div div h2 {
    font-size: var(--font-size-lg);
    
    @media (min-width: 600px) {
      font-size: var(--font-size-4xl);
    }
  }

  main section:nth-child(1) section > div div span {
    font-size: var(--font-size-md);
    
    @media (min-width: 600px) {
      font-size: var(--font-size-3xl);
    }
  }

  main section:nth-child(1) section > div div p:not(:has(i)){
    display: none;

    @media (min-width: 1080px) {
      display: block;
      margin-top: 1rem;
    }
  }

  main section:nth-child(1) section > div button {
    background-color: var(--primary-color);
    border-radius: var(--border-radius-sm);
    border: none;
    align-self: flex-end;
    padding: var(--padding-button);
    display: flex;
    flex-direction: column;

    @media (min-width: 600px){
      min-width: 78px;
      min-height: 64px;
      align-items: center;
      justify-content: center;
    }
  }

  main section:nth-child(1) section > div button svg {
    fill: var(--alt-text-color);
    display: none;

    @media (min-width: 600px){
      display: block;
    }
  }

  main section:nth-child(1) section > div button span {
    color: var(--alt-text-color);
    font-size: var(--font-size-sm);
  }

  .carrousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    margin: 0 auto;
    gap: 10px;
  }

  .carrousel li {
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;

    @media (min-width: 500px) {
      flex: 0 0 auto;
    }
  }

  main > section:last-child {
    margin: 0 0 4em 0;
  }

  main section:last-child ul li {
    background-color: var(--background-category-color);
    padding: 1em 0.5em;
  }

</style>
