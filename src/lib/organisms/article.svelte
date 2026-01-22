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
    gap: 2rem;
    max-width: 37.5rem;
    padding-inline: 1rem;
    padding-bottom: 2.5rem;
    margin-bottom: 2.5rem;
    background-color: var(--primary-color-blue-light-1);

    @media ( min-width: 37.5em ) {
        margin-bottom: 0;
        border-radius: 1em;
    }

    @media ( min-width: 56.25em ) {
        padding-inline: 1.5em;
    }

    @media ( min-width: 65em ) {
        max-width: 27em;
        padding-inline: 3em;
    }
}

.header-article {
    margin-top: 2rem;
}

.info-article {
    padding-right: 1rem;
}   

</style>