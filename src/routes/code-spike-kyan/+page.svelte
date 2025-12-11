<script>
    import "$lib/global.css";
    import la1 from "$lib/assets/line-art-1.svg";
    import la2 from "$lib/assets/line-art-2.svg";
    import la3 from "$lib/assets/line-art-3.svg";
    import la4 from "$lib/assets/line-art-4.svg";
    import la5 from "$lib/assets/line-art-5.svg";
    import la6 from "$lib/assets/line-art-6.svg";
    import la7 from "$lib/assets/line-art-7.svg";
    import la8 from "$lib/assets/line-art-8.svg";
    import la9 from "$lib/assets/line-art-9.svg";
    import la10 from "$lib/assets/line-art-10.svg";
    import la11 from "$lib/assets/line-art-11.svg";
    import la12 from "$lib/assets/line-art-12.svg";
    import la13 from "$lib/assets/line-art-13.svg";
</script>


<svelte:head> 
    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
    </style>
</svelte:head>


<article class="span-wrapper">
    <span>D</span><span>i</span><span>s</span><span>a</span><span>s</span><span>t</span><span>r</span><span>o</span><span>u</span><span>s</span>
    <span class="space"></span>
    <span>l</span><span>i</span><span>n</span><span>e</span><span>-</span><span>a</span><span>r</span><span>t</span>
    <span class="space"></span>
    <span>s</span><span>c</span><span>r</span><span>o</span><span>l</span><span>l</span>
    <span class="space"></span>
    <span>d</span><span>r</span><span>i</span><span>v</span><span>e</span><span>n</span>
    <span class="space"></span>
    <span>a</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>
</article>

<section class="img-wrapper">
    <img src="{la1}" alt="line art">
    <img src="{la2}" alt="line art">
    <img src="{la3}" alt="line art">
    <img src="{la4}" alt="line art">
    <img src="{la5}" alt="line art">
    <img src="{la6}" alt="line art">
    <img src="{la7}" alt="line art">
    <img src="{la8}" alt="line art">
    <img src="{la9}" alt="line art">
    <img src="{la10}" alt="line art">
    <img src="{la11}" alt="line art">
    <img src="{la12}" alt="line art">
    <img src="{la13}" alt="line art"> 
</section>

