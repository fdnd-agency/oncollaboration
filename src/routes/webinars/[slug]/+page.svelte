<script>
     /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props()

    const webinar = data.webinar
</script>

<svelte:head>
    <title>Webinar {webinar.title}</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</svelte:head>

<!-- hier komt de nav bar -->
 <ul id="webinar-bread-crumb">
    <li><a href="/">home &rsaquo;</a></li>
    <li><a href="/webinars">Webinars &rsaquo;</a></li>
    <li><a href="/webinars/{webinar.slug}"> webinar details</a></li>
 </ul>

<section id="webinar-video">
    <video 
        controls 
        height="auto"
        poster='https://fdnd-agency.directus.app/assets/{webinar.thumbnail.id}'>
        <source src='https://fdnd-agency.directus.app/assets/{webinar.video}'>
        <track kind="captions">
    </video>
    <ul>
        <li>{webinar.date}</li>
        <li>{webinar.categories[0].avl_categories_id.name}</li>
    </ul>
    <h1>{webinar.title}</h1>

    <article class="description">
        <h2>Description</h2>
    </article>

    <details>
        <summary>Subtitles</summary>
    </details>
</section>

<section id="webinar-qna">
    <h3>Q&A</h3>
    <a href="ask a question" class="link-question">Ask a question</a>
    
    <h4>Comments:</h4>

    <article id="speaker">
        <picture>
            <img src='https://fdnd-agency.directus.app/assets/{webinar.thumbnail.id}' alt="{webinar.speaker}" width="200px">
        </picture>
        <a href="speaker">save speaker</a>
        <p>{webinar.speakers[0].avl_speakers_id.fullname}</p>
    </article>


    <!-- hier komen de comments -->
</section>

<!-- hier komt de footer -->

<!--  MARK: CSS-->

<style>
    ul{
        list-style: none;
        display: flex;
    }
    #webinar-bread-crumb{
        height: 2em;
        background-color: var(--primary-color-blue-light-1);
        padding-left: 0.6rem;
        @media (width >= 1023px){
            padding-left: 4.7rem;
        }
    }

    section a{
        text-decoration: none;
        color: var(--primary-color-blue-dark-2);
        background-color: var(--primary-color-true-aqua);
        padding: 0.8em;
        border-radius: var(--border-radius-medium);
    }

    li a{
        text-decoration: none;
        color: var(--primary-color-blue-dark-2);
    }

    #webinar-video{
        display: grid;
        gap: 1em;

        @media (width <= 1023px){
             place-items: center;
        }

        @media (width >= 1023px){
            grid-template-rows: 5rem 16rem 3rem;
            grid-template-columns: 60px 2fr 1fr 60px;
        }
    }
    #webinar-video ul{
        gap: 1em;

        @media (width >= 1023px){
            grid-column: 2 / 3;
            grid-row: 3 / 3;
        }
    }

    #webinar-video li{
        background-color: var(--primary-color-true-aqua);
        padding: 1em;
        text-align: center;
        color: var(--primary-color-blue-dark-2);
        align-self: center;

        border-radius: var(--border-radius-medium);
    }

    video {
        width: clamp(18.75rem, 80%, 50rem);

        @media (width >= 1023px){
            width: clamp(16rem, 100%, 55rem);
            height: 16rem;
            grid-row: 2 / 2;
            grid-column: 2 / 2;
        }
    }

    h1{
        font-size: clamp(1.5rem, 80%, var(--font-size-extra-large));
        line-height: 1.4;
        padding-left: 0.6rem;

        @media (width >= 1023px){
            grid-row: 1 / 1;
            grid-column: 2 / 5;
        }
    }

    .description{
        width: clamp(14rem, 63%, 30rem);

        @media (width >= 1023px){
            padding: 1rem;
            width: 100%;
            background-color: var(--primary-color-blue-light-2);

            grid-row: 2 / 2 ;
            grid-column: 3 / 4;

            border: solid black;

            border-radius: var(--border-radius-medium);
                @supports (corner-shape: scoop){
                    corner-shape: squircle;
                }
        }
    }

    h2{
        text-align: center;
    }

    details{
        background-color: var(--primary-color-blue-dark-3);
        width: clamp(14rem, 100%, 150rem);
        display: flex;
        justify-content: center;

        @media (width >= 1023px){
            grid-row: 5 / 6;
            grid-column: 2 / 4;
        }
    }

    summary{
            color: var(--neutral-color-lightest);
    }
    summary::marker{
            content: "";
    }

    h1, h2, h3, h4{
        color: var(--primary-color-blue-dark-2);
    }

    #webinar-qna{
        display: grid;
        padding-top: 1.5em;
        gap: 1em;

        @media (width <= 1023px){
            place-items: center;
        }
         @media (width >= 1023px){
            grid-template-rows: repeat(4, 3rem) 15rem;
            grid-template-columns: 60px 10rem 2fr 15rem 60px;
         }
    }

    h3{
        @media (width >= 1023px){
            grid-row: 1 / 1;
            grid-column: 2 / 5;
        }
    }

    #speaker{
        display: grid;
        place-items: center;
        gap: 1em;

        background-color: var(--primary-color-blue-dark-1);
        width: clamp(14rem, 63%, 30rem);

        @media (width >= 1023px){
            grid-column: 4 / 4;
            grid-row: 1 / 5;

            width: 100%;
            background-color: var(--primary-color-blue-dark-1);
        }
    }

    #speaker img{
            width: clamp(14rem, 100%, 30rem);
    }

    #speaker p{
            color: var(--neutral-color-lightest);
    }

    h4{
        @media (width >= 1023px){
            grid-column: 2 / 5;
            grid-row: 3 / 3;
        }
    }

    .link-question{
        text-align: center;
        align-self: start;
        border-radius: var(--border-radius-medium);
        @media (width >= 1023px){
            grid-column: 2 / 3;
            grid-row: 2 / 2;

            text-align: center;
            align-self: start;

            padding: 1em;
        }
    }
</style>