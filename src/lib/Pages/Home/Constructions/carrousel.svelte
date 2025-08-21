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

            <!-- <input
              type="radio"
              name="speaker"
              value={speaker.fullname}
              checked={speaker.fullname === selectedSpeaker}  
              required
              class:hidden={jsEnabled}
              onchange={() => dispatch('select', speaker.fullname)}
            /> -->
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

<!-- <section>
  <h2>Meet our doctors</h2>
  <div>
    {#each speakers as speaker, i}
      <input type="radio" name="radio-btn" id={"radio" + (i + 1)} hidden checked={i === 0}/>
  {/each}
    <ul class="doctors">
      {#each speakers as speaker, index}
      <li class={"slide" + (index + 1) + " card"}>
        <picture>
          <source srcset="https://fdnd-agency.directus.app/assets/{speaker.profile_picture}?format=avif" type="image/avif">
          <source srcset="https://fdnd-agency.directus.app/assets/{speaker.profile_picture}?format=webp" type="image/webp">
          <img src="https://fdnd-agency.directus.app/assets/{speaker.profile_picture}?format=avif" alt="{speaker.fullname}'s profile picture">
       </picture>
       <p>{speaker.fullname}</p>
      </li>
      {/each}
    </ul>
  </div>
  <div class="navigation" hidden>
    <div class="carousel-controls">
      <button onclick={goToPrev} aria-label="previous doctor"> 
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654 5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z" fill="#fff"/>
        </svg> 
      </button>
       <div class="doctor-info">
          <p><strong>{speakers[currentIndex].fullname}</strong></p>
          <p>{speakers[currentIndex].entitle}</p>
      </div>
      <button onclick={goToNext} aria-label="next doctor"> 
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" fill="#fff"/>
        </svg> 
      </button>
    </div>
  </div>
  <a href="">Show all →</a>
</section> -->

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
    min-height: 26.75em;
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
    padding-left: calc(50% - 9.375em);
    padding-right: calc(50% - 9.375em);
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
    width: 12.563em;
    height: 6.563em;
    text-align: center;
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
    gap: 3em;
    padding: 1em;
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
    background-color: var(--alt-text-color);
    border-radius: 20px;
    transition: transform 0.3s ease;
    transition: 1s;
    scroll-snap-align: center;
    overflow: hidden;
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

  .card p {
  font-size: var(--text-md);
  color: black;
  padding: 1em;
  position: static; /* let it flow inside the card */
  min-width: auto;
  }

  :global(.js) .card p {
  display: none;
}


/* 
  section {
    display: flex;
    flex-direction: column;

    @media (min-width: 1080px){ 
      padding: 4em 12.5em;
    }
  }

  h2 {
    color: var(--primary-color);
    font-size: var(--text-md);

    @media (min-width: 1080px){
      font-size: var(--font-size-5xl);
      
    }
  }

  section > div {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 270px;
    overflow: hidden;

    @media (min-width: 1080px){
      height: 640px;
    }
  }

  .doctors {
    display: flex;
    position: relative;
    gap: 60px;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: auto;
    scroll-snap-type: x mandatory;

    @media (min-width: 1080px){
      gap: 20px;
    }
  }

  :global(.js) .doctors {
    overflow: unset;
    overflow-x: auto;
    position: absolute;
    overflow-y: hidden;
  }

  .card {
    aspect-ratio: 2.45 / 3.3;
    aspect-ratio: 1 / 1;
    min-width: 179px;
    max-width: 179px;
    background-color: var(--alt-text-color);
    border-radius: 20px;
    transition: transform 0.3s ease;
    transition: 1s;
    scroll-snap-align: center;
    overflow: hidden;
    margin-bottom: 20px;

    @media (min-width: 1080px){
      min-width: 248px;
      max-width: 248px;
    }
  }

  :global(.js) .card {
    margin-bottom: unset;
  }
  

  .card img {
    width: 100%;                 
    height: 100%;                
    object-fit: cover;           
    object-position: center;     
    display: block;
  }

  :global(.js) .card p{
    display: none;
  }

  .card p{
    display: block;
    position: absolute;
    min-width: 30em;
  }

  :global(.js) #radio1:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2));

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2));
    }
  }

  :global(.js) #radio2:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 1);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 1);
    }
  }

  :global(.js) #radio3:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 2);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 2);
    }
  }

  :global(.js) #radio4:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 3);
    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 3);
    }
  }

  :global(.js) #radio5:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 4);
    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 4);
    }
  }

  :global(.js) #radio6:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 5);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 5);
    }
  }

  :global(.js) #radio7:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 6);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 6);
    }
  }

  :global(.js) #radio8:checked ~ .doctors .slide1 {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 7);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 7);
    }
  }

  :global(.js) :is(
  #radio1:checked ~ .doctors .slide1, #radio2:checked ~ .doctors .slide2, #radio3:checked ~ .doctors .slide3, #radio4:checked ~ .doctors .slide4, #radio5:checked ~ .doctors .slide5, #radio6:checked ~ .doctors .slide6, #radio7:checked ~ .doctors .slide7, #radio8:checked ~ .doctors .slide8) 
  {
  transform: scale(1.5);
}

  .navigation{
    height: fit-content;
  }

  :global(.js) .navigation {
    z-index: 1;
  }


  :global(.js) .navigation-btn {
    border: 2px solid var(--primary-color);
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 1s;
  }

  .navigation-btn:not(:last-child) {
    margin-right: 15px;

    @media (min-width: 1080px){
    margin-right: 40px;
    }
  }

  .navigation-btn:hover {
    background: var(--primary-color);
  }

  .carousel-controls {
    display: none;
  }

  :global(.js ).carousel-controls {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
 }

.doctor-info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--text-light);
  border-radius: 12px;
  width: 12.563em;
  height: 6.563em;
  text-align: center;
}

.doctor-info::before{
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: -20px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 20px solid var(--text-light);
}

.carousel-controls button {
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  background: var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
  transition: background 0.2s;
  width: 52px;
  min-width: 52px;
  height: 52px;
  aspect-ratio: 1 / 1;
}

.carousel-controls button:hover {
  background: var(--text-light);
}

.carousel-controls button:hover svg path{
  fill: var(--primary-color);
}

section > a{
    align-self: flex-end;
    margin-top: 1em;
    color: var(--text-dark);
} */
</style>
