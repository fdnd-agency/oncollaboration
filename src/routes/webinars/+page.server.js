export async function load({ parent }) {
    return parent().then(({ webinars, category }) => {
        if (category !== 'all') {
            webinars = webinars.filter((webinar) =>
                webinar.categories?.some((cat) =>
                cat.avl_categories_id?.name?.toLowerCase() === category
                )
            );
        }

        return {
            webinars
        }
    })
}