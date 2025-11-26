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

<style>
    .menu-toggle {
        display: none;
    }

    .menu-toggle {
        display: block;

        @media (min-width: 900px) {
            display: none;
        }
    }

</style>