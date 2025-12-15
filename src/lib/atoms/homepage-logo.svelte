<script>
    import "$lib/global.css";
    let { data } = $props();
    const infologos = data.logos;
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

{#each infologos as logo}
    <picture class="logos-partnerships">
        <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=avif`} type="image/avif"/>
        <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=webp`} type="image/webp"/>
        <img src={`https://fdnd-agency.directus.app/assets/${logo.logo}`} alt={logo.name} loading="lazy"/>
    </picture>
{/each}

<style>
    .logos-partnerships {
        display: flex;
        align-items: center;
        object-fit: contain;
        flex-shrink: 0; 
        margin-left: 2rem;
    }
</style>