<script>
    import "$lib/global.css";
    import open from "$lib/assets/hamburger-menu.svg";
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



<a href="#menu" class="menu-toggle">
    <img src={open} alt="open menu" height="50" width="50" />
</a>   

<nav class="nav-header" id="menu">
    <a href="#" class="close"><img src={close} alt="close menu" height="50" width="50" /></a>
</nav>

<style>
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