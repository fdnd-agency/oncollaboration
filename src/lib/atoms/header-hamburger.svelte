<script>
    import "$lib/global.css";
    import open from "$lib/assets/hamburger-menu.svg";
</script>

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