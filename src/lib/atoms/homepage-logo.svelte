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
        padding: 1rem;
    }

    .logos-partnerships:is(:nth-of-type(1), :nth-of-type(2), :nth-of-type(7), :nth-of-type(8) ) {
        background: var(--primary-color-blue-light-1);
    }

    .logos-partnerships:is(:nth-of-type(3), :nth-of-type(9)) {
        background: linear-gradient(to right, var(--primary-color-blue-light-1) 0%, var(--primary-color-blue-light-1) 50%, var(--primary-color-blue-dark-2) 100%);
        padding-right: 10rem;
    }

    .logos-partnerships:is(:nth-of-type(4), :nth-of-type(5), :nth-of-type(6), :nth-of-type(10)) {
        background: var(--primary-color-blue-dark-2);
    }

    .logos-partnerships:nth-of-type(6) {
        background: linear-gradient(to right, var(--primary-color-blue-dark-2) 0%, var(--primary-color-blue-dark-2) 60%, var(--primary-color-blue-light-1) 100%);
        padding-right: 10rem;
    }
    


</style>