<script>
    import "$lib/global.css";
    import Hamburger from "$lib/atoms/header-hamburger.svelte";

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

<Hamburger></Hamburger>

<nav class="nav-header" id="menu">
        <ul>
            <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
            <li><a class="contourings" href={`/contourings`}>Contourings</a></li>
            <li><a class="speakers" href={`/speakers`}>Speakers</a></li>
            <li><a class="profile" href={`/profile`}>Profile</a></li>
        </ul>

        <select id="language" name="language">
            <option value="language">Language</option>
            <option value="English">English</option>
            <option value="Indonesian">Indonesian</option>
        </select>
</nav> 

<style>
    .nav-header {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        background: var(--primary-color-blue-dark-2);
        transition: right 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1em;

        @media (min-width: 600px) {
            padding: 1em 0em 0em 0em;
            flex-direction: unset;
        }

        @media (min-width: 900px) {
            position: static;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 2em;
            padding: 0;
            right: auto;
        }
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 1em;

        @media (min-width: 900px) {
            gap: 2em;
        }
    }

    li{
        font-weight: var(--secondary-font-weigh);
    }

    a {
        color: var(--neutral-color-lightest);
    }

    select {
        background-color: var(--primary-color-aqua-dark-3);
        border: var(--primary-color-aqua-dark-3);
        border-radius: var(--border-radius-small);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
        width: fit-content;
        height: fit-content;
        padding: 0.5em;

        @media (min-width: 500px) {
            margin: 0em 1em 0em 0em;
        }
    }

    .nav-header ul {
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

    .nav-header .close {
        display: block;

        @media (min-width: 900px) {
            display: none;
        }
    }

    .nav-header:target {
        right: 0;
    }
</style>