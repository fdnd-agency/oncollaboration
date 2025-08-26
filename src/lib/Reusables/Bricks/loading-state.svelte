<p>
  <span>L</span>
  <span>o</span>
  <span>a</span>
  <span>d</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
  <span>.</span>
  <span>.</span>
  <span>.</span>
</p>

<style>
  p {
    display: flex;
    font-size: var(--font-size-4xl);
  }

  span {
    animation: ballDrop 1.2s forwards infinite;
  }

  span:nth-of-type(2){
    animation-delay: .1s;
  }

  span:nth-of-type(3){
    animation-delay: .2s;
  }

  span:nth-of-type(4){
    animation-delay: .3s;
  }

  span:nth-of-type(5){
    animation-delay: .4s;
  }

  span:nth-of-type(6){
    animation-delay: .5s;
  }

  span:nth-of-type(7){
    animation-delay: .6s;
  }

  span:nth-of-type(8){
    animation-delay: .7s;
  }

  span:nth-of-type(9){
    animation-delay: .8s;
  }

  span:nth-of-type(10){
    animation-delay: .9s;
  }

  @keyframes ballDrop {
    80% {
      transform: translate(0, 20px) scale(.5);
    }
    100% {
      transform: translate(0) scale(1);
    }
  }
</style>