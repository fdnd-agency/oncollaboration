<script>
    import { QandA } from "$lib/index.js";
    let { QANDA } = $props(); 
</script>

<div class='q-a'>
    <QandA 
      comments={QANDA} />
  </div>

<style>
  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }
</style>