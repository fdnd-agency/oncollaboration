<script>
  let { chapters } = $props();
</script>

<section class="chapters">
  <h2>Chapters</h2>
  <ul>
    {#each chapters as chapter}
      <li>
        <a
          href="?video-start={chapter.time_seconds}"
          class="goto"
          data-time={chapter.time_seconds}
          title={chapter.title_number}
          data-sveltekit-noscroll
        >
          <span>{chapter.title_number.slice(7)}</span>
          <div></div>
          <span>{chapter.title}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
.chapters ul {
  display: flex;
  overflow: auto;
}

.chapters ul li {
  display: flex;
  min-width: 25%;
  flex-direction: column;
}

.chapters ul li .goto {
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  flex-direction: column;
  background-color: transparent;
  text-decoration: none;
}

.chapters ul li .goto div {
  border-top: dotted 3px;
  height: 3px;
  width: 99%;
  position: relative;
  margin: 5px 0 2px 0;
}

.chapters ul li .goto div::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--primary-color);
  border-radius: 50%;
  bottom: -5px;
  left: 50%;
  translate: -50% 0;
}

.chapters ul li .goto:hover div::after {
  scale: 1.7;
  transition: .2s;
}

.chapters ul li .goto span:first-child {
  font-size: var(--font-size-xl);
  color: var(--primary-color);
  position: relative;
}

.chapters ul li .goto span:last-child {
  font-size: var(--font-size-lg);
  color: var(--text-color);
}

.chapters ul li .goto * {
  pointer-events: none;
}
</style>