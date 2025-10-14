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
    <li><a href="/webinars/{webinar.slug}">webinar details</a></li>
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
        <li>{webinar.date}</li>
        {#each webinar.categories as category}
            <li>{category}</li>
        {/each}
    </ul>
    <h1>{webinar.title}</h1>

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
        height: 2em;
        background-color: var(--primary-color-blue-light-1);
    }

    li a{
        text-decoration: none;
        color: var(--primary-color-blue-dark-2);
    }

    #webinar-video{
        display: grid;
        place-items: center;
        gap: 1em;
    }

     section ul{
            gap: 1em;
        }

    section li{
        background-color: var(--primary-color-true-aqua);
        width: max-content;
        padding: 1em;
        text-align: center;
        color: var(--primary-color-blue-dark-2);

        border-radius: 2.5rem;
    }

    h1{
        font-size: clamp(0.80rem, 100%, 2.5rem);
        line-height: 1.4;
    }

    article{
        background-color: var(--primary-color-blue-light-1);
        width: clamp(14rem, 63%, 30rem);
    }

    details{
        background-color: var(--primary-color-blue-dark-1);
        width: clamp(14rem, 63%, 30rem);
    }

    summary{
            color: var(--neutral-color-lightest);
        }

    video{
        margin-top: 1em;
        width: clamp(18.75rem, 80%, 50rem);
    }

    h1, h2, h3, h4{
        color: var(--primary-color-blue-dark-2);
    }

    #webinar-qna{
        display: grid;
        place-items: center;
        gap: 1em;
        margin: 2em 0;
    }

    #speaker{
        display: grid;
        place-items: center;
        gap: 1em;

        background-color: var(--primary-color-blue-dark-1);
        width: clamp(14rem, 63%, 30rem);
    }

    #speaker p{
            color: var(--neutral-color-lightest);
        }
    
    section a{
        text-decoration: none;
        color: var(--primary-color-blue-dark-2);
        background-color: var(--primary-color-true-aqua);
        padding: 0.8em;
        border-radius: 2.5rem;
    }
</style>