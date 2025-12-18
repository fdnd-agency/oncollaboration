export async function load({ url, fetch }) {
    const sortValue = url.searchParams.get('sort') || '-date' // Default to '-date' (New to Old) 
    const filterValue = url.searchParams.get('filter') || ''

    let apiUrl = `https://fdnd-agency.directus.app/items/avl_webinars?fields=slug,thumbnail.id,thumbnail.title,duration,title,speakers.avl_speakers_id.fullname,categories.avl_categories_id.name,date&sort=${sortValue}`;
    // trys to load the data and send it
        const webinars = await fetch(apiUrl); // Use the constructed API URL
        const categories = await fetch('https://fdnd-agency.directus.app/items/avl_categories');  // Fetch categories
 
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
            // You can return the search parameters so they can be set as default
            // values in the form when the page reloads.
            searchParams: {
                sort: sortValue,
            }
        }
}