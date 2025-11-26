<script>
    import "$lib/global.css";
</script>

<svelte:head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: var(--primary-font-family);
        }
    </style>
</svelte:head>

<ul>
    <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
    <li><a class="contourings" href={`/contourings`}>Contourings</a></li>
    <li><a class="speakers" href={`/speakers`}>Speakers</a></li>
    <li><a class="profile" href={`/profile`}>Profile</a></li>
</ul>

<style>  

    ul {
        list-style-type: none;
        display: flex;
        gap: 1em;
        gap: 1em;
        padding: 1em;
        flex-direction: column;

        @media (min-width: 500px) {
            flex-direction: unset;
        }

        @media (min-width: 900px) {
            flex-direction: row;
            gap: 2em;
            padding: 0;
        }
    }

    li {
        font-weight: var(--secondary-font-weigh);
    }

    a {
        color: var(--neutral-color-lightest);
    }
</style>