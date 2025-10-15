<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
    const infowebinars = data.webinars;
    const infocontourings = data.contourings;
</script>

<article class="homepage-about home-mobile-styling">
    <h1 class="header-about">{infoabout.heading}</h1>
    <p class="info-about">{infoabout.text}</p>
    <a class="button-style link-homepage-about" href="/about">More about oncollaboration<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.864 10.4C11.024 10.0587 11.1787 9.76 11.328 9.504C11.488 9.248 11.6427 9.03467 11.792 8.864H2.464V8.192H11.792C11.6427 8.01067 11.488 7.792 11.328 7.536C11.1787 7.28 11.024 6.98667 10.864 6.656H11.424C12.096 7.43467 12.8 8.01067 13.536 8.384V8.672C12.8 9.03467 12.096 9.61067 11.424 10.4H10.864Z" fill="#00193F"/>
        </svg>
    </a>
     <picture class="img-about" >
        <source srcset="/images/doctors.avif" type="image/avif">
        <source srcset="/images/doctors.webp" type="image/webp">
        <img class="img-about" src="/images/doctors.png" alt="group of doctors" loading="lazy">
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


<style>

    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

    .home-mobile-styling {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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

        @media ( min-width: 56.25em) {
            grid-column: 1/2;
            max-width: 30rem;
            margin-top: 0;
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
        width: clamp(16.25em, 100%, 37.5em);
        height: 2.5em;
        text-decoration: none;
        gap: 0.25em;
        border-radius: 0.5em;

        @media ( min-width: 56.25em ) {
            max-width: 20.625em;
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
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media ( min-width: 65em ) {
            flex-direction: row;
            background-color: var(--primary-color-blue-dark-2);
            padding-block: 5em;
            padding-inline: 2em;
            gap: 7em;

        }
    }

    .homepage-webinars, .homepage-contourings  {
        max-width: 30.25em;
        padding-bottom: 2.5em;
        background-color: var(--primary-color-blue-light-1);

        @media ( min-width: 65em ) {
            align-items: flex-start;
            padding-inline: 3em;
            border-radius: 1em;
        }
    }

    .header-webinars-contourings {
        margin-top: 2rem;
    }
    
    .info-webinars-contourings, .link-webinars-contourings {
        margin-top: 1rem;
    }


        


</style>    