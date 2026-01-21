<script>
    import doctorsavif from "$lib/assets/doctors.avif";
    import doctorswebp from "$lib/assets/doctors.webp";
    import doctorspng from "$lib/assets/doctors.png";
    import Link from "$lib/atoms/homepage-button.svelte";
    import Article from "$lib/organisms/article.svelte";
    import Carrousel from "$lib/organisms/logo-carrousel.svelte";

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
    const infowebinars = data.webinars;
    const infocontourings = data.contourings;
    const infopartnerships = data.partnerships;
    const infodoctor = data.doctorinfo;
    const infodoctors = data.doctors;

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
        <Link class="link-about link-styling" href="/more">more about oncollaboration</Link>
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

    <Carrousel data={data} />

    <section class="homepage-speakers home-mobile-styling">
        <h2 class="header-speakers">{infodoctor.heading}</h2>
        <p class="info-speakers">{infodoctor.text}</p>

        <section class="homepage-doctors-outlay">
            {#each infodoctors as doctor} 
                <article class="homepage-doctor-card">
                    <picture class="photo-doctor">
                        <source srcSet={`https://fdnd-agency.directus.app/assets/${doctor.photo}?format=avif`} type="image/avif"/>
                        <source srcSet={`https://fdnd-agency.directus.app/assets/${doctor.photo}?format=webp`} type="image/webp"/>
                        <img class="photo-doctor" src={`https://fdnd-agency.directus.app/assets/${doctor.photo}`} alt="{doctor.name}" loading="lazy"/>
                      </picture>                   
                    <h3 class="name-doctor">{doctor.name}</h3>
                    <p class="function-doctor">{doctor.role}</p>
                    
                    <Link class="view-doctor" href="/speakers">view speakers</Link>
                </article>
            {/each}
        </section>
    </section>
</main>

<style>

    :global(.link-styling) {
            width: clamp(16.25em, 100%, 20.625em);
            height: 2.5em;
    }

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

    :global(.link-about) {
            margin-top: 2.25em;
            margin-bottom: 2.5em;
        
            @media ( min-width: 56.25em ) {
                grid-column: 1/2;
                align-self: self-end;
                margin: 0;
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
        padding-top: 2rem;

        @media ( min-width: 56.25em ) {
            width: 100%;
            align-items: start;
            padding-top: 4rem;
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

    .homepage-speakers {
        padding-block: 2rem;
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
            padding-block: 4rem;
        }

        @media (min-width: 75em ) {
            grid-template-columns: 1fr 2fr;  
            width: 78.125rem;
            column-gap: 4rem;
        }
    }

    .header-speakers {
        height: fit-content;
    }

    .homepage-doctors-outlay {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 37.5rem;
        gap: 1rem;
        padding-top: 2rem;

        @media ( min-width: 56.25em ) {
            align-items: flex-end;
            justify-content: flex-end;
            padding: 0rem;
            gap: 0.5rem;
            grid-column: 2/3;
            grid-row: 1/3;
        }

        @media (min-width: 75em ) {
            max-width: 100%;
        }
    }

    .header-speakers {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        @media ( min-width: 56.25em ) {
            margin-bottom: 0;
        }

        @media (min-width: 75em ) {
            max-width: 22rem;
        }
    }

    .info-speakers {

        @media (min-width: 75em ) {
            max-width: 22rem;
        }
    }

    .homepage-doctor-card {
        display: flex;
        flex-direction: column;
        background: var(--primary-color-blue-light-1);
        width: 100%; 
        max-width: 12.5rem;
        padding: 0.75rem;
        gap: 1rem; 
        border-radius: 18px;
        border: 2px solid var(--primary-color-blue-dark-2);

        @media ( min-width: 75em ) {
            max-width: 10.625rem;
        }
    }

    .photo-doctor {
        object-position: center top;
        background: var(--neutral-color-lightest);
        object-fit: cover;
        overflow: hidden;
        aspect-ratio: 4 / 3; 
        width: 100%;
        border-radius: 18px;
    }

    .name-doctor {
        font-size: 1.25rem;
        line-height: 1.1;
        text-wrap: balance; 
        width: 100%;
        overflow: hidden;
        height: 4.125rem; 
    }

    .function-doctor {
        overflow: hidden;
        white-space: nowrap;   
    }

    :global(.view-doctor) {
        width: fit-content;
        height: fit-content;
        padding: 0.4rem;
    }

</style>    