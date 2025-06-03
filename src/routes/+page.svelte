<script>

  import { Article, Carrousel, FAQ } from "$lib/index.js";

  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;

</script>

<main>

  <Article {content}/>
  <Carrousel {speakers}/>

  <FAQ {content}/>

</main> 