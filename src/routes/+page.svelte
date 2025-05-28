<script>
  import Article from "../lib/Constructions/article.svelte";
  import { Carrousel } from "$lib/index.js";

  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;

</script>

<main>

  <Article {content}/>
  <Carrousel {speakers}/>

</main> 