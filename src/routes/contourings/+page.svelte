<script>
    import backgroundPNG from "$lib/assets/landschap.png";
    import foregroundPNG from "$lib/assets/voorgrond.png";
    import mooncyclusPNG from "$lib/assets/mooncyclus.png";


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