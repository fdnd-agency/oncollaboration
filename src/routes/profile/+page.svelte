<script>
  import { WebinarOverview, FeaturedWebinar, ContouringOverview} from "$lib/index.js";
  export let data;

  const user = data.user  

  console.log(user.profile_picture);
  
  let viewtransition = true
</script>

<main>
  <section>
    <h1>Profile</h1>
    <section>
    <div>
      {#if user.id && user.profile_picture}
        <picture>
          <img src="https://fdnd-agency.directus.app/assets/{user.profile_picture}?format=avif" alt="{user.profile_picture.title}" width="100" height="100">
        </picture>
        <div class="profile-info">
          <p><i>{user.email}</i></p>
          <h3>{user.fullname}</h3>
          <span>{user.entitle}</span>
        </div>
      {:else}
        <img src="/images/profilepic.png" alt="error" width="100" height="100">
        <h4>Name Surname</h4>
      {/if}
    </div>
    <div>
      <button>
        <span>EDIT</span>
      </button>
    </div>
  </section>
  </section>

<section>
  <h3>Notifications</h3>
  {#if data.webinars.length > 0}
  <ul>
    <li>
      <p>no notifications</p>
    </li>
  </ul>
{/if}
</section>

<section>
  <h3>History</h3>
  {#if data.webinars.length > 0}
  <ul>
    <li>
      <p>no history found</p>
    </li>
  </ul>
{/if}
</section>

<section>
  <h3>Webinars</h3>
  {#if data.webinars.length != 0}
      <ul class="carrousel">
        {#each data.webinars as webinar}
          <li>
            <WebinarOverview {...webinar}/>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No webinars found for {data.category}.</p>
    {/if}
</section>

<section>
  {#if data.category != 'all'}
    <h3>Contouring results for {data.category}</h3>
  {:else}
    <h3>contourings</h3>
  {/if}
  
  {#if data.contourings.length != 0}
    <ul class="carrousel">
      {#each data.contourings as contouring}
      <li>
        <ContouringOverview {...contouring} {viewtransition}/>
      </li>
      {/each}
    </ul>
  {:else}
    <p>No contourings found for {data.category}.</p>
  {/if}
</section>
</main>

<style>

  main section h1{
    font-size: var(--font-size-2xl);
    text-transform: uppercase;
  }

  main section h3{
    font-size: var(--font-size-xl);
  }

  main section h1,
  main section > h3{
    margin: 1em 0;;
  }

  main section:nth-child(1) section{
    display: flex;
    justify-content: space-between;

    @media (min-width: 600px) {
      
     display: block;
  }
  }

  main section:nth-child(1) section > div{
    display: flex;
    @media (min-width: 500px){
      width: 100%;
      justify-content: flex-end;
    }
  }

  main section:nth-child(1) section > div picture{
    margin-right: 0.5rem;
    width: 50%;  
    height: auto;
  }

  main section:nth-child(1) section > div picture img{
    border-radius: var(--border-radius-sm);
    object-fit: cover;

    @media (min-width: 600px) {
      width: 100%;
      height: auto;
      aspect-ratio: auto 1 / 1;
      object-fit: contain;
  }
  @media (min-width: 600px) {
      
      height: auto;
      object-fit: cover;
  }
}

  main section:nth-child(1) section .profile-info{

    @media (min-width: 600px){
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }
  }

  main section:nth-child(1) section > div i{
    font-size: var(--font-size-sm);
    
    @media (min-width: 600px) {  
      font-size: var(--font-size-xl);
    }
  }

  main section:nth-child(1) section > div h3{
    font-size: var(--font-size-lg);
    @media (min-width: 600px) {
      font-size: var(--font-size-4xl);
    }
  }

  main section:nth-child(1) section > div span{
    font-size: var(--font-size-md);
    @media (min-width: 600px) {
      font-size: var(--font-size-3xl);
    }
  }

  main section:nth-child(1) button{
    background-color: var(--primary-color);
    border-radius: var(--border-radius-sm);
    border: none;
    align-self: flex-end;
    padding: var(--padding-button);
    cursor: pointer;
  }

  main section:nth-child(1) section > div button span{
    color: var(--alt-text-color);
    font-size: var(--font-size-sm);
  }

  .carrousel{
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    margin: 0 auto;
    gap: 10px;
  }

  .carrousel li{
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
    @media only screen and (min-width: 500px) {
      flex: 0 0 auto;
    }
  }

  main > section:last-child  {
    margin: 0 0 4em 0;
  }

  main section:last-child ul li{
    background-color: var(--background-category-color);
    padding: 1em 0.5em;
  }
</style>