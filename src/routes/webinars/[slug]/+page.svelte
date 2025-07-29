<script>
  import { WebinarVideoHeader, WebinarChapters, WebinarTranscript, WebinarDescription, WebinarSpeakers, WebinarResources, WebinarQandA, WatchNext, NavBack } from "$lib/index.js";
  import formatDate from '$lib/JavaScript/format-date.js';
  let { data } = $props();
  
  let parsedChapters = JSON.parse(data.webinar.chapters);
 
</script>

<NavBack />

<main>
  <WebinarVideoHeader webinar={data.webinar} />
  <WebinarChapters chapters={parsedChapters} />
  <WebinarTranscript transcript={data.webinar.transcript} />
  <WebinarDescription description={data.webinar.description} />
  <WebinarSpeakers speakers={data.webinar.speakers} />
  <WebinarResources resources={data.webinar.resources} />
  <WebinarQandA QANDA={data.comments} {parsedChapters}/>
  <WatchNext webinars={data.webinars} formatDate={formatDate} />
</main>

<style>
  main {
    margin-block: 1rem;
    margin-bottom: 6rem;
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

  @media (min-width: 1080px) {
    main {
      display: grid;
      grid-template-columns: 55% 40%;
      column-gap: 3rem;
    }
  }
    
</style>
