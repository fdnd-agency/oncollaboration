<script>
  export let webinars = [];
  export let formatDate;

  // Get the 4 newest webinars and map their data
  let newestWebinars = webinars.slice(0, 4).map(webinar => ({
    title: webinar.title,
    speaker: webinar.speakers.map(s => s.avl_speakers_id.fullname).join(', '),
    date: formatDate(webinar.date),
    thumbnail: webinar.thumbnail,
    slug: webinar.slug
  }));
</script>

<div class="watch-next">
  <h2>Watch next</h2>
  <ul class="carousel">
    {#each newestWebinars as webinar}
      <li>
        <a href={`/webinars/${webinar.slug}`}>
          <img src={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}?width=384&fit=cover&format=avif`}
               alt={webinar.title}
               width="384"
               height="384"
               loading="lazy" />
          <div>
            <h3>{webinar.title}</h3>
            <p>{webinar.speaker}</p>
            <p>{webinar.date}</p>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
.watch-next {
  height: auto;
  max-width: 500px;
  width: 90vw;
  margin: 1rem auto;
  position: relative;
}

.watch-next a {
  text-decoration: none;
  color: var(--text-color);
}

.watch-next ul {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 10px;
  scroll-behavior: smooth;
  margin: 0 auto;
  gap: 10px;
  padding: 10px 0;
  transition: all .3s ease;
}

.watch-next li {
  flex: 0 0 calc(100% - 20%);
  scroll-snap-align: start;
  border-radius: 10px;
  box-sizing: border-box;
}

.watch-next img {
  grid-area: a;
  height: auto;
  width: 200px;
  border-radius: 10px;
}

.watch-next h3, .watch-next p {
  grid-area: b;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1080px) {
  .watch-next {
    grid-row: 2/10;
    grid-column: 2;
    width: 100%;
  }

  .watch-next ul {
    display: grid;
  }

  .watch-next li {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .watch-next p, .watch-next h3 {
    margin: 10px 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
    color: var(--text-color);
    transition: .2s;
    text-overflow: ellipsis;
  }

  .watch-next a {
    text-decoration: none;
    margin: 10px 0;
    transition: .2s;
    border-bottom: 2px solid var(--primary-color);
  }

  .watch-next a:hover h3,
  .watch-next a:hover p {
    color: var(--hover-state-color);
  }

  .watch-next img {
    width: 384px;
    height: auto;
  }
}
</style>