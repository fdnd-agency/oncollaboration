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