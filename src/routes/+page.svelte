<script>
  import { Carrousel, FAQ } from "$lib/index.js";

  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;

</script>

<main>

  
  <Carrousel {speakers}/>

  <FAQ {content}/>

</main> 