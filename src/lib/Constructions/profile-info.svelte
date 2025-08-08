<script>
    let { user } = $props();
</script>

<section>
    <h1>Profile</h1>
    <section>
      <div>
        {#if user.id}
          {#if user.profile_picture}
            <picture>
              <img src="https://fdnd-agency.directus.app/assets/{user.profile_picture}?format=avif" alt="{user.fullname}'s profile picture" width="100" height="100">
            </picture>
          {:else}
            <picture>
              <img src="/images/profilepic.png" alt="Error " width="100" height="100">
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
          <img src="/images/profilepic.png" alt="Error " width="100" height="100">
        </picture>
          <h2>Name Surname</h2>
        {/if}
      </div>
      
      <div>
        <button aria-label="Edit profile button">
          <svg fill="currentColor" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M480-160q-10 0-20-1t-20-3l-18 50q-3 10-12.5 15t-19.5 0l-102-41q-10-4-14.5-12t-1.5-18l19-52q-18-12-34-26t-30-30l-52 19q-10 4-18 0t-12-14l-41-102q-4-10 0-19.5t12-12.5l50-18q-3-10-3.5-20t-.5-20q0-10 .5-20t3.5-20l-50-18q-10-3-12-12.5t0-19.5l41-102q4-10 12-14t18 0l52 19q12-16 26-30t30-26l-19-52q-4-10 0-18t14-12l102-41q10-4 19.5 0t12.5 15l18 50q10-2 20-3t20-1q10 0 20 1t20 3l18-50q3-10 12.5-15t19.5 0l102 41q10 4 14.5 12t1.5 18l-19 52q18 12 34 26t30 30l52-19q10-4 18 0t12 14l41 102q4 10 0 19.5t-12 12.5l-50 18q3 10 3.5 20t.5 20q0 10-.5 20t-3.5 20l50 18q10 3 12 12.5t0 19.5l-41 102q-4 10-12 14t-18 0l-52-19q-12 16-26 30t-30 26l19 52q4 10 0 18t-14 12l-102 41q-10 4-19.5 0t-12.5-15l-18-50q-10 2-20 3t-20 1Zm0-160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
          </svg>       
          <span>EDIT</span>   
        </button>
      </div>
    </section>
  </section>

<style>
    section h1 {
      font-size: var(--font-size-2xl);
      text-transform: uppercase;
    }

    section h2 {
      font-size: var(--font-size-xl);
    }

    section h1 {
      margin: 0.8em 0 0.5em 0;
    }

    section > section {
      display: flex;
      justify-content: space-between;
    }

    @media (min-width: 37.5em ) {
    section > section {
      display: block;
    }
    }

    section > section > div {
      display: flex;
    }

    @media (min-width: 31.25em) {
        section > section > div {
          justify-content: flex-end;
        }
    }

    @media (min-width: 37.5em ) {
        section > section > div {
          justify-content: flex-start;
          margin-bottom: 11px;
        }
    }

    section > section > div picture {
      margin-right: 0.5em;
    }

    @media (min-width: 67.5em) {
        section > section > div picture {
          margin-right: 10em;
        }
    }

    section > section > div picture img {
      border-radius: var(--border-radius-sm);
      object-fit: cover;
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      max-width: 6.25em;
      display: block;
    }

    @media (min-width: 37.5em ) {
      section > section > div picture img {
        max-width: 28.25em;
        max-height: 28.25em;
     }
    }

    section > section > div .profile-info {
    /* Responsive alignment for profile info */
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    section > section > div div p {
      font-size: var(--font-size-sm);
    }

    @media (min-width: 37.5em ) {
      section > section > div div p {
        font-size: var(--font-size-xl);
      }
    }

    section > section > div div h2 {
      font-size: var(--font-size-lg);
    }

    @media (min-width: 37.5em ) {
      section > section > div div h2 {
        font-size: var(--font-size-4xl);
      }
    }

    section > section > div div span {
      font-size: var(--font-size-md);
    }

    @media (min-width: 37.5em ) {
      section > section > div div span {
        font-size: var(--font-size-3xl);
      }
    }

    section > section > div div p:not(:has(i)){
      display: none;
    }

    @media (min-width: 67.5em) {
      section > section > div div p:not(:has(i)){
        display: block;
        margin-top: 1rem;
      }
    }

    section > section > div + div button {
      background-color: var(--primary-color);
      border-radius: var(--border-radius-sm);
      border: none;
      align-self: flex-end;
      padding: var(--padding-button);
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 37.5em) {
    section > section > div + div button {
      min-width: 78px;
      min-height: 64px;
      align-items: center;
      justify-content: center;
    }
    }

    section > section > div + div button svg {
      fill: var(--alt-text-color);
      display: none;
    }

    @media (min-width: 37.5em) {
      section > section > div + div button svg {
        display: block;
      }
    }

    section > section > div + div button span {
      color: var(--alt-text-color);
      font-size: var(--font-size-sm);
    }
  </style>