<script>

  import { HomeHero, Carrousel, FAQ, CTA, Partners, DoctorsUnited } from "$lib/index.js";


  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;
  let logos = data.logos;

</script>

<main>

  <HomeHero {content}/>
  <CTA />
  <DoctorsUnited {content}/>
  <Carrousel {speakers}/>
  <FAQ {content}/>
  <Partners {logos}/>

</main> 

