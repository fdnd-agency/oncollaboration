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

<h1>Disastrous line-art scroll driven animation</h1>

<section>
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

    h1 {
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
        margin-top: 10rem;
        margin-bottom: 30rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(20, 1fr);
        height: 600vh;
    }

    img {
        animation-timeline: view();
    }

    img:nth-of-type(1) {
        grid-column: 1/2;
        grid-row: 2/3;
    }
</style>








