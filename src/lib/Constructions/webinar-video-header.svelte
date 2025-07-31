<script>
  let { webinar } = $props();
  import { page } from '$app/stores';
  const videoStart = $page.url.searchParams.get('video-start');

  import { onMount } from 'svelte';

onMount(() => {
  const video = document.querySelector('video');
  const chapterButtons = document.querySelectorAll('.goto');
  const commentLinks = document.querySelectorAll('.time-link');

  function addClickEventToButtons(buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const chapterTime = parseInt(event.target.dataset.time);  
        video.currentTime = chapterTime;
      });
    });
  }

  addClickEventToButtons(chapterButtons);
  addClickEventToButtons(commentLinks);
});
</script>

<div class="video-header">
  <!-- svelte-ignore a11y_media_has_caption -->
  <video controls width="250" poster={"https://fdnd-agency.directus.app/assets/" + webinar.thumbnail + "?format=avif"}>
    <source src={"https://fdnd-agency.directus.app/assets/" + webinar.video + "#t=" + videoStart}>
  </video>
  
  <h1>{webinar.title}</h1>

  <div class="metadata-container">
    <p class="views">
      <svg width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.67213 10.2297C8.47131 10.2297 9.15061 9.95004 9.71004 9.39061C10.2695 8.83118 10.5492 8.15188 10.5492 7.3527C10.5492 6.55352 10.2695 5.87422 9.71004 5.31479C9.15061 4.75536 8.47131 4.47565 7.67213 4.47565C6.87295 4.47565 6.19365 4.75536 5.63422 5.31479C5.07479 5.87422 4.79508 6.55352 4.79508 7.3527C4.79508 8.15188 5.07479 8.83118 5.63422 9.39061C6.19365 9.95004 6.87295 10.2297 7.67213 10.2297ZM7.67213 9.07893C7.19262 9.07893 6.78504 8.9111 6.44938 8.57545C6.11373 8.23979 5.9459 7.83221 5.9459 7.3527C5.9459 6.87319 6.11373 6.46561 6.44938 6.12995C6.78504 5.7943 7.19262 5.62647 7.67213 5.62647C8.15164 5.62647 8.55922 5.7943 8.89488 6.12995C9.23053 6.46561 9.39836 6.87319 9.39836 7.3527C9.39836 7.83221 9.23053 8.23979 8.89488 8.57545C8.55922 8.9111 8.15164 9.07893 7.67213 9.07893ZM7.67213 12.1478C6.11639 12.1478 4.69918 11.7136 3.42049 10.8451C2.1418 9.97668 1.21475 8.81254 0.639343 7.3527C1.21475 5.89286 2.1418 4.72872 3.42049 3.86028C4.69918 2.99184 6.11639 2.55762 7.67213 2.55762C9.22787 2.55762 10.6451 2.99184 11.9238 3.86028C13.2025 4.72872 14.1295 5.89286 14.7049 7.3527C14.1295 8.81254 13.2025 9.97668 11.9238 10.8451C10.6451 11.7136 9.22787 12.1478 7.67213 12.1478ZM7.67213 10.8691C8.87623 10.8691 9.98176 10.5521 10.9887 9.91807C11.9957 9.28405 12.7656 8.42893 13.2984 7.3527C12.7656 6.27647 11.9957 5.42135 10.9887 4.78733C9.98176 4.15331 8.87623 3.83631 7.67213 3.83631C6.46803 3.83631 5.3625 4.15331 4.35553 4.78733C3.34856 5.42135 2.57869 6.27647 2.0459 7.3527C2.57869 8.42893 3.34856 9.28405 4.35553 9.91807C5.3625 10.5521 6.46803 10.8691 7.67213 10.8691Z"/>
      </svg>
      {webinar.views} views
    </p>
    <p class="date">
      <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <!-- ...date SVG path... -->
      </svg>
      {webinar.date}
    </p>
  </div>

  <div class="categories">
    {#each webinar.categories as category}
      <p class="category">{category.avl_categories_id.name}</p>
    {/each}
  </div>
</div>

<style>
.video-header {
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

@media (min-width: 67.5em) {
  .video-header {
    width: 100%;
  }
}

.video-header h1 {
  margin-block: 1rem;
  font-size: var(--font-size-xl);
  line-height: 1.2;
}

@media (min-width: 56.25em) {
  .video-header h1 {
    font-size: var(--font-size-2xl);
    line-height: 1;
  }
}

.video-header video {
  width: 100%;
  margin: 0 auto;
}

.metadata-container,
.categories {
  display: flex;
  margin-bottom: .7rem;
  gap: 1rem;
}

.metadata-container .views,
.metadata-container .date {
  display: flex;
  align-items: center;
  gap: .3rem;
  color: var(--primary-color);
  fill: var(--primary-color);
  font-weight: 300;
}

.categories .category {
  padding: var(--padding-label);
  width: fit-content;
  background-color: var(--background-category-color);
  border-radius: var(--border-radius-sm);
  text-transform: capitalize;
}
</style>