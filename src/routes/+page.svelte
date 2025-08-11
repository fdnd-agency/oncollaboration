<script>
  import { HomeHero, HomeArrow, Carrousel, FAQ, HomeCallToAction, Partners, DoctorsUnited } from "$lib/index.js";


  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;
  let logos = data.logos;

</script>

<main>
  <HomeHero {content}/>
  <HomeArrow />
  <HomeCallToAction />
  <DoctorsUnited {content}/>
  <Carrousel {speakers}/>
  <FAQ {content}/>
  <Partners {logos}/>

</main> 

