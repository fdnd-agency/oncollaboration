<script>
    import { Thumbnail, BadgeLabel, LinkButton, Speaker, WebinarTitle, Button } from "$lib/index.js";
    import watchlist from "$lib/assets/watchlist.svg";
    import arrow from "$lib/assets/arrow-right.svg";

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
        <img src={arrow} alt="" aria-hidden="true" />
    </LinkButton>
</article>
