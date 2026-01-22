<script>
    import { Thumbnail, BadgeLabel, LinkButton, Speaker, WebinarTitle, Button } from "$lib/index.js";
    import watchlist from "$lib/assets/watchlist.svg";

    let { webinar } = $props();
</script>

<article>
    <div class="container-thumbnail">
        <Thumbnail webinar={webinar} ></Thumbnail>

        <BadgeLabel class="duration" text={webinar.duration}></BadgeLabel>

        <BadgeLabel class="category" text={webinar.categories[0].avl_categories_id.name}></BadgeLabel>

        <Button type="button" class="watchlist">
            Add to watchlist
            <img src={watchlist} alt="" aria-hidden="true" />
        </Button>
    </div>

    <WebinarTitle as="h3">{webinar.title}</WebinarTitle>
    <Speaker as="p" class="speakers-fullname">{webinar.speakers[0].avl_speakers_id.fullname}</Speaker>

    <LinkButton class="to-webinar-detail" href={`/webinars/${webinar.slug}`}>
        View webinar
        <svg class="arrow" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.8125 0.21875C6.9375 0.0625 7.1875 0.0625 7.34375 0.21875L13.875 6.75C14.0312 6.90625 14.0312 7.125 13.875 7.28125L7.34375 13.8125C7.1875 13.9688 6.9375 13.9688 6.8125 13.8125L6.1875 13.2188C6.03125 13.0625 6.03125 12.8125 6.1875 12.6875L11.0312 7.8125H0.375C0.15625 7.8125 0 7.65625 0 7.4375V6.5625C0 6.375 0.15625 6.1875 0.375 6.1875H11.0312L6.1875 1.34375C6.03125 1.21875 6.03125 0.96875 6.1875 0.8125L6.8125 0.21875Z" fill="currentColor"/>
        </svg>
    </LinkButton>
</article>

<style>

article {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 17em;
    background-color: var(--primary-color-blue-light-1);
    border: 1px solid var(--primary-color-blue-dark-2);
    border-radius: var(--border-radius-medium);
}

.container-thumbnail {
    position: relative;
    align-items: center;
}

svg {
    fill: var(--primary-color-blue-dark-2);
}

</style>