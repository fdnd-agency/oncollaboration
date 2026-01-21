<script>
    import "$lib/global.css";
    import LinkButton from "$lib/atoms/homepage-button.svelte";

    let { 
        title,          
        description,    
        linkText, 
        href, 
        ...rest         
    } = $props(); 
</script>

<article {...rest} class="homepage-article">
    <h2 class="header-article">{title}</h2>
    <p class="info-article">{description}</p>   
    <LinkButton class="link-styling" href={href}>{linkText}</LinkButton> 
</article>

<style>

    .homepage-article {
        display: flex;
        flex-direction: column;
        max-width: 37.5rem;
        padding-inline: 1rem;
        gap: 2rem;
        margin-bottom: 2.5rem;
        padding-bottom: 2.5rem;
        background-color: var(--primary-color-blue-light-1);

    @media ( min-width: 37.5em ) {
        border-radius: 1em;
        margin-bottom: 0;
    }

    @media ( min-width: 56.25em ) {
        padding-inline: 1.5em;
    }

    @media ( min-width: 65em ) {
        padding-inline: 3em;
        max-width: 27em;
    }
}

.header-article {
    margin-top: 2rem;
}

.info-article {
    padding-right: 1rem;
}
</style>