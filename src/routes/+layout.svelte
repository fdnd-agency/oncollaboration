<script>
    import "$lib/global.css";
    import logoAvlDesktop from "$lib/assets/avl-logo-desktop.svg";
    import logoAvlMobile from "$lib/assets/avl-logo-mobile.png";
    import logoKemenkesDesktop from "$lib/assets/kemenkes-logo-desktop.png";
    import logoKemenkesMobile from "$lib/assets/kemenkes-logo-mobile.png";
    let { children } = $props();
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

<header>
        <a href={`/`}><img src={logoAvlDesktop} alt="" height="50" width="150"/></a>
        <a href={`/`}><img src={logoKemenkesDesktop} alt="" height="60" width="150"/></a>

        <ul>
            <li><a href={`/webinars`}>Webinars</a></li>
            <li><a href={`/contourings`}>Contourings</a></li>
            <li><a href={`/speakers`}>Speakers</a></li>
            <li><a href={`/profile`}>Profile</a></li>
        </ul>

        <select id="language" name="language">
            <option value="language">Language</option>
            <option value="English">English</option>
            <option value="Indonesian">Indonesian</option>
        </select>
</header>

{@render children?.()}


<style>
    header{
        background-color: var(--primary-color-blue-dark-2);
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        padding: .5em;
        /* border-radius: 0px 0px var(--border-radius-medium) var(--border-radius-medium); */
    }

    ul{
        display: flex;
        gap: 1em;
        list-style-type: none;
    }

    a{
        color: var(--neutral-color-lightest);
    }

    select{
        background-color: var(--primary-color-aqua-dark-3);
        border: var(--primary-color-aqua-dark-3);
        border-radius: var(--border-radius-small);
        font-size: var(--font-size-small);
        font-family: var(--primary-font-family);
        width: fit-content;
        height: fit-content;
        padding: .5em;
    }
    
</style>