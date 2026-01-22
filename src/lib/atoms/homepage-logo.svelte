<script>
    import "$lib/global.css";
    let { data } = $props();
    const infologos = data.logos;
</script>

{#each infologos as logo}
    <picture class="logos-partnerships">
        <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=avif`} type="image/avif"/>
        <source srcSet={`https://fdnd-agency.directus.app/assets/${logo.logo}?format=webp`} type="image/webp"/>
        <img src={`https://fdnd-agency.directus.app/assets/${logo.logo}`} alt="Logos van de partners" loading="lazy"/>
    </picture>
{/each}

<style>
.logos-partnerships {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 2rem;
    object-fit: contain;
}

.logos-partnerships:is(:nth-of-type(1), :nth-of-type(7)) {
    padding-left: 17rem;
    background: linear-gradient(to right, var(--primary-color-blue-dark-2) 0%, var(--primary-color-blue-dark-2) 10%, var(--primary-color-blue-light-1) 37%, var(--primary-color-blue-light-1) 100%);
}

.logos-partnerships:is(:nth-of-type(3), :nth-of-type(9)) {
    padding-right: 17rem;
    background: linear-gradient(to right, var(--primary-color-blue-light-1) 0%, var(--primary-color-blue-light-1) 50%, var(--primary-color-blue-dark-2) 90%, var(--primary-color-blue-dark-2) 100%);
}

.logos-partnerships:is(:nth-of-type(2), :nth-of-type(8)) {
    background: var(--primary-color-blue-light-1);
}

.logos-partnerships:is(:nth-of-type(4), :nth-of-type(5), :nth-of-type(6), :nth-of-type(10)) {
    background: var(--primary-color-blue-dark-2);
}
</style>