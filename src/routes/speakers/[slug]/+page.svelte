<script>
  import { WebinarOverview, SpeakerInfo} from "$lib/index.js";
  import { onMount } from "svelte";
  
  let { data } = $props(); 

  const speakers = data.speaker;
  const webinars = data.webinars;

  let featuredWebinars = $state();
  let svgElement = $state()
  
  let isOpen = false; 

  function toggleFeaturedWebinars() {
    if (isOpen) {
      featuredWebinars.style.transform = "translateX(540px)";
      svgElement.style.fill = "var(--accent-color-1)";
      featuredWebinars.classList.remove("open"); 
    } else {
      featuredWebinars.style.transform = "translateX(0px)";
      svgElement.style.fill = "var(--background-color-alt)";
      featuredWebinars.classList.add("open"); 
    }

    svgElement.classList.add("rotating");
    isOpen = !isOpen;
  }

  function nav_back() {
    window.history.back();
  }

    
</script>

<main>
  <button onclick={nav_back} aria-label="back">
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>tv</title>
      <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
{#if speakers}
  <SpeakerInfo {speakers} />

  <section bind:this={featuredWebinars} class="featured-webinars {featuredWebinars ? 'js-enabled' : ''}">
    <h2>Webinars spoken at</h2>
    <button onclick={toggleFeaturedWebinars} aria-label="toggle webinars {speakers.fullname} has spoken at">
      <svg bind:this={svgElement} onanimationend={() => svgElement.classList.remove('rotating')} width="30px" height="30px" viewBox="0 0 24 24" fill="hsl(340, 100%, 15%)" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="14" rx="1" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M13 7L17 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 7L7 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    {#if webinars.length !== 0}
    <ul class="carrousel">
      {#each webinars as webinar, index}
      <li style="--stagger: {0.5 + index * 0.2}s">
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
    aspect-ratio: 1 / 1;
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

  .speaker-contact button:nth-child(3){
    @media (min-width: 1080px){
      display: none;
    }
  }

  .speaker-contact button:last-child{
    
    @media (min-width: 1080px){
      display: block;
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

  .speaker-contact button svg:has title{
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

    @media (min-width: 1080px) {
      flex-direction: column;
      appearance: none;
      scrollbar-width: 12px;
      scrollbar-color: var(--primary-color) var(--background-category-color);
    }
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

  .featured-webinars {
    @media (min-width: 1080px) {
      display: block;
    }
  } 

  .featured-webinars button {
    display: none;
  }

  .featured-webinars:global(.js-enabled) {
    @media (min-width: 1080px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 64px;
      right: 0;
      background-color: var(--accent-color-1);
      color: var(--alt-text-color);
      width: 540px;
      margin: unset;
      height: 100%;
      z-index: 0;
      bottom: 0;
      transform: translateX(540px);
      transition: 0.5s ease-in-out;
    }
  }

  .featured-webinars:global(.js-enabled) h2 {
    @media (min-width: 1080px) {
      font-size: var(--font-size-3xl);
    }
  }

  .featured-webinars:global(.js-enabled) :global(article) {
  @media (min-width: 1080px) {
    margin: 0;
  }
}

  .featured-webinars:global(.js-enabled) :global(article a),
  .featured-webinars:global(.js-enabled) :global(article .speakers span) {
    @media (min-width: 1080px) {
      color: var(--alt-text-color);
    }
  }

  .featured-webinars:global(.js-enabled) button {
    display: none;
    @media (min-width: 1080px) {
      display: block;
      position: absolute;
      width: 124px;
      background-color: var(--accent-color-1);
      border: none;
      left: -75px;
      height: 124px;
      border-radius: var(--border-radius-sm);
      top: 35%;
      z-index: -1;
      animation-name: notice;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: forwards;
    }
  }

  @keyframes notice {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

  .featured-webinars:global(.js-enabled) button svg {
    transform: translateX(-25px);
  }

  @keyframes rotateX {
  0% {
    transform: translateX(-25px) rotateY(0deg);
  }
  50% {
    transform: translateX(-25px) rotateY(180deg);
  }
  100% {
    transform: translateX(-25px) rotateY(360deg);
  }
}

.featured-webinars:global(.js-enabled) button svg:global(.rotating) {
  animation: rotateX 0.8s ease; 
}

  /* :global(.content:has(.speaker-wrapper)){
    overflow-y: auto;
    margin-top: 64px;
  } */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.featured-webinars:global(.open) ul.carrousel li {
  opacity: 0; 
  animation: fadeIn 0.5s ease forwards; 
  animation-delay: var(--stagger);
}

</style>