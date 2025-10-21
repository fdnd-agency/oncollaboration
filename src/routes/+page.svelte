<script>

    import { onMount } from 'svelte';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
    const infowebinars = data.webinars;
    const infocontourings = data.contourings;
    const infopartnerships = data.partnerships;
    const infologos = data.logos;


    onMount(() => {
    const slide = document.querySelector('.logos-slide');
    if (!slide) return;

    const totalWidth = slide.scrollWidth / 2; // Half because logos are duplicated
    let x = 0;
    const speed = 0.5;

    function step() {
      x -= speed;
      if (Math.abs(x) >= totalWidth) x = 0;
      slide.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(step);
    }

    setTimeout(() => requestAnimationFrame(step), 500);
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
        
    </style>
</svelte:head>


<main class="overlay">
<article class="homepage-about home-mobile-styling">
    <h1 class="header-about">{infoabout.heading}</h1>
    <p class="info-about">{infoabout.text}</p>
    <a class="button-style link-homepage-about" href="/about">More about oncollaboration<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.864 10.4C11.024 10.0587 11.1787 9.76 11.328 9.504C11.488 9.248 11.6427 9.03467 11.792 8.864H2.464V8.192H11.792C11.6427 8.01067 11.488 7.792 11.328 7.536C11.1787 7.28 11.024 6.98667 10.864 6.656H11.424C12.096 7.43467 12.8 8.01067 13.536 8.384V8.672C12.8 9.03467 12.096 9.61067 11.424 10.4H10.864Z" fill="#00193F"/>
        </svg>
    </a>
     <picture class="img-about" >
        <source srcset="src/lib/assets/doctors.avif" type="image/avif">
        <source srcset="src/lib/assets/doctors.webp" type="image/webp">
        <img class="img-about" src="src/lib/assets/doctors.png" alt="group of doctors" loading="lazy">
     </picture>
</article>

<section class="homepage-webinars-contourings">
    <article class="homepage-webinars home-mobile-styling">
        <h2 class="header-webinars-contourings">{infowebinars.heading}</h2>
        <p class="info-webinars-contourings">{infowebinars.text}</p>
        <a class="button-style link-webinars-contourings" href="/webinars">More about webinars<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M10.864 10.4C11.024 10.0587 11.1787 9.76 11.328 9.504C11.488 9.248 11.6427 9.03467 11.792 8.864H2.464V8.192H11.792C11.6427 8.01067 11.488 7.792 11.328 7.536C11.1787 7.28 11.024 6.98667 10.864 6.656H11.424C12.096 7.43467 12.8 8.01067 13.536 8.384V8.672C12.8 9.03467 12.096 9.61067 11.424 10.4H10.864Z" fill="#00193F"/>
           </svg>
        </a>
    </article>
    <article class="homepage-contourings home-mobile-styling">
        <h2 class="header-webinars-contourings">{infocontourings.heading}</h2>
        <p class="info-webinars-contourings">{infocontourings.text}</p>
        <a class="button-style link-webinars-contourings" href="/contourings">More about contourings<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.864 10.4C11.024 10.0587 11.1787 9.76 11.328 9.504C11.488 9.248 11.6427 9.03467 11.792 8.864H2.464V8.192H11.792C11.6427 8.01067 11.488 7.792 11.328 7.536C11.1787 7.28 11.024 6.98667 10.864 6.656H11.424C12.096 7.43467 12.8 8.01067 13.536 8.384V8.672C12.8 9.03467 12.096 9.61067 11.424 10.4H10.864Z" fill="#00193F"/>
            </svg>
        </a>
    </article>
</section>

<article class="homepage-partnerships home-mobile-styling">
    <h2 class="header-partnerships">{infopartnerships.heading}</h2>
    <p class="info-partnerships">{infopartnerships.text}</p>
</article>

    <div class="logo-carrousel">
        <div class="logos-slide">
            {#each infologos as logo}
            <picture class="logos-partnerships">
                <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=avif`} type="image/avif"/>
                <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=webp`} type="image/webp"/>
                <img src={`https://fdnd-agency.directus.app/assets/${logo.logo}`} alt={logo.name} loading="lazy"/>
            </picture>
            {/each}
            {#each infologos as logo}
            <picture class="logos-partnerships">
                <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=avif`} type="image/avif"/>
                <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=webp`} type="image/webp"/>
                <img src={`https://fdnd-agency.directus.app/assets/${logo.logo}`} alt={logo.name} loading="lazy"/>
            </picture>
            {/each}
        </div>
    </div>
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

    .link-homepage-about {
        margin-top: 2.25em;
        margin-bottom: 2.5em;
        
        @media ( min-width: 56.25em ) {
            grid-column: 1/2;
            align-self: self-end;
            margin: 0;
        }
    }

    .button-style {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color-blue-dark-2);
        background-color: var(--primary-color-aqua-dark-3);
        width: clamp(16.25em, 100%, 20.625em);
        height: 2.5em;
        text-decoration: none;
        gap: 0.25em;
        border-radius: 0.5em;
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
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media ( min-width: 37.5em ) {
            gap: 2em;
        }

        @media ( min-width: 56.25em ) {
            flex-direction: row;
            background-color: var(--primary-color-blue-dark-2);
            padding-block: 5em;
            padding-inline: 2em;
            gap: 7em;
        }

        @media ( min-width: 75em ) {
            gap: 18.7em;
        }
    }

    .homepage-webinars, .homepage-contourings  {
        align-items: flex-start;
        max-width: 37.5rem;
        margin-bottom: 2.5rem;
        padding-bottom: 2.5rem;
        background-color: var(--primary-color-blue-light-1);

        @media ( min-width: 37.5em ) {
            border-radius: 1em;
        }

        @media ( min-width: 56.25em ) {
            padding-inline: 1.5em;
        }

        @media ( min-width: 65em ) {
            padding-inline: 3em;
            max-width: 27em;
        }
    }

    .header-webinars-contourings, .info-webinars-contourings, .link-webinars-contourings, .header-partnerships {
        margin-top: 2rem;
    }

    .info-webinars-contourings {
        padding-right: 1rem;
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

    .logo-carrousel {
        background-color: var(--primary-color-blue-light-1);
        overflow: hidden;
        margin-top: 2rem;
        padding-block: 2rem;
    }

    .logos-slide {
        display: flex;
        width: max-content; 
        gap: 5rem;
    }

    .logos-partnerships {
        display: flex;
        align-items: center;
        object-fit: contain;
        flex-shrink: 0; 
    }

</style>    