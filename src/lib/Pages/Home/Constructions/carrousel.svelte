<script>
  import { onMount, createEventDispatcher } from 'svelte';

  let { speakers = [], selectedSpeaker } = $props();
  const dispatch = createEventDispatcher();

  let jsEnabled = $state(false);
  let speakerList;
  let currentIndex = $state(0);

  onMount(() => {
    jsEnabled = true;
    updateSelectedOnScroll(); // initialize selection
  });

  function scrollCarousel(direction) {
    if (!speakerList) return;

    const item = speakerList.querySelector('li');
    if (!item) return;

    const itemWidth = item.clientWidth + parseInt(getComputedStyle(item).marginRight || 0);

    speakerList.scrollBy({
      left: direction * itemWidth,
      behavior: 'smooth'
    });

    // Update index after scrolling animation
    setTimeout(updateSelectedOnScroll, 300);
  }

  function updateSelectedOnScroll() {
    if (!speakerList) return;

    const containerRect = speakerList.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    const items = Array.from(speakerList.querySelectorAll('li'));

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(centerX - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    currentIndex = closestIndex;
    dispatch('select', speakers[currentIndex].fullname);
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
  <div class="scroll-container">
    <ul bind:this={speakerList} onscroll={updateSelectedOnScroll}>
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
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    @media (min-width: 1080px){
      font-size: var(--text-lg);
      
    }
  }

  .scroll-container {
    width: 100%;
    max-width: 45em;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1em;
    display: flex;
    justify-content: start;
    scroll-behavior: smooth;
    white-space: nowrap;
  }

  ul {
    overflow-x: auto;
    display: flex;
    padding: 1em;
    margin: auto;
    list-style: none;
    width: max-content;
    scroll-snap-type: x mandatory;
    padding-left: calc(50% - 6.375em);
    padding-right: calc(50% - 6.375em);
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 auto;
    text-align: center;
    padding: 0.3em;
    border-radius: 10px;
    scroll-snap-align: center;
  }

  label {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--text-light);
    border-radius: 12px;
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
    top: -20px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 20px solid var(--text-light);
  }

  input[type="radio"].hidden {
    visibility: hidden;
  }

  nav {
    display: flex;
    gap: 1em;
    /* padding: 1em; */
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
  }

  .card {
    aspect-ratio: 2.45 / 3.3;
    aspect-ratio: 1 / 1;
    min-width: 179px;
    max-width: 179px;
    background-color: var(--primary-color);
    border-radius: 20px;
    transition: transform 0.3s ease;
    transition: 1s;
    scroll-snap-align: center;
    /* overflow: hidden; */
    margin-bottom: 20px;

    @media (min-width: 1080px){
      min-width: 248px;
      max-width: 248px;
    }
  }

  img {
    width: 100%;                 
    height: 100%;                
    object-fit: cover;           
    object-position: center;     
    display: block;
  }

  @supports (animation-timeline: view()) {
    @property --doctor-highlight {
      syntax: "<number>";
      initial-value: 0;
      inherits: false;
    }

    /* .scroll-container {
      animation-timeline: view();
    } */

    img {
      --doctor-highlight: 1;
      animation-timeline: view();
      animation: highlight linear both;
      animation-range: entry 0% cover 50%;
      scale: var(--doctor-highlight);
    }

    @keyframes highlight {
      0% {
        --doctor-highlight: 1;
      }

      50% {
        --doctor-highlight: 2;
      }

      100% {
        --doctor-highlight: 1;
      }
    }
  }

  .card p {
    font-size: var(--text-xs3);
    color: black;
    position: static; 
    min-width: auto;
  }

  :global(.js) .card p {
    display: none;
  }
</style>