<style>

    span {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 3rem;
        height: min-content;
        animation: FunnyLetters 3s both infinite;
        opacity: 0;
        cursor: none;
    }

    span:nth-of-type(1) { animation-delay: 0.1s; }
    span:nth-of-type(2) { animation-delay: 0.2s; }
    span:nth-of-type(3) { animation-delay: 0.3s; }
    span:nth-of-type(4) { animation-delay: 0.4s; }
    span:nth-of-type(5) { animation-delay: 0.5s; }
    span:nth-of-type(6) { animation-delay: 0.6s; }
    span:nth-of-type(7) { animation-delay: 0.7s; }
    span:nth-of-type(8) { animation-delay: 0.8s; }
    span:nth-of-type(9) { animation-delay: 0.9s; }
    span:nth-of-type(10) { animation-delay: 1s; }
    span:nth-of-type(11) { animation-delay: 1.1s; }
    span:nth-of-type(12) { animation-delay: 1.2s; }
    span:nth-of-type(13) { animation-delay: 1.3s; }
    span:nth-of-type(14) { animation-delay: 1.4s; }
    span:nth-of-type(15) { animation-delay: 1.5s; }
    span:nth-of-type(16) { animation-delay: 1.6s; }
    span:nth-of-type(17) { animation-delay: 1.7s; }
    span:nth-of-type(18) { animation-delay: 1.8s; }
    span:nth-of-type(19) { animation-delay: 1.9s; }
    span:nth-of-type(20) { animation-delay: 2s; }
    span:nth-of-type(21) { animation-delay: 2.1s; }
    span:nth-of-type(22) { animation-delay: 2.2s; }
    span:nth-of-type(23) { animation-delay: 2.3s; }
    span:nth-of-type(24) { animation-delay: 2.4s; }
    span:nth-of-type(25) { animation-delay: 2.5s; }
    span:nth-of-type(26) { animation-delay: 2.6s; }
    span:nth-of-type(27) { animation-delay: 2.7s; }
    span:nth-of-type(28) { animation-delay: 2.8s; }
    span:nth-of-type(29) { animation-delay: 2.9s; }
    span:nth-of-type(30) { animation-delay: 3s; }
    span:nth-of-type(31) { animation-delay: 3.1s; }
    span:nth-of-type(32) { animation-delay: 3.2s; }
    span:nth-of-type(33) { animation-delay: 3.3s; }
    span:nth-of-type(34) { animation-delay: 3.4s; }
    span:nth-of-type(35) { animation-delay: 3.5s; }
    span:nth-of-type(36) { animation-delay: 3.6s; }
    span:nth-of-type(37) { animation-delay: 3.7s; }
    span:nth-of-type(38) { animation-delay: 3.8s; }
    span:nth-of-type(39) { animation-delay: 3.9s; }
    span:nth-of-type(40) { animation-delay: 4s; }
    span:nth-of-type(41) { animation-delay: 4.1s; }
    span:nth-of-type(42) { animation-delay: 4.2s; }
    span:nth-of-type(43) { animation-delay: 4.3s; }

    .space {
        margin-left: 0.8rem;
    }

    .span-wrapper {
        display: flex;
        justify-content: center;  
        margin-block: 35vh;
        height: fit-content;
    }
    
    .img-wrapper {
        display: grid;
        grid-template-columns: repeat(6, 250px);
        grid-template-rows: repeat(14, 250px);
        padding-top: 35vh;
        width: 100vw;
        padding-inline: 2rem;
    }

    img {
        width: calc(sibling-index() * 50px);
        height: calc(sibling-index() * 50px);
        min-height: 200px;
        min-width: 200px;
    }

    img:nth-of-type(1) {
        animation: SvgOne 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 2/3;
        grid-row: 1/2;
    }

    img:nth-of-type(2) {
        animation: SvgTwo 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 5/7;
        grid-row: 2/3;
    }

    img:nth-of-type(3) {
        animation: SvgThree 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 2/3;
        grid-row: 3/4;
    }

    img:nth-of-type(4) {
        animation: SvgFour 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 3/4;
        grid-row: 4/5;
    }

    img:nth-of-type(5) {
        animation: SvgFive 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 5/7;
        grid-row: 5/6;
    }

    img:nth-of-type(6) {
        animation: SvgSix 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 2/3;
        grid-row: 6/7;
    }

    img:nth-of-type(7) {
        animation: SvgSeven 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 5/6;
        grid-row: 7/8;
    }

    img:nth-of-type(8) {
        animation: SvgEight 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 1/3;
        grid-row: 8/9;
    }

    img:nth-of-type(9) {
        animation: SvgNine 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 3/4;
        grid-row: 9/10;
    }

    img:nth-of-type(10) {
        animation: SvgTen 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 4/6;
        grid-row: 10/11;
    }

    img:nth-of-type(11) {
        animation: SvgEleven 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 1/3;
        grid-row: 11/12;
    }

    img:nth-of-type(12) {
        animation: SvgTwelve 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 4/6;
        grid-row: 12/13;
    }

    img:nth-of-type(13) {
        animation: SvgThirteen 0.5s ease-in both;
        animation-timeline: view();
        animation-range: entry cover 40%;
        grid-column: 2/5;
        grid-row: 13/14;
        margin-left: -100px;
    }

    @keyframes FunnyLetters {
        0% {
            transform: translateY(100%);
            text-decoration: none;
        }

        40% {
            transform: translateY(0%);
            opacity: 1;
        }

        60% {
            transform: translateY(0%);
            opacity: 1; 
        }
        
        100% {
            opacity: 0;
            transform: translateY(100%);
            text-decoration: none;
        }
    }

    @keyframes SvgOne {
        from {
            transform: translateX(200%);
            opacity: 0;
        }

        to {
            transform: translateX(0) rotateY(180deg);
            opacity: 1;
        }
    }

    @keyframes SvgTwo {
        from {
            scale: 0.5;
            transform: translateX(-200%);
            filter: blur(1rem);
        }

        to {
            scale: 1;
            transform: translateX(-0%);
            filter: blur(0);
        }
    }

    @keyframes SvgThree {
        from {
            scale: 0.5;
            rotate: 0;
            opacity: 0;
        }

        to {
            scale: 1;
            rotate: 2turn;
            opacity: 1;
        }
    }

    @keyframes SvgFour {
        from {
            transform: translateY(200%);
            opacity: 0;
            filter: blur(1rem);
        }

        to {
            transform: translateY(0%);
            opacity: 1;
            filter: blur(0);
        }
    }

    @keyframes SvgFive {
        from {
            transform: translateX(-400%);
            opacity: 0;
            scale: 0;
        }

        to {
            transform: translateX(0%);
            opacity: 1;
            scale: 1; 
        }
    }

    @keyframes SvgSix {
        from {
            transform: translateX(400%);
            opacity: 0;
            scale: 0;
            filter: blur(1rem);
            rotate: 0;
        }

        to {
            transform: translateX(0%);
            opacity: 1;
            scale: 1; 
            filter: blur(0rem);
            rotate: 1turn;
        }
    }

    @keyframes SvgSeven {
        from {
            margin-left: 200px;
            transform: rotateY(0deg);
            opacity: 0;
            scale: 0.5;
        }

        to {
            transform: rotateY(720deg);
            opacity: 1;
            scale: 1;
        }
    }

    @keyframes SvgEight {
        from {
            margin-left: -200px;
            transform: rotateZ(0deg);
            opacity: 0;
            scale: 0;
            filter: blur(2rem);
        }

        to {
            margin-left: 0px;
            transform: rotateZ(1080deg);
            opacity: 1;
            scale: 1;
            filter: blur(0rem);
        }
    }

    @keyframes SvgNine {
        0% {
            scale: 0;
            opacity: 0;
            transform: translateY(1000%);
            filter: blur(3rem);
        }

        70% {
            scale: 2;
            opacity: 1;
            transform: translateY(-100%);
            filter: blur(2rem);
        }

        100% {
            scale: 1;
            opacity: 1;
            transform: translateY(0%);
            filter: blur(0);
        }
    }

    @keyframes SvgTen {
        0% {
            transform: translate(-100vw, -100vh) rotate(500deg) scale(5);
            opacity: 0;
            filter: blur(20px);
        }
        50% {
            transform: translate(0, 0) rotate(-180deg) scale(0.5); /* Overshoot scale down */
            filter: blur(5px);
            opacity: 1;
        }
        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes SvgEleven {
        0% {
            transform: scale(0.01) rotateX(0deg);
            opacity: 0;
            filter: blur(5rem); 
        }
        30% {
            transform: scale(2.5) rotateX(360deg); 
            opacity: 1;
        }
        60% {
            transform: scale(0.8);
            filter: blur(0);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes SvgTwelve {
        0% {
            transform: translateX(500px) translateY(500px) rotate(0deg) scale(0); 
            opacity: 0;
        }
        25% {
            transform: translateX(-100px) translateY(100px) rotate(90deg) scale(1.5); 
            opacity: 1;
        }
        50% {
            transform: translateX(100px) translateY(-50px) rotate(-180deg) scale(0.2); 
        }
        75% {
            transform: translateX(-50px) translateY(20px) rotate(270deg) scale(0.6); 
        }
        90% {
            transform: translateX(0) translateY(0) rotate(-10deg) scale(1.1);
        }
        100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1); 
            opacity: 1;
        }
    }

    @keyframes SvgThirteen {
        0% {
            transform: translate(-50vw, 50vh) rotateZ(0deg) scale(0.1);
            opacity: 0;
            filter: blur(20px);
        }
        25% {
            transform: translate(30vw, -10vh) rotateZ(360deg) scale(1.5);
            opacity: 1;
            filter: blur(5px);
        }
        50% {
            transform: translate(-10vw, 20vh) rotateZ(-180deg) scale(0.8);
            filter: blur(10px);
        }
        75% {
            transform: translate(5vw, -5vh) rotateZ(540deg) scale(1.8);
            filter: blur(2px);
        }
        90% {
            transform: translate(-2vw, 2vh) rotateZ(-10deg) scale(0.9);
            filter: blur(0);
        }
        100% {
            transform: translate(0, 0) rotateZ(0deg) scale(1);
            opacity: 1;
        }
    }

</style>








