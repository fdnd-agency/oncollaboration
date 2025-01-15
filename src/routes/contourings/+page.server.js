export async function load({ parent }) {
    return parent().then(({ contourings, category }) => {
        if (category !== 'all') {
            contourings = contourings.filter((contourings) =>
                contourings.categories?.some((cat) =>
                cat.avl_categories_id?.name?.toLowerCase() === category
                )
            );
        }

        return {
            contourings
        }
    })
}