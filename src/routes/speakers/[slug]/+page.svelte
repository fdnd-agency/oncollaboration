<script>
    import { WebinarOverview } from "$lib/index.js";
    import { onMount, onDestroy } from 'svelte';
    export let data;
    let viewtransition = true;

    const speakers = data.speaker;
    const webinars = data.webinars;

    console.log(webinars)
    console.log(speakers)


 onMount(() => {
      const aboutSpeaker = document.querySelector(".about-speaker");
      const showmoreBtn = document.querySelector(".about-speaker button");
      const aboutText = document.querySelector(".about-speaker div");

      aboutText.classList.add("js");

      if (aboutSpeaker.offsetHeight < 225) {
            showmoreBtn.style.display = "none";
      }

      const clickHandler = () => {
        aboutText.classList.toggle("hiddentext");
      };

      showmoreBtn.addEventListener("click", clickHandler);

      onDestroy(() => {
        showmoreBtn.removeEventListener("click", clickHandler);
      });
  });

    function nav_back() {
    window.history.back();
  }

    
</script>

<main>
  <button on:click={nav_back}>
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
{#if speakers}
  <section>

    <h1>Speaker</h1>

    <section class="speaker-wrapper">

      <div class="speaker-general">

        <picture>
          <img src="https://fdnd-agency.directus.app/assets/{speakers.profile_picture}?format=avif" alt="{speakers.fullname}'s profile picture" width="100" height="100"/>
        </picture>

        <div class="speaker-detail">
          <div class="speaker-info">
            <h2>{speakers.fullname}</h2>
            <span>{speakers.entitle }</span>
          </div>
          <div class="speaker-contact">
            <span>Contact: </span>
            <button>
              <svg width="25px" height="25px" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                <title>mail</title>
                <path d="M1.1 9C0.7975 9 0.538542 8.88984 0.323125 8.66953C0.107708 8.44922 0 8.18437 0 7.875V1.125C0 0.815625 0.107708 0.550781 0.323125 0.330469C0.538542 0.110156 0.7975 0 1.1 0H9.9C10.2025 0 10.4615 0.110156 10.6769 0.330469C10.8923 0.550781 11 0.815625 11 1.125V7.875C11 8.18437 10.8923 8.44922 10.6769 8.66953C10.4615 8.88984 10.2025 9 9.9 9H1.1ZM5.5 5.0625L1.1 2.25V7.875H9.9V2.25L5.5 5.0625ZM5.5 3.9375L9.9 1.125H1.1L5.5 3.9375ZM1.1 2.25V1.125V7.875V2.25Z" fill="#F0E5E9"/>
              </svg>
              <span>Mail</span>
            </button>
            <button>
              <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>phone</title>
                <path d="M18.6038 12.7268L15.5652 9.08666C15.2572 8.69067 15.1032 8.49267 15.0225 8.27061C14.9511 8.07411 14.9215 7.86486 14.9357 7.65628C14.9518 7.42055 15.045 7.18766 15.2313 6.72187L15.942 4.94513C16.2177 4.25581 16.3556 3.91116 16.5934 3.68525C16.8029 3.48618 17.0656 3.3519 17.3496 3.29856C17.672 3.23803 18.0321 3.32806 18.7524 3.50812L20.7197 4.00002C20.7197 14 13.72 21 3.71973 21L3.2281 19.0324C3.04804 18.3122 2.95801 17.952 3.01854 17.6297C3.07188 17.3456 3.20616 17.083 3.40522 16.8734C3.63113 16.6356 3.97579 16.4977 4.66511 16.222L6.25064 15.5878C6.78204 15.3752 7.04773 15.2689 7.31264 15.2608C7.54678 15.2536 7.77934 15.3013 7.99171 15.4002C8.23199 15.512 8.43434 15.7144 8.83904 16.1191L11.9254 19.1569" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Phone</span>
            </button>
            <button>
              <svg width="25px" height="25px" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <title>message</title>
                <path d="M0 9V0.9C0 0.6525 0.088125 0.440625 0.264375 0.264375C0.440625 0.088125 0.6525 0 0.9 0H8.1C8.3475 0 8.55937 0.088125 8.73563 0.264375C8.91187 0.440625 9 0.6525 9 0.9V6.3C9 6.5475 8.91187 6.75938 8.73563 6.93563C8.55937 7.11188 8.3475 7.2 8.1 7.2H1.8L0 9ZM1.4175 6.3H8.1V0.9H0.9V6.80625L1.4175 6.3Z" fill="#F0E5E9"/>
              </svg>
              <span>Message</span>
            </button>
          </div>
        </div>
  
      </div> 

      <div class="about-speaker">
        <h2>About</h2>
        <div class="hiddentext">{@html speakers.about }</div>
        <button><span>show more</span></button>
      </div>

    </section>
  </section>

  <section>
    <h2>Webinars spoken at</h2>
    {#if webinars.length !== 0}
    <ul class="carrousel">
      {#each webinars as webinar}
        <li>
          <WebinarOverview {...webinar}/>
        </li>  
      {/each}  
    </ul>
    {/if}
  </section>
{/if}
</main>
<style>

  main {
    position: relative;
  }

  main > section {
    margin: 2em 0;
  }

  main > button {
    display: none;
    
    @media (min-width: 1080px){
      display: block;
      width: 40px;
      height: 40px;
      color: var(--primary-color);
      border: none;
      background-color: transparent;
    }
  }

  main > button svg {
    width: 40px;
    height: 40px;
  }

  main > button svg path {
    width: 21px;
    height: 21px;
    stroke: var(--primary-color);
  }

  main section h1 {
    font-size: var(--font-size-2xl);
    text-transform: uppercase;

    @media (min-width: 1080px){
      display: none;
    }
  }

  main section h2 {
    font-size: var(--font-size-xl);
  }

  main section h1,
  main section > h2 {
    margin: 0.8em 0 0.5em 0;
  }

  main section .speaker-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1080px) {
      display:grid;
		grid-template-columns:  minmax(12em, 2fr)  4fr;
		grid-template-rows:auto auto auto 1fr;
		
		grid-template-areas:
			"picture name"
			"picture about"
      "contact about"
			"contact about";
		
		gap: 1em 5em;
    }
  }

  .speaker-general {
    display: flex;
    margin: 0 0 2em 0;

    @media (min-width: 600px) {
      justify-content: flex-start;
      margin-bottom: 11px;
    }

    @media (min-width: 1080px){
      display:contents;
    }
  }

  .speaker-general picture {

    margin-right: 0.5rem;
    
    @media (min-width: 1080px) {
      grid-area:picture;
		
		  
    }
  }

   .speaker-general picture img {
    border-radius: var(--border-radius-sm);
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 452px;
    max-height: 452px;
    aspect-ratio: 1 / 1; /* Dwing altijd een vierkante verhouding af */
    max-width: 100px;
    display: block;

    @media (min-width: 600px) {
      max-width: 452px;
      max-height: 452px;
    }
  }

  .speaker-general .speaker-detail{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1080px){
      display:contents;
    }
  }

  .speaker-general span{
    font-size: var(--font-size-sm);
    
    @media (min-width: 600px) {
      
    }
  }

  .speaker-info {
    @media (min-width: 600px) {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 1080px) {
      grid-area:name;
  }

  }

  .speaker-info h2{
    font-size: var(--font-size-lg);
    
    @media (min-width: 600px) {
      font-size: var(--font-size-4xl);
    }

    @media (min-width: 1080px){
      color: var(--primary-color);
    }
  }

  .speaker-info span{
    @media (min-width: 1080px){
      font-size: var(--font-size-lg);
    }
  }

  .speaker-contact{
    display: flex;
    align-items: start;

    @media (min-width: 1080px) {
    grid-area:contact;
  }
  }


  .speaker-contact > span{
    font-weight: bold;
    margin-right: 0.5rem;
    align-self: center;

    @media (min-width: 1080px){
      display: none;
    }
  }

  .speaker-contact button{
    background-color: var(--primary-color);
    border-radius: 2.5px;
    border: none;
    display: flex;
    flex-direction: column;
    width: 21px;
    height: 21px;
    margin-right: 0.5rem;

    @media (min-width: 600px){
      min-width: 78px;
      min-height: 64px;
      align-items: center;
      justify-content: center;
      border-radius: var(--border-radius-sm);
    }
  }

  .speaker-contact button:last-child{
    
    @media (min-width: 1080px){
      display: none;
    }
  }

  .speaker-contact button svg{
    fill: var(--alt-text-color);
    margin: auto;
    width: 9px;
    height: 9px;

    @media (min-width: 600px){
      width: 25px;
      height: 25px;
      margin: unset;
    }
  }

  .speaker-contact button span{
    display: none;

    @media (min-width: 600px){
      display: block;
      color: var(--alt-text-color);
      font-size: var(--font-size-sm);
    }
  }

  .speaker-contact button svg :has title{
    stroke: var(--alt-text-color);
  }

  .about-speaker{
    display: block;

    @media (min-width: 1080px) {
      grid-area:about;
  }
  }

  .about-speaker h2{
    margin-bottom: 0.5rem;

    @media (min-width: 1080px){
      display:none;
    }
  }

  .about-speaker div:not(.hiddentext) {
    @media (min-width: 500px){
      max-width: 425px;
    }

    @media (min-width: 600px){
      max-height: unset;
      max-width: 650px;
      font-size: var(--font-size-lg);
    }

    @media (min-width: 1080px){
      max-width: 920px;
    }
  }

  .about-speaker div:not(.hiddentext):not(.js) {
    @media (min-width: 500px){
      max-width: 425px;
    }

    @media (min-width: 600px){
      max-height: unset;
      max-width: 650px;
      font-size: var(--font-size-lg);
    }

    @media (min-width: 1080px){
      max-width: 920px;
    }
  }

  .about-speaker div:global(.js){
    height: unset;
    line-height: 1.4em;
    transition: all 0.05s ease-out;
    font-size: var(--font-size-sm);
  }

  .about-speaker div.hiddentext{
    line-height: 1.4;
    font-size: var(--font-size-sm);

    @media (min-width: 500px){
      max-width: 425px;
    }

    @media (min-width: 600px){
      max-width: 650px;
      font-size: var(--font-size-lg);
    }

    @media (min-width: 1080px){
      max-width: 920px;
    }
  }

  .about-speaker div.hiddentext:global(.js){
    overflow: hidden;
    max-height: 14em;
  
    @media (min-width: 600px){
      max-height: unset;
    }
  }
    
  .about-speaker .hiddentext:not(.js) ~ button {
    display: none;
  }

  .about-speaker button{
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
      display: none;
    }
  }

  .about-speaker button span{
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

  section:has(ul.carrousel) {
    @media (min-width: 1080px){
      display: none;
    }
  }

</style>