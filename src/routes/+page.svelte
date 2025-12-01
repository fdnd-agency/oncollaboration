<script>

    import { onMount } from 'svelte';
    import doctorsavif from "$lib/assets/doctors.avif";
    import doctorswebp from "$lib/assets/doctors.webp";
    import doctorspng from "$lib/assets/doctors.png";
    import Link from "$lib/atoms/homepage-button.svelte";
    import Header from "$lib/organisms/header.svelte";
    import Article from "$lib/organisms/article.svelte";

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
    const infowebinars = data.webinars;
    const infocontourings = data.contourings;
    const infopartnerships = data.partnerships;
    const infologos = data.logos;
    const infodoctor = data.doctorinfo;
    const infodoctors = data.doctors;


    onMount(() => {
        for (const carousel of document.querySelectorAll('.homepage-carrousel-content')) {
            const { animationName } = window.getComputedStyle(carousel);

        if (animationName && animationName !== 'none') {

        for (const logo of Array.from(carousel.children)) {
            carousel.appendChild(logo.cloneNode(true));
        }}}
    });
</script>

<svelte:head> 
    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
        }

        .about {
            margin-top: 2.25em;
            margin-bottom: 2.5em;
        
            @media ( min-width: 56.25em ) {
                grid-column: 1/2;
                align-self: self-end;
                margin: 0;
            }
        }
        
    </style>
</svelte:head>


