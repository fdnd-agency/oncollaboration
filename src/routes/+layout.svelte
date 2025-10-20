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
    <div class="logo-hospitals">
        <a class="logo-avl" href={`/`}><img src={logoAvlDesktop} alt="logo AVL" height="50" width="150"/></a>
        <a class="logo-kemenkes" href={`/`}><img src={logoKemenkesDesktop} alt="logo Kemenkes" height="60" width="150"/></a>
    </div>

        <nav>
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
</header>

{@render children?.()}


<style>
    header{
        background-color: var(--primary-color-blue-dark-2);
        position: sticky;
        top: 0;
        z-index: 100;
        padding: .5em;
        /* display: flex;
        justify-content: space-around; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .logo-hospitals{
        display: flex;
        align-items: center;
        margin: 0em 0em 0em 2em;
    }
    
    nav{
        display: flex;
        gap: 2em;
        align-items: center;
        align-self: center;
        margin: 0em 1em 0em 0em;
        justify-content: end;
    }

    ul{
        display: flex;
        gap: 2em;
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