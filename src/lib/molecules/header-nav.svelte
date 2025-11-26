<script>
    import "$lib/global.css";
    import Hamburger from "$lib/atoms/header-hamburger.svelte";
    import HamburgerClose from "$lib/atoms/header-hamburger-close.svelte";
    import HeaderUl from "$lib/atoms/header-ul.svelte";
    import Language from "$lib/atoms/header-language.svelte";

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
        <HamburgerClose></HamburgerClose>
        <HeaderUl></HeaderUl>
        <Language></Language>
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

    .nav-header {
        display: block;


    }

    .nav-header:target {
        right: 0;
    }

</style>