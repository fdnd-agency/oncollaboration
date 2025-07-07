<script>
  import { page } from '$app/stores'

  function nav_back() {
    window.history.back();
  }
</script>

<section>
  <img src="/images/error-page.png" alt="Something went wrong">
  <h2>Oops, something went wrong!</h2>
  <p>{$page.status} - {$page.error.message}</p>
  <div>
    <a href="/" class="back-to-btn">Back to home</a>
    <button type="button" onclick={nav_back} class="back-to-btn">Back to previous page</button>
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    min-height: 90vh;
  }

  section img {
    height: 16rem;
    margin: 4rem;
    filter: invert(8%) sepia(70%) saturate(4481%) hue-rotate(326deg) brightness(89%) contrast(108%);
  }

  section h2 {
    font-size: var(--font-size-xl);

    @media (min-width: 767px) {
      font-size: var(--font-size-2xl);
    }

    @media (min-width: 1080px) {
      font-size: var(--font-size-4xl);
    }
  }

  section p {
    color: var(--primary-color);

    @media (min-width: 767px) {
      font-size: var(--font-size-xl);
    }

    @media (min-width: 1080px) {
      font-size: var(--font-size-2xl);
    }
  }

  section a{
    @media (min-width: 767px) {
      font-size: var(--font-size-lg);
    }
  }

  section div {
    margin: 3em;
    display: grid;
    gap: 1rem;
  }

  section .back-to-btn {
    color: var(--alt-text-color);
    background-color: var(--primary-color);
    font-size: var(--font-size-md);
    padding: 5px 20px;
    border-radius: var(--border-radius-sm);
    text-transform: capitalize;
    transition: .2s;
    text-decoration: none;
  }

  button.back-to-btn {
    border: transparent;
    background-color: var(--accent-color-1);
  }
</style>