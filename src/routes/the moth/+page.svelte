<script>
    import { onMount } from "svelte";
    import gsap from "gsap/dist/gsap";
</script>

<section id="the-moth">
    <section>
        <h1>MOTH CORE</h1>
        <img src="src/lib/assets/moth.svg" alt="">
    </section>

    <section id="cocoon">
        <h2>EXIT</h2>
        <img src="src/lib/assets/Group 6-1.svg" alt="">
        <img src="src/lib/assets/Group 6.svg" alt="">   
        <h3>COCOON</h3>
    </section>

    <section>
        <h2 id="fly">FLY</h2>
        <img src="src/lib/assets/Group 4.svg" alt="">
    </section>
</section>

<style>
    @font-face {
        font-family: "jersey25";
        src: url(/src/lib/assets/Jersey25-Regular.ttf) format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: "krona";
        src: url(/src/lib/assets/KronaOne-Regular.ttf) format("truetype");
        font-weight: normal;
    }

    :root {
        /* fonts */
        --font-jersey25: "jersey25", sans-serif;
        --font-krona: "krona", sans-serif;

        /* colors */
        --light-green: hsl(93 61% 57%);
        --dark-green: hsl(140 27% 34%);

        --dark-purple: hsl(249 29% 14%);
        --true-purple: hsl(269 32% 46%);
        --light-purple: hsl(268 58% 60%);

        --background: hsl(0 0% 12%);
    }

    #the-moth {
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        text-align: center;
    }

    h1, #fly {
        font-family: var(--font-krona);
    }

    h1 {
        color: var(--light-purple);
    }

    #fly {
        color: transparent;
        background: 
        linear-gradient(
            var(--light-green) 25%,
            var(--true-purple),
            var(--dark-green) 75%
        );
        background-clip: text;
        text-align: center;
    }

    h2, h3 {
        font-family: var(--font-jersey25);
    }

    h2 {
        color: var(--light-green);
    }

    h3 {
        color: var(--background);
        text-shadow: 
            1px 1px 1px var(--light-green),
            -1px -1px 1px var(--light-green),
            1px -1px 1px var(--light-green),
            -1px 1px 1px var(--light-green);
    }
</style>