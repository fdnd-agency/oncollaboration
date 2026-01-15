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

    li, a{
        font-family: var(--primary-font-family);
        font-style: var(--secondary-font-weight);
         color: var(--neutral-color-lightest);
    }

    a {
        padding: .5em;
    }

    a:focus {
        outline: none;
        box-shadow: 0 0 0 2px var(--primary-color-true-aqua);
    }
</style>