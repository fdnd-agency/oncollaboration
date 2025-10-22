<script>
    import "$lib/global.css";
    import logoAvlDesktop from "$lib/assets/avl-logo-desktop.svg";
    import logoAvlMobile from "$lib/assets/avl-logo-mobile.svg";
    import logoKemenkesDesktop from "$lib/assets/kemenkes-logo-desktop.png";
    import logoKemenkesMobile from "$lib/assets/Kemenkes-logo-mobile.png";
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
        <a href="#" class="close"><img src={close} alt="close menu" height="50" width="50" /></a>
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

<footer>
        <img src={logoAvlMobile} alt="logo AVL" height="50px" />

        <img src={logoKemenkesMobile} alt="logo Kemenkes" height="50px" />

        <nav>
            <strong>Navigation</strong>
            <ul>
                <li><a alt="" href={`/webinars`}>Webinars</a></li>
                <li><a alt="" href={`/speakers`}>Speakers</a></li>
                <li><a alt="" href={`/profile`}>Profile</a></li>
                <li><a alt="" href={`/contourings`}>Contourings</a></li>
            </ul>
        </nav>

        <address>
            <strong>Contact Information</strong>
            <ul>
                <li>Indonesia & The Netherlands</li>
                <li>AVL:<a href="tel:0205129111">020 512 9111</a></li>
                <li>Kemenkes:<a href="tel:1500567">1500-567</a></li>
            </ul>
        </address>

        <select id="language" name="language">
            <option value="language">Language</option>
            <option value="English">English</option>
            <option value="Indonesian">Indonesian</option>
        </select>

        <p>© 2025 AVL Indonesia. All rights reserved.</p>
</footer>

<style>
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

    .menu-toggle {
        display: none;
    }

    .close {
        display: none;
        position: absolute;
        top: 1em;
        right: 1.2em;

        @media (min-width: 900px) {
            display: none;
        }
    }

    .menu-toggle {
        display: block;

        @media (min-width: 900px) {
            display: none;
        }
    }

    nav ul {
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

    nav .close {
        display: block;

        @media (min-width: 900px) {
            display: none;
        }
    }

    nav:target {
        right: 0;
    }

    footer {
        background-color: var(--primary-color-blue-dark-2);
        display: grid;
        gap: 0.8rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 15rem 10rem repeat(2, 5em);

        @media (width >= 900px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 15rem;
        }
    }

    footer img {
        justify-self: center;

        @media (width >= 900px){
            grid-column: 1 / 1;
        }
    }

    footer nav {
        display: grid;
        top: 0;
        right: 0;
        position: relative;
    }

    footer ul{
        display: grid;
    }

    footer p, li, strong {
        color: var(--neutral-color-lightest);
    }

    footer #language {
        grid-row: 4 / 4;
        justify-self: end;
        margin: 0em 2em 0em 0em;

        @media (width >= 900px){
            grid-column: 3 / 3;
            grid-row: 1 / 2;
            justify-self: center;
        }
    }
    
    footer p {
        grid-column: 1 / -1;
        grid-row: 5 / 6;
        text-align: center;
        padding-bottom: 1em;
    }

    address{
        grid-row: 3 / 4;
    }

</style>
