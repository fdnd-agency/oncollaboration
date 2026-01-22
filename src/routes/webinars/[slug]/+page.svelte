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
</section>

<!--  MARK: CSS-->

<style>

ul {
    display: flex;
    list-style: none;
}

#webinar-bread-crumb {
    height: 2em;
    padding-left: 0.6rem;
    background-color: var(--primary-color-blue-light-1);

    @media (width >= 1023px) {
        padding-left: 4.7rem;
    }
}

section a {
    padding: 0.8em;
    background-color: var(--primary-color-true-aqua);
    border-radius: var(--border-radius-medium);
    color: var(--primary-color-blue-dark-2);
    text-decoration: none;
}

li a {
    color: var(--primary-color-blue-dark-2);
    text-decoration: none;
}

#webinar-video {
    display: grid;
    gap: 1em;

    @media (width <= 1023px) {
        place-items: center;
    }

    @media (width >= 1023px) {
        grid-template-columns: 60px 2fr 1fr 60px;
        grid-template-rows: 5rem 16rem 3rem;
    }
}

#webinar-video ul {
    gap: 1em;

    @media (width >= 1023px) {
        grid-column: 2 / 3;
        grid-row: 3 / 3;
    }
}

#webinar-video li {
    align-self: center;
    padding: 1em;
    background-color: var(--primary-color-true-aqua);
    border-radius: var(--border-radius-medium);
    color: var(--primary-color-blue-dark-2);
    text-align: center;
}

video {
    width: clamp(18.75rem, 80%, 50rem);

    @media (width >= 1023px) {
        grid-column: 2 / 2;
        grid-row: 2 / 2;
        width: clamp(16rem, 100%, 55rem);
        height: 16rem;
    }
}

h1 {
    padding-left: 0.6rem;
    font-size: clamp(1.5rem, 80%, var(--font-size-extra-large));
    line-height: 1.4;

    @media (width >= 1023px) {
        grid-column: 2 / 5;
        grid-row: 1 / 1;
    }
}

.description {
    width: clamp(14rem, 63%, 30rem);

    @media (width >= 1023px) {
        grid-column: 3 / 4;
        grid-row: 2 / 2;
        width: 100%;
        padding: 1rem;
        background-color: var(--primary-color-blue-light-2);
        border: solid black;
        border-radius: var(--border-radius-medium);

        @supports (corner-shape: scoop) {
            corner-shape: squircle;
        }
    }
}

h2 {
    text-align: center;
}

details {
    display: flex;
    justify-content: center;
    width: clamp(14rem, 100%, 150rem);
    background-color: var(--primary-color-blue-dark-3);

    @media (width >= 1023px) {
        grid-column: 2 / 4;
        grid-row: 5 / 6;
    }
}

summary {
    color: var(--neutral-color-lightest);
}

summary::marker {
    content: "";
}

h1, h2, h3, h4 {
    color: var(--primary-color-blue-dark-2);
}

#webinar-qna {
    display: grid;
    gap: 1em;
    padding-top: 1.5em;

    @media (width <= 1023px) {
        place-items: center;
    }

    @media (width >= 1023px) {
        grid-template-columns: 60px 10rem 2fr 15rem 60px;
        grid-template-rows: repeat(4, 3rem) 15rem;
    }
}

h3 {
    @media (width >= 1023px) {
        grid-column: 2 / 5;
        grid-row: 1 / 1;
    }
}

#speaker {
    display: grid;
    place-items: center;
    gap: 1em;
    width: clamp(14rem, 63%, 30rem);
    background-color: var(--primary-color-blue-dark-1);

    @media (width >= 1023px) {
        grid-column: 4 / 4;
        grid-row: 1 / 5;
        width: 100%;
        background-color: var(--primary-color-blue-dark-1);
    }
}

#speaker img {
    width: clamp(14rem, 100%, 30rem);
}

#speaker p {
    color: var(--neutral-color-lightest);
}

h4 {
    @media (width >= 1023px) {
        grid-column: 2 / 5;
        grid-row: 3 / 3;
    }
}

.link-question {
    align-self: start;
    border-radius: var(--border-radius-medium);
    text-align: center;

    @media (width >= 1023px) {
        grid-column: 2 / 3;
        grid-row: 2 / 2;
        align-self: start;
        padding: 1em;
        text-align: center;
    }
}

details, #webinar-qna, #speaker{
    opacity: 0;
    animation: ScrollerOpacity 1s ease forwards;
    animation-timeline: view();
    animation-range: 10% 30%;
}

@media (prefers-reduced-motion: reduce) {
    details, #webinar-qna, #speaker{
        opacity: 1;      
        animation: none; 
        transform: none; 
    }
}

@keyframes ScrollerOpacity {
    from {
        opacity: 0;
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>