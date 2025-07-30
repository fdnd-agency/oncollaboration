<script>
    import { QandA } from "$lib/index.js";
    let { QANDA , parsedChapters} = $props();
 
     
</script>

<div class='q-a'>
    <QandA 
      comments={QANDA} parsedChapters={parsedChapters} />
  </div>

<style>
    .q-a {
  width: 90vw;
  max-width: 500px;
  margin: 1rem auto;
}

@media (min-width: 1080px) {
  .q-a {
    grid-column: 2;
    grid-row: 1/2;
    width: 100%;
    margin-top: 0;
  }
}
</style>