<script>
  import { HomeHero, HomeArrow, Carrousel, FAQ, HomeCallToAction, Partners, HomeDoctorsUnited } from "$lib/index.js";


  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;
  let logos = data.logos;

</script>

<main>
  <HomeHero {content}/>
  <HomeArrow />
  <HomeCallToAction />
  <HomeDoctorsUnited {content}/>
  <Carrousel {speakers}/>
  <FAQ {content}/>
  <Partners {logos}/>

</main> 

