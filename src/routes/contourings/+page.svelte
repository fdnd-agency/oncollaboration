<script>
    import backgroundPNG from "$lib/assets/landschap.png";
    import foregroundPNG from "$lib/assets/voorgrond.png";
    import moon1PNG from "$lib/assets/moon-1.png";
    import moon2PNG from "$lib/assets/moon-2.png";
    import moon3PNG from "$lib/assets/moon-3.png";
    import moon4PNG from "$lib/assets/moon-4.png";
    import moon5PNG from "$lib/assets/moon-5.png";
    import moon6PNG from "$lib/assets/moon-6.png";
    import moon7PNG from "$lib/assets/moon-7.png";
    import moon8PNG from "$lib/assets/moon-8.png";


</script>

<div class="image-stack">
<img class="bg-img" src={backgroundPNG} alt="">

<img class="fore-img" src={foregroundPNG} alt="">
</div>

<style>

.image-stack {
  position: relative; 
  width: 100%;   
  height: 100vh;  
  object-fit: cover;
}

.bg-img, .fore-img {
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;   
  height: 100vh;   
  object-fit: cover;
}

</style>