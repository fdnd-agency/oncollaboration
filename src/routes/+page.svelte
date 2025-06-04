<script>

  import { Article, Carrousel, FAQ, CTA } from "$lib/index.js";

  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;

</script>

<main>

  <Article {content}/>
  <CTA />
  <Carrousel {speakers}/>
  <FAQ {content}/>

</main> 
