<section>
  <h2>Meet our doctors</h2>
  <div>
    <ul class="doctors">
      <input type="radio" name="radio-btn" id="radio1" checked/>
      <input type="radio" name="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" id="radio3" />
      <input type="radio" name="radio-btn" id="radio4" />
      <input type="radio" name="radio-btn" id="radio5" />
      <input type="radio" name="radio-btn" id="radio6" />
      <input type="radio" name="radio-btn" id="radio7" />
      <input type="radio" name="radio-btn" id="radio8" />

      <li class="first card"></li>
      <li class="second card"></li>
      <li class="third card"></li>
      <li class="fourth card"></li>
      <li class="fifth card"></li>
      <li class="sixth card"></li>
      <li class="seventh card"></li>
      <li class="eighth card"></li>
    </ul>
  </div>
  <div class="navigation">
    <label for="radio1" class="navigation-btn"></label>
    <label for="radio2" class="navigation-btn"></label>
    <label for="radio3" class="navigation-btn"></label>
    <label for="radio4" class="navigation-btn"></label>
    <label for="radio5" class="navigation-btn"></label>
    <label for="radio6" class="navigation-btn"></label>
    <label for="radio7" class="navigation-btn"></label>
    <label for="radio8" class="navigation-btn"></label>
  </div>
</section>

<style>
  section {
    width: 100%;
    background-color: var(--accent-color-1);

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
    position: absolute;
    gap: 60px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 1080px){
      gap: 20px;
    }
  }

  .card {
    aspect-ratio: 2.45 / 3.3;
    min-width: 150px;
    background-color: var(--alt-text-color);
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
    transition: 2s;
    @media (min-width: 1080px){
     min-width: 248px;
    }
  }

  #radio1:checked ~ .first {
    margin-left: calc(50% - (150px / 2));

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2));
    }
  }

  #radio2:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 1);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 1);
    }
  }

  #radio3:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 2);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 2);
    }
  }

  #radio4:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 3);
    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 3);
    }
  }

  #radio5:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 4);
    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 4);
    }
  }

  #radio6:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 5);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 5);
    }
  }

  #radio7:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 6);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 6);
    }
  }

  #radio8:checked ~ .first {
    margin-left: calc(50% - (150px / 2) - (150px + 60px) * 7);

    @media (min-width: 1080px){
    margin-left: calc(50% - (248px / 2) - (248px + 20px) * 7);
    }
  }

  /* Highlight the selected card */
  #radio1:checked ~ .first,
  #radio2:checked ~ .second,
  #radio3:checked ~ .third,
  #radio4:checked ~ .fourth,
  #radio5:checked ~ .fifth,
  #radio6:checked ~ .sixth,
  #radio7:checked ~ .seventh,
  #radio8:checked ~ .eighth {
    transform: scale(1.5);
  }

  .navigation {
    z-index: 1;
    height: fit-content;
  }

  .navigation-btn {
    border: 2px solid #de6a23;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
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
</style>
