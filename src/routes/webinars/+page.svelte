<svelte:head>
    <title>Webinars</title>
    <meta name="description" content="Webinars" />

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</svelte:head>

<section>
    <ul>
        <li><a href="/">Home &rsaquo;</a></li>
        <li><a href="/webinars">Webinars</a></li>
    </ul>

    <h1>Webinars</h1>

    <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Enim ipsum non
        egestas; primis luctus cubilia. Donec utvenenatis. Lorem ipsum odor amet.
    </p>
</section>

<style>
    section {
        background-color: var(--primary-color-blue-light-1);
        padding: 2em 1em 6em 1em;
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    ul {
        display: flex;
        gap: .5em;
        list-style-type: none;
        padding: 1em;
    }

    li a{
        color: var(--neutral-color-darker);
    }

    h1 {
        margin: .5em;
    }

    p {
        margin: 1em;
        max-width: clamp(20em, 40vw, 62.5em);
        line-height: 1.4;
    }
</style>
