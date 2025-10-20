
export async function load(url) {
    // trys to load the data and send it
    try {
        const webinars = await fetch(`https://fdnd-agency.directus.app/items/avl_webinars?fields=slug,thumbnail.id,thumbnail.title,duration,title,speakers.avl_speakers_id.fullname,categories.avl_categories_id.name,date`);   // Fetch webinars
        const categories = await fetch('https://fdnd-agency.directus.app/items/avl_categories');  // Fetch categories

        if (!webinars.ok) {
            throw new Error(`HTTP error! status: ${webinars.status}`);
        }

        if (!categories.ok) {
            throw new Error(`HTTP error! status: ${categories.status}`);
        }

        const webinarsData = await webinars.json();
        const categoriesData = await categories.json();

        return {
            webinars: webinarsData.data,
            categories: categoriesData.data,
        };

        // if there is error handles it and gives error message in return to the user
    } catch (error) {
        return {
            webinars: null,
            categories: null,
            error: "Sorry, there was an error loading the data. Please try again."
        };
    }
}