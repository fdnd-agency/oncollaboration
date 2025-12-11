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

<!-- hier is de cover van de comic -->
<section id="cover">
    <article>
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
        <img src="" alt=""/>
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
<style>
    @font-face {
        font-family: 'FF';
        src: url(/src/lib/assets/MouseMemoirs-Regular.ttf) format('truetype');
    }

    :root{
     --heading-font: 'FF';
     --heading-font-size: 6em;

     --body-font: 'Garamond';
    }

    #cover{
    height: 140vh;
    width: 99vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('src/lib/assets/kirby-krackle-background.svg');

    img {
        width: 30vw;
    }
    }

    h1{
        font-family: var(--heading-font);
        font-size: var(--heading-font-size);
        width: 9ch;
        color: yellow;
    }

    #subtext {
        width: max-content;
        background-color: blue;
    }

    h2{
        color: white;
        letter-spacing: 0.1em;
    }

    #page-1{
        display: flex;
        justify-content: space-around;

        background-image: url('src/lib/assets/Vector 9.svg');
        height: 120vh;
        width: 99vw;
        padding: 2em 0;
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
            border: solid 0.2em red;
            padding: 0.4em;
        }
    }
</style>