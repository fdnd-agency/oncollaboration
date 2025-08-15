<script>
  import {HomeWebinarsButton, HomeContouringsButton, HomeDoctorsButton, HomeEmptyButton} from "$lib/index.js";
</script>

<section>
  <div class="cta-container">
    <HomeWebinarsButton />
    <HomeContouringsButton />
    <HomeDoctorsButton />
    <HomeEmptyButton />
  </div>
</section>

<style>
    section {
      height: 100%;
    }

  .cta-container {
    display: grid;
    grid-template-columns: 8.75em 8.75em;
    grid-template-rows: 8.125em 8.125em;
    justify-content: center;
    justify-items: center;
    gap: 0.5em;
    grid-template-areas:
      "webinars contourings"
      "doctors empty";

      @media (min-width: 23.438em) {
        grid-template-columns: 10.625em 10.625em;
        grid-template-rows: 8.125em 8.125em;
        gap: 1.3em;
      }

      @media (min-width: 26.563em) {
        grid-template-columns: 11.563em 11.563em;
        grid-template-rows: 10em 10em;
      }

      @media (min-width: 64em) {
        display: flex;
        flex-direction: row;
      }
    }
</style>
