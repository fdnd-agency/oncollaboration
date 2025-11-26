<script>
    import "$lib/global.css";
    import close from "$lib/assets/close-menu.svg";
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

<a href="#" class="close"><img src={close} alt="close menu" height="50" width="50" /></a>
  

<style>
    .close {
        display: none;
        position: absolute;
        top: 1em;
        right: 1.2em;

        @media (min-width: 900px) {
            display: none;
        }
    }
</style>