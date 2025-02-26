<script>
  import { WebinarOverview, ContouringOverview } from "$lib/index.js";
  import IconLibary from "./IconLibary.svelte";
  export let data;

  const user = data.user;
  const favouriteWebinars = data.favourites; 

  let viewtransition = true;
</script>

<main>
  <section>
    <h1>Profile</h1>
    <section>
      <div>
        {#if user.id}
          {#if user.profile_picture}
            <picture>
              <img src="https://fdnd-agency.directus.app/assets/{user.profile_picture}?format=avif" alt="{user.fullname}'s profile picture" width="100" height="100"/>
            </picture>
          {:else}
            <picture>
              <img src="/images/profilepic.png" alt="Error " width="100" height="100"/>
            </picture>
          {/if}
  
          <div class="profile-info">
            <p><i>{user.email || "example@mail.com"}</i></p>
            <h2>{user.fullname || "Name Surname"}</h2>
            <span>{user.entitle || "User has no role"}</span>
            <p>Ik ben een enthousiaste student met een passie voor onderzoek en digitale innovatie. Mijn huidige studie richt zich op de impact en effectiviteit van webinars en contourings binnen educatieve en professionele omgevingen.
  
              Mijn onderzoek draait om vragen als:
              📌 Hoe kunnen webinars een interactievere leerervaring bieden?
              📌 Welke technologieën verbeteren de nauwkeurigheid van contouring in medische of creatieve toepassingen?
              📌 Wat zijn de best practices voor online educatie en visualisatie?
              
              Met een analytische blik en een nieuwsgierige mindset ben ik altijd op zoek naar nieuwe inzichten en methoden om deze onderwerpen verder te verkennen. 🚀
            </p>
          </div>
        {:else}
        <picture>
          <img src="/images/profilepic.png" alt="Error " width="100" height="100"/>
        </picture>
          <h2>Name Surname</h2>
        {/if}
      </div>
      
      <div>
        <button aria-label="Edit profile button">
          <IconLibary name="Settings" />
          <span>EDIT</span>   
        </button>
      </div>
    </section>
  </section>
  

  <section>
    <h2>Notifications</h2>
    {#if data.webinars.length != 0}
    <ul class="carrousel">
      {#each data.webinars as webinar}
        <li>
          <WebinarOverview {...webinar} />
        </li>
      {/each}
    </ul>
  {:else}
    <p>No webinars found for {data.category}.</p>
  {/if}
  </section>

  <section>
    <h2>History</h2>
    <!-- {#if data.webinars.length != 0}
    <ul class="carrousel">
      {#each data.webinars as webinar}
        <li>
          <WebinarOverview {...webinar} />
        </li>
      {/each}
    </ul>
  {:else}
    <p>No webinars found for {data.category}.</p>
  {/if} -->
  </section>

  <section>
    <h2>Favourite Webinars</h2>
    {#if favouriteWebinars.length !== 0}
      <ul class="carrousel">
        {#each favouriteWebinars as webinar}  
          <li>
            <WebinarOverview {...webinar} />
          </li>
        {/each}
      </ul>
    {:else}
      <p>No webinars found.</p>
    {/if}
  </section>


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
      <p>No contourings found for {data.category}.</p>
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

  :global( section:nth-child(1) section > div button svg ){
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
