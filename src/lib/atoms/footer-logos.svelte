<script>
    import "$lib/global.css";
    import logoAvlDesktop from "$lib/assets/avl-logo-desktop.svg";
    import logoAvlMobile from "$lib/assets/avl-logo-mobile.svg";
    import logoKemenkesDesktop from "$lib/assets/kemenkes-logo-desktop.png";
    import logoKemenkesMobile from "$lib/assets/Kemenkes-logo-mobile.png";
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

<style>
    .logo-hospitals {
        display: flex;
        align-items: center;
    }

    .avl-desktop-logo,
    .kemenkes-desktop-logo {
        display: none;

        @media (width >= 925px) {
            display: flex;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: stretch;
            justify-content: space-around;
        }
    }

    .avl-mobile-logo,
    .kemenkes-mobile-logo {
        display: block;

        @media (width >= 925px) {
            display: none;
        }
    }
</style>