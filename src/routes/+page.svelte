<script>
  import { Carrousel } from "$lib/index.js";

  let { data } = $props();
  let speakers = data.speakers;
  console.log(speakers);

</script>

<main>
  
  <Carrousel {speakers}/>

</main> 