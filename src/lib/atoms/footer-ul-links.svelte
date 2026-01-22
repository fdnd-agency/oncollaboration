<ul>
    <li><a class="webinars" href={`/webinars`}>Webinars</a></li>
    <li><a class="contourings" href={`/contourings`}>Contourings</a></li>
    <li><a class="speakers" href={`/speakers`}>Speakers</a></li>
    <li><a class="profile" href={`/profile`}>Profile</a></li>
</ul>

<style>
    
ul {
    display: grid;
    list-style: none;
}

li, a {
    color: var(--neutral-color-lightest);
    font-family: var(--primary-font-family);
    font-style: var(--secondary-font-weight);
}

a {
    padding: -1.4em;
}

a:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color-true-aqua);
}
</style>