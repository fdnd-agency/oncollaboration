<script>
    import "$lib/global.css";
    import logoAvlDesktop from "$lib/assets/avl-logo-desktop.svg";
    import logoAvlMobile from "$lib/assets/avl-logo-mobile.svg";
    import logoKemenkesDesktop from "$lib/assets/kemenkes-logo-desktop.png";
    import logoKemenkesMobile from "$lib/assets/kemenkes-logo-mobile.png";
    import open from "$lib/assets/hamburger-menu.svg";
    import close from "$lib/assets/close-menu.svg";
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
        <a class="logo-avl" href={`/`}>
            <img
                class="avl-desktop-logo"
                src={logoAvlDesktop}
                alt="logo AVL"
                height="50"
                width="150"
            />
            <img
                class="avl-mobile-logo"
                src={logoAvlMobile}
                alt="logo AVL"
                height="50"
                width="50"
            />
        </a>

        <a class="logo-kemenkes" href={`/`}>
            <img
                class="kemenkes-desktop-logo"
                src={logoKemenkesDesktop}
                alt="logo Kemenkes"
                height="60"
                width="150"
            />
            <img
                class="kemenkes-mobile-logo"
                src={logoKemenkesMobile}
                alt="logo Kemenkes"
                height="50"
                width="50"
            />
        </a>
    </div>

    <a href="#menu" class="menu-toggle"
        ><img src={open} alt="open menu" height="50" width="50" /></a
    >

    <nav id="menu">
        <a href="#" class="close"
            ><img src={close} alt="close menu" height="50" width="50" /></a
        >
        <ul>
            <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
            <li>
                <a class="contourings" href={`/contourings`}>Contourings</a>
            </li>
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
    /* header{
        background-color: var(--primary-color-blue-dark-2);
        position: sticky;
        top: 0;
        z-index: 100;
        padding: .5em;
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
    } */

    header {
        background-color: var(--primary-color-blue-dark-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
        position: sticky;
        top: 0;
        z-index: 100;

        @media (min-width: 900px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    .logo-hospitals {
        display: flex;
        align-items: center;
        margin: 0em 0em 0em 2em;
    }

    .avl-desktop-logo,
    .kemenkes-desktop-logo {
        display: none;

        @media (min-width: 600px) {
            display: block;
        }
    }

    .avl-mobile-logo,
    .kemenkes-mobile-logo {
        display: block;

        @media (min-width: 600px) {
            display: none;
        }
    }


    nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            background: var(--primary-color-blue-dark-2);
            transition: right 0.3s ease;
            padding-top: 4em;
            display: flex;
            align-items: center;

        @media (min-width: 900px) {
            display: flex;
            gap: 2em;
            align-items: center;
            align-self: center;
            margin: 0em 1.5em 0em 0em;
            justify-content: end;
        }
    }

    ul{
        list-style-type: none;
        display: flex;
        gap: 1em;

        @media (min-width: 900px) {
            gap: 2em;
        }
    }

    a{
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
    }


    .menu-toggle {
        display: none;

    }

    .close {
        display: none;
        position: absolute;
        top: 1em;
        right: 1.2em;
    }


    /* @media (max-width: 900px) {
        .menu-toggle {
            display: block;
        }

        nav ul {
            flex-direction: column;
            gap: 15px;
            padding-left: 20px;
        }

        nav .close {
            display: block;
        }

        nav:target {
            right: 0;
        }
    } */
</style>
