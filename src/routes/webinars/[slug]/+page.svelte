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
    <li><a href="/">home &#8594</a></li>
    <li><a href="/webinars">Webinars &#8594</a></li>
    <li><a href="/webinars/{webinar.slug}">webinar</a></li>
 </ul>
<section id="webinar-video">
    <video 
        controls width="300px" 
        height="auto"
        poster='https://fdnd-agency.directus.app/assets/{webinar.thumbnail}'>
        <source src='https://fdnd-agency.directus.app/assets/{webinar.video}'>
        <track kind="captions">
    </video>
    <ul>
        <li>{webinar.views}</li>
        <li>{webinar.date}</li>
        <li>{webinar.categories}</li>
    </ul>
    <h1>{webinar.title}</h1>
</section>

<section>
    <article>
        <h2>Description</h2>
    </article>

    <details>
        <summary>Subtitles</summary>
    </details>
</section>

<section id="webinar-qna">
    <article id="speaker">
        <picture>
            <img src='https://fdnd-agency.directus.app/assets/{webinar.thumbnail}' alt="{webinar.speaker}" width="200px">
        </picture>
        <a href="speaker">save speaker</a>
        <p>Speaker name</p>
    </article>

    <h3>Q&A</h3>
    <a href="ask a question">Ask a question</a>

    <h4>Comments:</h4>
    <hr>
    <!-- hier komen de comments -->
</section>

<!-- hier komt de footer -->

<style>
    ul{
        list-style: none;
        display: flex;
    }
    #webinar-bread-crumb{
        background-color: var(--primary-color-blue-light-1);

        a{
            text-decoration: none;
            color: var(--primary-color-blue-dark-2);
        }
    }

    #webinar-video{
        ul{
            gap: 1em;
        }

        li{
            background-color: var(--primary-color-true-aqua);
            width: 5rem;
            text-align: center;
            color: var(--primary-color-blue-dark-2);
        }

        h1{
            max-width: 40ch;
            font-size: clamp(0.80rem, 1rem, 3rem);
            line-height: 1.4;
        }
    }

    h1, h2, h3, h4{
        color: var(--primary-color-blue-dark-2);
    }
</style>