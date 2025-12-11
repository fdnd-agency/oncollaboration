<script>
    import backgroundPNG from "$lib/assets/landschap.png";
    import foregroundPNG from "$lib/assets/voorgrond.png";
    import mooncyclusPNG from "$lib/assets/moons.png";


</script>

<div class="image-stack">
<img class="bg-img" src={backgroundPNG} alt="">

<h1>Moon</h1>

<div class="moon" style="--moons: url({mooncyclusPNG})"></div>

<img class="fore-img" src={foregroundPNG} alt="">
</div>

<style>

.image-stack {
  position: relative; 
  width: 100%;   
  height: 100vh;  
  object-fit: cover;
}

h1{
  display: flex;
  justify-content: center;
  position: relative; 
  color: white;
  padding: .5em;
  z-index: 4;
}

.bg-img{
  z-index: 1;
}

.fore-img{
  z-index: 3;
}

.bg-img, .fore-img {
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;   
  height: 100vh;   
  object-fit: cover;
}

.moon {
  width: 149px;
  height: 200px;
  background-image: var(--moons);
  background-repeat: no-repeat;
  background-size: 1192px 200px; 
  z-index: 2;
  position: absolute;
  top: 15%;  
  left: 50%;
  opacity: 80%;

  animation: moon 10s steps(8) infinite;
}

@keyframes moon {
  from { background-position-x: 0; }
  to   { background-position-x: -1192px; }
}

</style>

