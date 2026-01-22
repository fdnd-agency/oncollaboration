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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em;
    background: var(--primary-color-blue-dark-2);
    transition: right 0.3s ease;

    @media (min-width: 600px) {
        flex-direction: unset;
        padding: 1em 0em 1em 0em;
    }

    @media (min-width: 900px) {
        position: static;
        right: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2em;
        padding: 0;
    }
}

.nav-header:target {
    right: 0;
}

</style>