<script>
let { transcript } = $props();
import { fade } from 'svelte/transition';

let showTranscript = $state(false);
</script>

<button type="button" class="transcript-btn" onclick={() => { showTranscript = !showTranscript; }}>
  {showTranscript ? "Close Transcript" : "Read Transcript"}
</button>

{#if showTranscript}
  <section class="transcript" transition:fade>
    <h2>Transcript</h2>
    {@html transcript}
  </section>
{/if}

<style>
.transcript-btn {
  width: 100%;
  margin-block: 1rem;
  background-color: var(--primary-color);
  color: var(--alt-text-color);
  border: transparent;
  cursor: pointer;
  font-size: var(--font-size-md);
  height: 34px;
  padding: 0.4rem 0.8em;
  border-radius: var(--border-radius-sm);
  text-transform: capitalize;
  transition: .2s;
}

.transcript-btn:hover {
  background-color: var(--hover-state-color);
}

.transcript {
  max-height: 12.5em;
  overflow-y: scroll;
  scrollbar-width: 12px;
  scrollbar-color: var(--primary-color) var(--background-category-color);
  margin: 1rem;
}

.transcript h2 {
  margin-top: 0;
  font-size: var(--font-size-xl);
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: var(--border-radius-sm);
}

::-webkit-scrollbar-track {
  background: var(--background-category-color);
  border-radius: var(--border-radius-sm);
}
</style>