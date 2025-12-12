<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    
</script>

<svelte:head>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</svelte:head>

<main>
    <!-- hier is de cover van de comic -->
    <section>
        <article id="cover">
            <!-- Hier komt de hoofdtekst: Fantastic Four -->
            <h1>Fantastic Four</h1>
            <!-- Hier komt de subtekst: the Doom of -->
            <article id="subtext">
                <h2>the Doom of</h2>
                <!-- hier komt de subtekst: Silver Surfer -->
                <h2>Silver Surfer</h2>
                <!-- Hier komt de image van de silver surfer-->
            </article>
            <img   
            src="src/lib/assets/surfer-front-facing.png" 
            alt="Silver Surfer slowly flies towards you. Not knowing his doom is already sealed he flies
            throughout the red crackling cosmos."
            >
        </article>
    </section>
    <!-- hier is de eerste page -->
    <section id="page-1">
        <article id="panel-1">
            <p>After freeing myself of my shackles that bound me to earth
            I have now roamed the cosmos for seven earth months.
            </p>
            <img src="src/lib/assets/surfer-facing-right.png" alt=""/>
        </article>
        <article id="panel-2">
            <p>Though after such time of solitude one tends to yearn
                for the warmth of companionship. My time on earth left
                me with ties not so easily broken like the bonds that held me.
            </p>
            <img src="" alt=""/>
        </article>
        <article id="panel-3">
            <p>Though I had the blessing of my new friends: The Fantastic Four
                to roam the cosmos freely. I cannot help but feel a duty to return.
                A duty to protect those I care for. 
            </p>
            <img src="" alt=""/>
        </article>
    </section>
    <!-- hier is pagina twee -->
    <section id="page-2">
        <div class="triangle tri-1"></div>
        <div class="triangle tri-2"></div>
        <div class="circle"></div>
        <div class="triangle tri-3"></div>
        <div class="triangle tri-4"></div>
    </section>
</main>
<style>
    @font-face {
        font-family: 'FF';
        src: url(/src/lib/assets/MouseMemoirs-Regular.ttf) format('truetype');
    }

    :root{
     --heading-font: 'FF';
     --heading-font-size: 6em;
     
     --body-font: 'Garamond';
     
     --comic-yellow: hsl(58 100% 47%);
     --comic-red: hsl(9 73% 38%);
     --comic-blue: hsl(219 100% 51%);
     --comic-dark-blue: hsl(219 100% 23%);
     --comic-white: hsl(58 100% 95%);
    }
    /* hier defineer ik de keyframes */

    /* dit is voor het groeien van de Silver Surfer */
    @keyframes grow-surfer {
        from { transform: scale(.7); }
        to { transform: scale(1.4); }
    }


    @keyframes move {
        from {
            /* begin aan de linkerkant van het scherm */
            transform: translateX(-20vw);
        }
        to {
            /* ga naar de rechterkant van het scherm */
            transform: translateX(100vw);
            display: none;
        }
    }

    @keyframes reveal {
        0% {
            transform: rotateY(90deg);
        }

        100% {
            transform: rotateY(0deg);
        }
    }

    #cover{
        height: 150vh;
        width: 99vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('../lib/assets/kirby-krackle-background.svg');
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* Is de shorthand voor scroll-timeline-name en de scroll-timeline-axis.
        page-scroll is dus een benaming van deze specifieke timeline en 
        de axis waarop het scrollt is een block. */
	    scroll-timeline: --page-scroll block;
        
    
        img{
            transform: scale(.7);
            animation: grow-surfer auto linear;
            /* animation timeline: scroll zorgt 
            ervoor dat je de voortgang van de scroll container ziet. */
            animation-timeline: scroll(root); 

        }

        h1{
            font-family: var(--heading-font);
            font-size: var(--heading-font-size);
            text-align: end;
            
            position: relative;
            left: -.5em;
            
            width: 9ch;
            
            color: var(--comic-yellow);
            text-shadow: -0.08em 0.1em var(--comic-red);
            -webkit-text-stroke: 1px black;
        }
        
        #subtext {
            width: max-content;
            background-image: 
            repeating-linear-gradient(30deg, var(--comic-blue), var(--comic-dark-blue), var(--comic-blue) 2%), 
            repeating-linear-gradient(-60deg, var(--comic-blue), var(--comic-dark-blue), var(--comic-blue) 2%), 
            linear-gradient(30deg, var(--comic-dark-blue), var(--comic-blue));
            background-blend-mode: color-dodge;
            filter: contrast(1);
            justify-self: center;
            
            width: 18em;
        }
        
        h2{
            color: white;
            letter-spacing: 0.1em;
            
            text-align: center;
        }
    }
    
    #page-1{
        display: flex;
        justify-content: space-around;
        
        background-image: url('../lib/assets/Vector 9.svg');
        background-repeat: no-repeat;
        height: 120vh;
        width: 99vw;
        padding: 2em 0;

        /* position: sticky;
        scroll-snap-type: x mandatory; */
    }

    #panel-1, #panel-2, #panel-3{
        border: 1em solid white;
        margin: 1em;
        padding: 1em;

        background-color: transparent;

        height: auto;
        width: 33vw;

        p{
            font-family: var(--body-font);
            font-weight: bold;
            color: black;
            background-color: yellow;
            box-shadow: 0.4em 0.4em red;
            padding: 0.4em;

            animation: reveal ease-in-out forwards;
            animation-timeline: view(y);
            
        }
    }

    #panel-1 img {
        width: 100%;
        height: auto;
        margin-top: 1em;

        animation: move linear forwards;
        /* inplaats van scroll() gebruik ik hier view() zodat de animatie afspeelt op basis van de viewport. */
        animation-timeline: view(y);
    }

    #page-2 {
        height: 100vh;
        width: 99vw;
        background-color: black;
        position: sticky;
        overflow: hidden;
    }

    .triangle {
        height: 10em;
        width: 10em;
        border-radius: 25%;
        position: absolute;
    }

    .circle {
        height: 10em;
        width: 10em;
        border-radius: 50%;
        background-color: var(--comic-white);
        position: absolute;
        top: 40vh;
        left: 45vw;
    }

    .tri-1, .tri-2, .tri-3, .tri-4 {
        background-color: var(--comic-white);
        corner-shape: bevel;
    }

    .tri-1 {
        top: 10vh;
        left: 10vw;
    }
    .tri-2 {
        top: 70vh;
        right: 10vw;
    }
    .tri-3 {
        bottom: 10vh;
        left: 10vw;
    }
    .tri-4 {
        top: 10vh;
        right: 10vw;
    }
</style>