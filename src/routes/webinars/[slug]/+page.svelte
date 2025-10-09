<script>
     /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props()

    const webinar = data.webinar
</script>

<!-- hier komt de nav bar -->
 <ul>
    <li><a href="/">home</a></li>
    <li><a href="/webinars">Webinars</a></li>
    <li><a href="/webinars/{webinar.slug}">{webinar.title}</a></li>
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