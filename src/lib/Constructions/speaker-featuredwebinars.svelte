<script>
  import { WebinarOverview } from "$lib/index.js";
  import { onMount } from 'svelte';
  let { speakers, webinars } = $props();

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
</script>

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

<style>
    .featured-webinars {
  /* Default: hidden on desktop, visible on mobile */
}
@media (min-width: 1080px) {
  .featured-webinars {
    display: block;
  }
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

/* Carrousel styles for the webinars list */
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
@media (min-width: 1080px) {
  .carrousel {
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
}
@media (min-width: 500px) {
  .carrousel li {
    flex: 0 0 auto;
  }
}
</style>