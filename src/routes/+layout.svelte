<script>
  import { run } from 'svelte/legacy';
  import { Navigation, Footer, LoadingState } from "$lib/index.js";
  import { navigating } from '$app/stores';
  import { onNavigate } from "$app/navigation";

  let { children } = $props();

  let showLoading = $state(false);
  let navigatingTimeout = $state();
  
  // Watch the `navigating` store
  run(() => {
    if ($navigating) {
      // Delay showing the loading state
      clearTimeout(navigatingTimeout);
      navigatingTimeout = setTimeout(() => {
        showLoading = true;
      }, 400); // Adjust delay for view-transition capture
    } else {
      clearTimeout(navigatingTimeout);
      showLoading = false; // Hide loading when navigation completes
    }
  });
  
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

{#if showLoading}
  <Navigation />
  <main>
    <LoadingState />
  </main>
{:else} 
  <Navigation />
  <main class="content">
    {@render children?.()}
  </main>
{/if}
  <Footer />
  
<style>
  main {
    margin: auto;
    margin: 0 auto;
    margin-bottom: 6rem;
    position: relative;
  }

  .content {
    flex: 1;

    @media (min-width: 37.5em) {
      margin-bottom: 4.813em;
    }
    
    @media (min-width: 67.5em) {
      padding-bottom: 0;
    }

    @media (min-width: 120em) {
      margin-top: 5.125em;
    }
  }
</style>
