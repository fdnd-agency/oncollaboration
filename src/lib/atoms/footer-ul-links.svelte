<script>
    import "$lib/global.css";
</script>

<ul>
    <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
    <li><a class="contourings" href={`/contourings`}>Contourings</a></li>
    <li><a class="speakers" href={`/speakers`}>Speakers</a></li>
    <li><a class="profile" href={`/profile`}>Profile</a></li>
</ul>

<style>
    ul {
        display: grid;
    }

    li, a {
        color: var(--neutral-color-lightest);
    }

    li, a{
        font-family: var(--primary-font-family);
        font-style: var(--secondary-font-weight);
    }

    a:focus {
        border: 0 0 0 2px var(--primary-color-true-aqua);
    }
</style>