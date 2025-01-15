<script>
  import { page } from '$app/stores'
</script>

<section>
  <img src="/images/error-page.png" alt="Something went wrong">
  <h2>Oops, something went wrong!</h2>
  <p>{$page.status} - {$page.error.message}</p>
  <a href="/">Back to home</a>
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
  }

  section p {
    color: var(--primary-color);
  }

  section a {
    display: inline-flex;
    color: var(--alt-text-color);
    background-color: var(--primary-color);
    font-size: var(--font-size-sm);
    font-weight: 700;
    padding: 5px 20px;
    border-radius: var(--border-radius-sm);
    margin: 3em;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 767px) {
    section h2 {
      font-size: var(--font-size-2xl);
    }
    
    section p {
      font-size: var(--font-size-xl);
    }

    section a {
      font-size: var(--font-size-lg);
    }
  }

  @media only screen and (min-width: 1080px) {
    section h2 {
      font-size: var(--font-size-4xl);
    }
    
    section p {
      font-size: var(--font-size-2xl);
    }
  }
</style>