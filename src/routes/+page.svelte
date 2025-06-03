<script>

  import { Article, Carrousel, FAQ, Partners} from "$lib/index.js";

  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;
  let logos = data.logos;

</script>

<main>

  <Article {content}/>
  <Carrousel {speakers}/>

  <FAQ {content}/>

  <Partners {logos}/>

</main> 