<script>
  import { onMount } from "svelte";


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

  let currentIndex = 0;
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
</script>

<section>
  <h2>Meet our doctors</h2>
  <div>
    <ul class="doctors">
  <input type="radio" name="radio-btn" id="radio1" bind:this={autocheck}/>
  <input type="radio" name="radio-btn" id="radio2" />
  <input type="radio" name="radio-btn" id="radio3" />
  <input type="radio" name="radio-btn" id="radio4" />
  <input type="radio" name="radio-btn" id="radio5" />
  <input type="radio" name="radio-btn" id="radio6" />
  <input type="radio" name="radio-btn" id="radio7" />
  <input type="radio" name="radio-btn" id="radio8" />
  <input type="radio" name="radio-btn" id="radio9" /> <!-- Added -->

  <li class="first card"></li>
  <li class="second card"></li>
  <li class="third card"></li>
  <li class="fourth card"></li>
  <li class="fifth card"></li>
  <li class="sixth card"></li>
  <li class="seventh card"></li>
  <li class="eighth card"></li>
  <li class="ninth card"></li> <!-- Added -->
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
      <button on:click={goToPrev} aria-label="previous doctor"> 
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654 5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z" fill="#fff"/>
        </svg> 
      </button>
      <button on:click={goToNext} aria-label="next doctor"> 
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" fill="#fff"/>
        </svg> 
      </button>
    </div>
  </div>
</section>

<style>
  section {
    width: 100%;

    @media (min-width: 1080px){ 
    padding: 4em 12.5em;
  }
}

  h2 {
    color: var(--alt-text-color);
    font-size: var(--font-size-2xl);
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
    height: 400px;
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
    background-color: var(--alt-text-color);
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
    transition: 1s;
    scroll-snap-align: center;
    @media (min-width: 1080px){
     min-width: 248px;
    }
  }

  #radio1:checked ~ .first {
    margin-left: calc(50% - (179px / 2));

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2));
    }
  }

  #radio2:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 1);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 1);
    }
  }

  #radio3:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 2);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 2);
    }
  }

  #radio4:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 3);
    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 3);
    }
  }

  #radio5:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 4);
    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 4);
    }
  }

  #radio6:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 5);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 5);
    }
  }

  #radio7:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 6);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 6);
    }
  }

  #radio8:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 7);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 7);
    }
  }

  #radio9:checked ~ .first {
    margin-left: calc(50% - (179px / 2) - (179px + 60px) * 8);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 8);
    }
  }

  /* Highlight the selected card */
  :global(.js) :is(#radio1:checked ~ .first, #radio2:checked ~ .second, #radio3:checked ~ .third, #radio4:checked ~ .fourth, #radio5:checked ~ .fifth, #radio6:checked ~ .sixth, #radio7:checked ~ .seventh, #radio8:checked ~ .eighth, #radio9:checked ~ .ninth) {
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

  input {
    display: none;
  }

  .carousel-controls {
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 2em;
}

.carousel-controls button {
  padding: 1em;
  border-radius: 50%;
  border: 2px solid #40BD93;
  background: #40BD93;
  color: #40BD93;
  cursor: pointer;
  transition: background 0.2s;
}

.carousel-controls button:hover {
  background: #fff;
}

.carousel-controls button:hover svg path{
  fill: #40BD93;
}
</style>
