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

<select id="language" name="language">
    <option value="language">Language</option>
    <option value="English">English</option>
    <option value="Indonesian">Indonesian</option>
</select>

<style>
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
</style>