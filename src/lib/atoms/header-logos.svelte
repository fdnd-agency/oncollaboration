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
</style>