<main class="overlay">

    <Header></Header>

    <article class="homepage-about home-mobile-styling">
        <h1 class="header-about">{infoabout.heading}</h1>
        <p class="info-about">{infoabout.text}</p>
        <Link class="about" href="/more">more about oncollaboration</Link>
         <picture class="img-about" >
            <source srcset="{ doctorsavif }" type="image/avif">
            <source srcset="{ doctorswebp }" type="image/webp">
            <img class="img-about" src="{ doctorspng }" alt="group of doctors" loading="lazy">
         </picture>
    </article>

    <section class="homepage-webinars-contourings">
        <Article
            title={infowebinars.heading}
            description={infowebinars.text} 
            linkText="more about webinars"
            href="/webinars"
        />
        <Article
            title={infocontourings.heading}
            description={infocontourings.text}
            linkText="more about contourings"
            href="/contourings"
        />
    </section>

    <article class="homepage-partnerships home-mobile-styling">
        <h2 class="header-partnerships">{infopartnerships.heading}</h2>
        <p class="info-partnerships">{infopartnerships.text}</p>
    </article>

    <section class="homepage-carrousel">
        <div class="homepage-carrousel-content">
            {#each infologos as logo}
                <picture class="logos-partnerships">
                    <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=avif`} type="image/avif"/>
                    <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=webp`} type="image/webp"/>
                    <img src={`https://fdnd-agency.directus.app/assets/${logo.logo}`} alt={logo.name} loading="lazy"/>
                </picture>
            {/each}
        </div>
    </section>

    <section class="homepage-speakers home-mobile-styling">
        <h2 class="header-speakers">{infodoctor.heading}</h2>
        <p class="info-speakers">{infodoctor.text}</p>

        <section class="homepage-doctors-outlay">
            {#each infodoctors as doctor} 
                <article class="homepage-all-doctors">
                    <picture class="photo-doctor">
                        <source srcSet={`https://fdnd-agency.directus.app/assets/${doctor.photo}?format=avif`} type="image/avif"/>
                        <source srcSet={`https://fdnd-agency.directus.app/assets/${doctor.photo}?format=webp`} type="image/webp"/>
                        <img class="photo-doctor" src={`https://fdnd-agency.directus.app/assets/${doctor.photo}`} alt="{doctor.name}" loading="lazy"/>
                      </picture>                   
                      <h3 class="name-doctor">{doctor.name}</h3>
                    <p class="function-doctor">{doctor.role}</p>
                </article>
            {/each}
        </section>
    </section>
</main>

<style>

    .overlay {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h1, h2 {
        font-size: var(--font-size-extra-large);
    }

    p {
        font-weight: var(--secondary-font-weight);
    }

    .home-mobile-styling {
        padding-inline: 1em;
    }

    .homepage-about {
        padding-top: 4em;
        padding-bottom: 2.5em;

        @media ( min-width: 56.25em ) {
            display: grid;
            grid-template-columns: 0.8fr 1fr;
            grid-template-rows: 18.5em 13.75em 3.125em;
            column-gap: 2em;
            padding-inline: 2em;
        }

        @media ( min-width: 62.5em ) {
            grid-template-rows: 12.375em 12.625em 4.125em;

        }

        @media ( min-width: 75em ) {
            grid-template-columns: 30em 37.5em;
            justify-content: center;
            column-gap: 6em;
        }
    }

    .header-about {
        max-width: 37.5rem;  

        @media ( min-width: 56.25em ) {
            max-width: 30rem;
        }
    }

    .info-about {
        max-width: 37.5rem;
        margin-top: 1em;
        padding-right: 1rem;

        @media ( min-width: 56.25em ) {
            grid-column: 1/2;
            max-width: 30rem;
            margin-top: 0;
            padding-right: 0rem;
        }
    }


    .img-about {
        width: clamp(16.25em, 100%, 37.5em);
        border-radius: 1.563em;

        @media ( min-width: 56.25em ) {
            grid-column: 2/3;
            grid-row: 2/3;
            align-self: center;
        }
    }

    .homepage-webinars-contourings {
        display: flex;
        flex-direction: column;

        @media ( min-width: 37.5em ) {
            gap: 2em;
        }

        @media ( min-width: 56.25em ) {
            justify-content: center;
            flex-direction: row;
            background-color: var(--primary-color-blue-dark-2);
            width: 100%;
            padding-block: 5em;
            padding-inline: 2em;
            gap: 7em;
        }

        @media ( min-width: 75em ) {
            gap: 18.7em;
        }
    }

    .homepage-partnerships {

        @media ( min-width: 56.25em ) {
            width: 100%;
            align-items: start;
            padding-inline: 2rem;
        }

        @media ( min-width: 75em ) {
            position: relative;
            width: 78.125rem;
        }
    }

    .header-partnerships {

        @media ( min-width: 75em ) {
            width: 48rem;
            text-align: start;        
        }
    }


    .info-partnerships {
        margin-top: 2rem;
        max-width: 37.5rem;
        padding-right: 1rem;

        @media ( min-width: 56.25em ) {
            max-width: 48rem;
        }
    }

    .homepage-carrousel {
        display: grid;
        position: relative;
        align-content: center;
        max-width: 73.5rem;
        row-gap: 2rem;
        overflow: hidden;
        padding-block: 1rem;

        @media ( min-width: 56.25em ) {
            padding-block: 2rem;
        }
    }

    .homepage-carrousel-content {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;

        @supports (animation: scroll 18s linear infinite) {
            width: max-content;
            animation: scroll 18s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
            overflow-x: auto;
            scroll-behavior: smooth;
        }    
    }

    .homepage-carrousel-content:hover {
        animation-play-state: paused;
    }

    .logos-partnerships {
        display: flex;
        align-items: center;
        object-fit: contain;
        flex-shrink: 0; 
        margin-left: 2rem;
    }

    .homepage-speakers {
        padding-top: 2rem;
        max-width: 37.5em;

        @media ( min-width: 37.5em ) {
            border-radius: 1rem;
        }

        @media ( min-width: 56.25em ) {
            display: grid;
            grid-template-columns: 0.7fr 1fr;
            grid-template-rows: 0.2fr 1fr;
            max-width: 100%;
            padding-inline: 2rem;
        }

        @media (min-width: 75em ) {
            grid-template-columns: 30em 37.5em;
            column-gap: 6em;
        }
    }

    .homepage-doctors-outlay {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 600px;
        gap: 1rem;
        margin-top: 2rem;
        padding-top: 2em;
        padding-bottom: 4em;

        @media ( min-width: 56.25em ) {
            padding-top: 0;
            grid-column: 2/3;
            grid-row: 1/3;
        }
    }

        .header-speakers {
            display: flex;
            align-items: center;
        }

    .info-speakers {
        padding-right: 1rem;

        @media ( min-width: 56.25em ) {
            grid-column: 1/2;
        }
    }

    .homepage-all-doctors {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--neutral-color-lightest);
        border: 3px solid var(--primary-color-blue-dark-2);
        border-radius: 0.6rem;
        width: 200px;
        height: 250px;
        padding: 0.5rem;
    }

    .photo-doctor {
        object-fit: cover;
        height: 150px;
        width: 150px;
        overflow: hidden;
        border-radius: 100px;
    }

    .name-doctor {
        font-size: var(--font-size-small);
        background-color: var(--primary-color-blue-light-1);
        text-align: center;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 0.6rem;
        margin-top: -1.8rem;
        margin-bottom: 0.5rem;
    }

    @keyframes scroll {
        0% {  transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

</style>    