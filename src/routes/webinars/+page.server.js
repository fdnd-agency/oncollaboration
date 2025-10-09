
// export async function load({ url }) {
//     const speakers = await fetch('https://fdnd-agency.directus.app/items/avl_speakers')
//     const speakersData = await speakers.json();

//     return { speakers: speakersData.data };
// }


export async function load(url) {
    // Fetch webinars
    const webinars = await fetch('https://fdnd-agency.directus.app/items/avl_webinars');
    const webinarsData = await webinars.json();

    // Fetch categories
    const categories = await fetch('https://fdnd-agency.directus.app/items/avl_categories');
    const categoriesData = await categories.json();

    return {
        webinars: webinarsData.data,
        categories: categoriesData.data
    };
}
