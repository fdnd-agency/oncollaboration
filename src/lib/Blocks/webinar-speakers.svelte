<script>
  export let speakers = [];
</script>

<article class="speakers">
  {#if speakers.length > 1}
    <h2>The speakers</h2>
  {:else}
    <h2>The speaker</h2>
  {/if}

  {#each speakers as speaker}
    <section class="speaker-info">
      <img
        src={"https://fdnd-agency.directus.app/assets/" + speaker.avl_speakers_id.profile_picture + "?format=avif"}
        alt={speaker.avl_speakers_id.fullname}
        width="90"
        height="90"
      />

      <div>
        <h3>{speaker.avl_speakers_id.fullname}</h3>
        <p>{speaker.avl_speakers_id.entitle}</p>
      </div>

      <a href={"/speakers/" + speaker.avl_speakers_id.slug}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="var(--alt-text-color)" />
          <path d="M24,4C12.972,4,4,12.972,4,24s8.972,20,20,20s20-8.972,20-20S35.028,4,24,4z M25.5,33.5c0,0.828-0.672,1.5-1.5,1.5
            s-1.5-0.672-1.5-1.5v-11c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V33.5z M24,18c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2
            s2,0.895,2,2C26,17.105,25.105,18,24,18z"></path>
        </svg>
        <span>About this speaker</span>
      </a>
    </section>
  {/each}
</article>

<style>
.speakers {
  padding-block: 2rem;
  max-width: 900px;
  display: grid;
  gap: 1rem;
}

.speaker-info {
  display: flex;
  align-items: center;
  gap: var(--gap, 1rem);
}

.speaker-info img {
  object-fit: cover;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.speaker-info div {
  width: 70%;
}

.speaker-info p {
  font-weight: 300;
  font-size: var(--font-size-sm);
}

.speaker-info a {
  width: fit-content;
  text-decoration: none;
  color: var(--primary-color);
}

.speaker-info a svg {
  fill: var(--primary-color);
}

.speaker-info a span {
  display: none;
}

@media (min-width: 900px) {
  .speaker-info {
    gap: 1rem;
  }
  .speaker-info img {
    width: 70px;
    height: 70px;
  }
  .speaker-info div {
    width: 65%;
  }
  .speaker-info a:hover {
    text-decoration: underline;
  }
  .speaker-info a svg {
    display: none;
  }
  .speaker-info a span {
    display: block;
  }
  .speaker-info a span::after {
    content: '>';
    padding-inline-start: 10px;
  }
}
</style>