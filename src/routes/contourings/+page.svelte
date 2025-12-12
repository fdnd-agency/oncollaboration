<script>
    import backgroundPNG from "$lib/assets/landschap.png";
    import foregroundPNG from "$lib/assets/voorgrond.png";
    import mooncyclusPNG from "$lib/assets/moons.png";


</script>

<div class="image-stack">
  <img class="bg-img" src={backgroundPNG} alt="">

  <h1>Moon</h1>

  <div class="scoop1"></div>
  <div class="scoop2"></div>
  <div class="scoop3"></div>
  <div class="scoop4"></div>
  <div class="scoop5"></div>
  <div class="scoop6"></div>

  <div class="cirkel">
    <div class="moon" style="--moons: url({mooncyclusPNG})"></div>
  </div>

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

.scoop1{
  background-color:lightyellow;
  width:2em;
  height:2em;
  border-radius: 50px;
  corner-shape: scoop;
  position: absolute;
  top:4em;
  right:4em;
  z-index: 6;
  animation: star 1s infinite;
}

.scoop2{
  background-color:lightyellow;
  width:1em;
  height:1em;
  border-radius: 50px;
  corner-shape: scoop;
  position: absolute;
  top:2em;
  right:5em;
  z-index: 6;
  animation: star 1s infinite;
}

.scoop3{
  background-color:lightyellow;
  width:3em;
  height:3em;
  border-radius: 50px;
  corner-shape: scoop;
  position: absolute;
  top:2em;
  right:5em;
  z-index: 6;
  animation: star 1s infinite;
}

.scoop4{
  background-color:lightyellow;
  width:1em;
  height:1em;
  border-radius: 50px;
  corner-shape: scoop;
  position: absolute;
  top:8em;
  left:45em;
  z-index: 6;
  animation: star 1s infinite;
}

.scoop5{
  background-color:lightyellow;
  width:1.5em;
  height:1.5em;
  border-radius: 50px;
  corner-shape: scoop;
  position: absolute;
  top:7em;
  left:43em;
  z-index: 6;
  animation: star 1s infinite;
}

.scoop6{
  background-color:lightyellow;
  width:1em;
  height:1em;
  border-radius: 50px;
  corner-shape: scoop;
  position: absolute;
  top:2em;
  right:30em;
  z-index: 6;
  animation: star 1s infinite;
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

.cirkel{
  animation: cirkel 5s ;
  border: 1px solid red;
}

.moon {
  width: 149px;
  height: 200px;
  background-image: var(--moons);
  background-repeat: no-repeat;
  background-size: 1192px 200px; 
  z-index: 2;
  position: absolute;
  top:45%;  
  left: 50%;
  opacity: 80%;

  transform: translate(-50%, -50%) rotate(0deg) translateY(-200px);
  transform-origin: 50% 200px; 

  animation: moon 25s steps(8) infinite, moonCirkel 10s linear infinite;


}

@keyframes star {
  0%   { transform: rotate(-10deg); }
  50%  { transform: rotate(10deg); }
  100% { transform: rotate(-10deg); }
}

@keyframes moon {
  from { background-position-x: 0; }
  to   { background-position-x: -1192px; }
}

@keyframes moonCirkel {
    0% { transform: translate(-50%, -50%) rotate(0deg) translateY(-100px); }
    100% { transform: translate(-50%, -50%) rotate(360deg) translateY(-100px); }
  }


</style>

