<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
</script>

<section class="homepage-about">
    <h1>{infoabout.heading}</h1>
    <p>{infoabout.text}</p>
    <a href="/about">More about oncollaboration</a>
</section>

