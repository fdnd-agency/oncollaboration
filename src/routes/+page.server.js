export async function load({ url }) {
    try {

        const homepageAbout = await fetch('https://fdnd-agency.directus.app/items/avl_content/3');
        const homepageWebinars = await fetch('https://fdnd-agency.directus.app/items/avl_content/6');
        const homepageContourings = await fetch('https://fdnd-agency.directus.app/items/avl_content/7')

        if (!homepageAbout.ok) {
            throw new Error(`HTTP error! status: ${homepageAbout.status}`);
        }

        if (!homepageWebinars.ok) {
            throw new Error(`HTTP error! status: ${homepageWebinars.status}`);
        }

        if (!homepageContourings.ok) {
            throw new Error(`HTTP error! status: ${homepageContourings.status}`);
        }
        
        const homepageAboutData = await homepageAbout.json();
        const homepageWebinarsData = await homepageWebinars.json();
        const homepageContouringsData = await homepageContourings.json();

        return {
            about: homepageAboutData.data,
            webinars: homepageWebinarsData.data,
            contourings: homepageContouringsData.data,
            error: null
        };
    } catch (error) {
        return {
            about: null,
            webinars: null,
            contourings: null,
            error: error.message || "Sorry, error with loading the data. Please try again."
        };
    }
}

// export async function loadData(endpoint) {
//     try {
//         const response = await fetch(endpoint);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return { data: data.data, error: null };
//     } catch (error) {
//         return {
//             data: null,
//             error: "Sorry, error with loading the data. Please try again."
//         };
//     }
// }

// // Usage examples:
// // For about data
// export async function loadAbout() {
//     return loadData('https://fdnd-agency.directus.app/items/avl_content/3');
// }

// // For webinars data
// export async function loadWebinars() {
//     return loadData('https://fdnd-agency.directus.app/items/avl_content?filter[id][_in]=6,7');
// }