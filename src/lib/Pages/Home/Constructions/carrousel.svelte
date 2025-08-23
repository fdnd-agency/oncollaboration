<script>
  import { onMount, createEventDispatcher } from 'svelte';

  let { speakers = [], selectedSpeaker } = $props();
  const dispatch = createEventDispatcher();

  let jsEnabled = $state(false);
  let scrollContainer;
  let speakerList;
  let currentIndex = $derived(0);

  let isProgrammaticScroll = false;

  onMount(() => {
    jsEnabled = true;
    updateSelectedOnScroll();
  });

  function clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
  }

  function scrollCarousel(direction) {
    if (!scrollContainer || !speakerList) return;

    const items = Array.from(speakerList.querySelectorAll('li'));
    if (!items.length) return;

    currentIndex = clamp(currentIndex + direction, 0, items.length - 1);

    const target = items[currentIndex];
    const targetOffset = target.offsetLeft + target.offsetWidth / 2;
    const containerCenter = scrollContainer.clientWidth / 2;

    isProgrammaticScroll = true;

    scrollContainer.scrollTo({
      left: targetOffset - containerCenter,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isProgrammaticScroll = false;
    }, 400);

    dispatch('select', speakers[currentIndex]?.fullname);
  }

  function updateSelectedOnScroll() {
    if (isProgrammaticScroll) return; 
    if (!scrollContainer || !speakerList) return;

    const items = Array.from(speakerList.querySelectorAll('li'));
    if (!items.length) return;

    const containerCenter = scrollContainer.scrollLeft + scrollContainer.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    items.forEach((el, index) => {
      const itemCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    currentIndex = closestIndex;
    dispatch('select', speakers[currentIndex]?.fullname);
  }

  function goToPrev() {
    scrollCarousel(-1);
  }

  function goToNext() {
    scrollCarousel(1);
  }
</script>

<section>
  <h2>Meet our doctors</h2>

  <div class="scroll-container" bind:this={scrollContainer} onscroll={updateSelectedOnScroll}>
    <ul bind:this={speakerList}>
      {#each speakers as speaker}
        <li>
          {#if speaker.profile_picture}
            <div class="card">
              <picture>
                <source srcset={"https://fdnd-agency.directus.app/assets/" + speaker.profile_picture + "?format=avif"} type="image/avif" />
                <source srcset={"https://fdnd-agency.directus.app/assets/" + speaker.profile_picture + "?format=webp"} type="image/webp" />
                <img
                  src={"https://fdnd-agency.directus.app/assets/" + speaker.profile_picture}
                  alt={speaker.fullname + " profile picture"}
                  loading="lazy"
                  width="157"
                  height="157"
                />
              </picture>
              {#if !jsEnabled}
                <p>{speaker.fullname}</p>
              {/if}
            </div>
          {/if}

          <input
            type="radio"
            name="speaker"
            value={speaker.fullname}
            checked={speaker.fullname === selectedSpeaker}
            required
            class:hidden={jsEnabled}
            onchange={() => dispatch('select', speaker.fullname)}
          />
        </li>
      {/each}
    </ul>
  </div>
</section>

{#if jsEnabled}
  <nav class="carousel-nav">
    <button onclick={goToPrev} aria-label="previous doctor">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654 5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z" fill="#fff"/>
      </svg>
    </button>

    <label for={speakers.fullname} aria-labelledby={`speaker-name-${speakers.fullname}`}>
      <p><strong>{speakers[currentIndex]?.fullname}</strong></p>
      <p>{speakers[currentIndex]?.entitle}</p>
    </label>

    <button onclick={goToNext} aria-label="next doctor">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" fill="#fff"/>
      </svg>
    </button>
  </nav>
{/if}


<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: var(--primary-color);
    font-size: var(--text-md);

    @media (min-width: 67.5em){
      font-size: var(--text-lg);
      
    }
  }

  .scroll-container {
    width: 100%;
    height: auto;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    mask-image: linear-gradient(
      to right,
      transparent,
      var(--text-dark) 10% 90%,
      transparent
    );
  }

  .scroll-container::-webkit-scrollbar {
    height: 0.5em;
  }

  .scroll-container::-webkit-scrollbar-track {
    background: transparent;
    margin: 0 3.125em; 
  }

  .scroll-container::-webkit-scrollbar-thumb {
    background: var(--scrollbar-color);
    border-radius: 0.25em;
  }

  

  ul {
    display: flex;
    padding: 1em;
    margin: auto;
    list-style: none;
    width: max-content;
    padding-left: calc(50% - 6.375em);
    padding-right: calc(50% - 6.375em);
  }

  li {
    flex: 0 0 auto;
    text-align: center;
    padding: 0.3em;
    border-radius: 0.625em;
    scroll-snap-align: center;

    @media (min-width: 48em) {
      padding: 1.5em;
    }
  }

  label {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--text-light);
    border-radius: 0.75em;
    width: 100%;
    height: 8.563em;
    text-align: center;
    padding: 0.5em;
    max-width: 12.563em;
  }

  label::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: -1.25em;
    border-left: 1.563em solid transparent;
    border-right: 1.563em solid transparent;
    border-bottom: 1.25em solid var(--text-light);
  }

  input[type="radio"].hidden {
    visibility: hidden;
  }

  nav {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
  }

  nav > button {
    border: none;
    border-radius: 50%;
    padding: 0.2em;
    height: 4em;
    width: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--background-light);
    border: 0.125em solid var(--primary-color);
  }

  button:hover path {
    fill: var(--primary-color);
    stroke: var(--primary-color);
  }

  .card {
    aspect-ratio: 2.45 / 3.3;
    aspect-ratio: 1 / 1;
    min-width: 11.188em;
    max-width: 11.188em;
    background-color: var(--background-ligh);
    border-radius: 1.25em;
    transition: transform 0.3s ease;
    transition: 1s;
    scroll-snap-align: center;
    margin-bottom: 1.25em;

    @media (min-width: 67.5em){
      min-width: 15.5em;
      max-width: 15.5em;
    }
  }

  img {
    width: 100%;                 
    height: 100%;                
    object-fit: cover;           
    object-position: center;     
    display: block;
  }
  

@supports (animation-timeline: view(x)){

  img {
    --card-content: 0.8;
    animation: straighten linear both;
    animation-timeline: view(x);
    scale:(var(--card-content));
  }


  @keyframes straighten{
    0% {
      scale: 0.8;
    }
    50% {
      scale: 1.2;
    }
    100% {
      scale: 0.8; 
    }
  }
}

  .card p {
    font-size: var(--text-xs3);
    color: black;
    position: static; 
    min-width: auto;
    padding-top: 3.2em;
  }

  :global(.js) .card p {
    display: none;
  }
</style>
