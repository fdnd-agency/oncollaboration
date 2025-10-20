<script>
    import "$lib/global.css";
    let { children } = $props();
</script>

<header>
    <nav>
        <img src="" alt="" />
        <img src="" alt="" />

        <ul>
            <li><a href={`/webinars`}>Webinars</a></li>
            <li><a href={`/contourings`}>Contourings</a></li>
            <li><a href={`/speakers`}>Speakers</a></li>
            <li><a href={`/profile`}>Profile</a></li>
        </ul>

        <select id="language" name="language">
            <option value="language">Language</option>
            <option value="English">English</option>
            <option value="Indonesian">Indonesian</option>
        </select>
    </nav>
</header>

{@render children?.()}
