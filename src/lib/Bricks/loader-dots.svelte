<div class="load">
  <p>Loading</p>
</div>

<style>
  p {
    display: none;
  }

  .load {
    margin: auto;
    width: inherit;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: load-dots 1s infinite linear alternate;
  }

  @keyframes load-dots {
    0% {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff;}
    33% {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff2;}
    66% {box-shadow: 20px 0 #fff2, -20px 0 #fff; background: #fff2;}
    100% {box-shadow: 20px 0 #fff2, -20px 0 #fff; background: #fff;} 
  }
</style>