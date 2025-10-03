<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
</script>

<section class="homepage-about">
    <h1>{infoabout.heading}</h1>
    <p>{infoabout.text}</p>
    <a class="button-style" href="/about">More about oncollaboration<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.864 10.4C11.024 10.0587 11.1787 9.76 11.328 9.504C11.488 9.248 11.6427 9.03467 11.792 8.864H2.464V8.192H11.792C11.6427 8.01067 11.488 7.792 11.328 7.536C11.1787 7.28 11.024 6.98667 10.864 6.656H11.424C12.096 7.43467 12.8 8.01067 13.536 8.384V8.672C12.8 9.03467 12.096 9.61067 11.424 10.4H10.864Z" fill="white"/>
        </svg>
    </a>
</section>


<style>
    body {
        background-color: var(--neutral-color-lightest);
    }

    .homepage-about {
        padding-inline: 20px;
    }

    .button-style {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color-blue-dark-2);
        background-color: var(--primary-color-aqua-dark-3);
        width: 100%;
        height: 2.5em;
        text-decoration: none;
        border-radius: 7px;
    }

</style>

