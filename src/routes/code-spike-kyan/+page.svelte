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
    }

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
        grid-template-rows: repeat(14, 350px);
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
        grid-column: 1/2;
        grid-row: 3/4;
    }

    img:nth-of-type(4) {
        grid-column: 3/4;
        grid-row: 4/5;
    }

    img:nth-of-type(5) {
        grid-column: 5/7;
        grid-row: 5/6;
    }

    img:nth-of-type(6) {
        grid-column: 2/3;
        grid-row: 6/7;
    }

    img:nth-of-type(7) {
        grid-column: 5/6;
        grid-row: 7/8;
    }

    img:nth-of-type(8) {
        grid-column: 1/3;
        grid-row: 8/9;
    }

    img:nth-of-type(9) {
        grid-column: 3/4;
        grid-row: 9/10;
    }

    img:nth-of-type(10) {
        grid-column: 4/6;
        grid-row: 10/11;
    }

    img:nth-of-type(11) {
        grid-column: 1/3;
        grid-row: 11/12;
    }

    img:nth-of-type(12) {
        grid-column: 4/6;
        grid-row: 12/13;
    }

    img:nth-of-type(13) {
        grid-column: 2/5;
        grid-row: 13/14;
    }

    @keyframes FunnyLetters {
        from {
            rotate: 0deg;
        }

        to {
            rotate: 1turn;
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
</style>








