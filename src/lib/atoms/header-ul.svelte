<script>
    import "$lib/global.css";
</script>

<ul>
    <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
    <li><a class="contourings" href={`/notworking`}>Contourings</a></li>
    <li><a class="speakers" href={`/notworking`}>Speakers</a></li>
    <li><a class="profile" href={`/notworking`}>Profile</a></li>
</ul>

<style>  

ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    list-style-type: none;

    @media (min-width: 500px) {
        flex-direction: unset;
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        gap: 2em;
        padding: 0;
    }
}

li {
    font-weight: var(--secondary-font-weigh);
}

a {
    color: var(--neutral-color-lightest);
}
</style>