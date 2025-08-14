<script>
  import { SpeakerInfo, SpeakerFeaturedWebinars, SpeakerBackButton} from "$lib/index.js";
  
  let { data } = $props(); 

  const speakers = data.speaker;
  const webinars = data.webinars; 
</script>

  <SpeakerBackButton />
  {#if speakers}

    <SpeakerInfo {speakers} />
    <SpeakerFeaturedWebinars {speakers} {webinars} />
    
  {/if}
