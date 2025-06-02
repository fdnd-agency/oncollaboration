<script>
import { onMount } from "svelte";

let { speakers } = $props();

onMount(() => {

    if (autocheck) {
      autocheck.setAttribute("checked", true);
    } 

    document.documentElement.classList.add("js");
  
    radioButtons.push(...document.querySelectorAll('input[name="radio-btn"]'));
    radioButtons.forEach((radio, index) => {
      radio.addEventListener("click", () => handleRadioClick(index));
    });

    interval = setInterval(cycleLabels, intervalTime);

    return () => {
    
      clearInterval(interval);
      radioButtons.forEach((radio) =>
        radio.removeEventListener("click", () => handleRadioClick(index))
      );
    };
  });


const handleLabelKeydown = (event) => {
    if (event.key === "Enter") {
      const label = event.target;
      const radioId = label.getAttribute("for");
      const radio = document.getElementById(radioId);
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change"));
      }
    }
  };

  let currentIndex = $derived(0);
  const radioButtons = [];
  // let intervalTime = 3000;
  let interval;

  const cycleLabels = () => {
  
    if (radioButtons[currentIndex]) {
      radioButtons[currentIndex].checked = false;
    }

    currentIndex = (currentIndex + 1) % radioButtons.length;
  
    if (radioButtons[currentIndex]) {
      radioButtons[currentIndex].checked = true;
      radioButtons[currentIndex].dispatchEvent(new Event("change"));
    }
  };

function goToNext() {
  let nextIndex = (currentIndex + 1) % radioButtons.length;
  radioButtons[nextIndex].click();
}

function goToPrev() {
  let prevIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
  radioButtons[prevIndex].click();
}

  const resetInterval = (newIntervalTime = intervalTime) => {
    clearInterval(interval);
    interval = setInterval(cycleLabels, newIntervalTime);
  };

  const handleRadioClick = (index) => {
    clearInterval(interval);
    currentIndex = index;
    radioButtons[currentIndex].checked = true;
    radioButtons[currentIndex].dispatchEvent(new Event("change"));
    
    // resetInterval(5000);
    // setTimeout(() => resetInterval(3000), 5000);
  };

  let autocheck;

</script>

<section>
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
    <!-- <label for="radio1" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio2" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio3" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio4" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio5" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio6" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio7" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio8" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label>
    <label for="radio9" class="navigation-btn" tabindex="0" on:keydown={handleLabelKeydown}></label> -->
    <div class="carousel-controls">
      <button onclick={goToPrev} aria-label="previous doctor"> 
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</section>

<style>

  section {
    display: flex;
    flex-direction: column;

    @media (min-width: 1080px){ 
    padding: 4em 12.5em;
  }
}

  h2 {
    color: #40BD93;
    font-size: 1.5em;
    padding: 0 0 2.5em 1.5em;
    margin-right: 0 40px;
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
    position: absolute;


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
    border: 2px solid #de6a23;
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
    background: #de6a23;
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
  background-color: #fff;
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
      border-bottom: 20px solid #fff;
}

.carousel-controls button {
  border-radius: 50%;
  border: 2px solid #40BD93;
  background: #40BD93;
  color: #40BD93;
  cursor: pointer;
  transition: background 0.2s;
  width: 52px;
  min-width: 52px;
  height: 52px;
  aspect-ratio: 1 / 1;
}

.carousel-controls button:hover {
  background: #fff;
}

.carousel-controls button:hover svg path{
  fill: #40BD93;
}

section > a{
    align-self: flex-end;
    margin-top: 1em;
    color: black;
}
</style>
