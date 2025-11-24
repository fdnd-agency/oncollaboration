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

<nav class="nav-header" id="menu">
    <a href="#" class="close"><img src={close} alt="close menu" height="50" width="50" /></a>
    <ul>
        <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
        <li><a class="contourings" href={`/contourings`}>Contourings</a></li>
        <li><a class="speakers" href={`/speakers`}>Speakers</a></li>
        <li><a class="profile" href={`/profile`}>Profile</a></li>
    </ul>
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
</style>