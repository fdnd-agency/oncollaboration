<script>
        let { webinar } = $props();
</script>

<picture>
    <source
        srcset={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}?format=avif`}
        type="image/avif"
    />
    <source
        srcset={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}?format=webp`}
        type="image/webp"
    />
    <img
        class="thumbnail"
        src={`https://fdnd-agency.directus.app/assets/${webinar.thumbnail.id}`}
        alt={webinar.title}
        height="150"
        width="250"
        loading="lazy"
    />
</picture>

<style>
       .thumbnail {
        margin: 0.5em;
        display: flex;
        justify-self: center;
        border-radius: var(--border-radius-medium);
        display: block;
    }
</style>
