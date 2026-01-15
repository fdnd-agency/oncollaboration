<script>

    import doctorsavif from "$lib/assets/doctors.avif";
    import doctorswebp from "$lib/assets/doctors.webp";
    import doctorspng from "$lib/assets/doctors.png";
    import Link from "$lib/atoms/homepage-button.svelte";
    import Header from "$lib/organisms/header.svelte";
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
                    <a href="/" class="view-doctor">view doctor <svg class="arrow" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.8125 0.21875C6.9375 0.0625 7.1875 0.0625 7.34375 0.21875L13.875 6.75C14.0312 6.90625 14.0312 7.125 13.875 7.28125L7.34375 13.8125C7.1875 13.9688 6.9375 13.9688 6.8125 13.8125L6.1875 13.2188C6.03125 13.0625 6.03125 12.8125 6.1875 12.6875L11.0312 7.8125H0.375C0.15625 7.8125 0 7.65625 0 7.4375V6.5625C0 6.375 0.15625 6.1875 0.375 6.1875H11.0312L6.1875 1.34375C6.03125 1.21875 6.03125 0.96875 6.1875 0.8125L6.8125 0.21875Z" fill="currentColor"/>
                        </svg>
                    </a>
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
        padding-top: 2rem;

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
        margin-bottom: 2rem;
    }

    .homepage-doctor-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: var(--primary-color-blue-light-1);
        width: 100%; 
        max-width: 200px;
        height: 310px;
        padding: 0.75rem;
        gap: 1rem;
        border-radius: 18px;
        border: 2px solid var(--primary-color-blue-dark-2);
    }

    .photo-doctor {
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
        width: 100%;
        overflow: hidden;
        margin-top: 0.5rem;
    }

    .function-doctor {
        overflow: hidden;
    }

    .view-doctor {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        width: fit-content;
        height: 2rem;
        padding-inline: 0.5rem;
        border-radius: 0.5rem;
        background: var(--primary-color-aqua-dark-3);
        color: var(--primary-color-blue-dark-2);

        svg {
            fill: var(--primary-color-blue-dark-2);
        }
    }

</style>    