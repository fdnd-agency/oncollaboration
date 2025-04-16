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
  <div class="content">
    {@render children?.()}
  </div>
{/if}

<div class="footer">
  <Footer />
</div>

<style>
  main {
    margin: auto;
  }
  
  .content {
    flex: 1;

    @media (min-width: 600px) {
      margin-bottom: 77px;
    }
    
    @media (min-width: 1080px) {
      margin-top: 74px;
      padding-bottom: 0;
    }

    @media (min-width: 1920px) {
      margin-top: 82px;
    }
  }

  .footer {
    background-color: var(--background-color);

    @media (min-width: 1080px) {
      background-color: #f0f0f0;
    }
  }

</style>
