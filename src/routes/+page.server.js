export async function load({ url }) {
    try {

        const homepageAbout = await fetch('https://fdnd-agency.directus.app/items/avl_content/3');
        const homepageWebinars = await fetch('https://fdnd-agency.directus.app/items/avl_content/6');
        const homepageContourings = await fetch('https://fdnd-agency.directus.app/items/avl_content/7');
        const homepagePartnerships = await fetch('https://fdnd-agency.directus.app/items/avl_content/5');
        const homepageLogos = await fetch('https://fdnd-agency.directus.app/items/avl_logos');


        if (!homepageAbout.ok) {
            throw new Error(`HTTP error! status: ${homepageAbout.status}`);
        }

        if (!homepageWebinars.ok) {
            throw new Error(`HTTP error! status: ${homepageWebinars.status}`);
        }

        if (!homepageContourings.ok) {
            throw new Error(`HTTP error! status: ${homepageContourings.status}`);
        }

        if (!homepagePartnerships.ok) {
            throw new Error(`HTTP error! status: ${homepagePartnerships.status}`);
        }

        if (!homepageLogos.ok) {
            throw new Error(`HTTP error! status: ${homepageLogos.status}`)
        }
        
        const homepageAboutData = await homepageAbout.json();
        const homepageWebinarsData = await homepageWebinars.json();
        const homepageContouringsData = await homepageContourings.json();
        const homepagePartnershipsData = await homepagePartnerships.json();
        const homepageLogosData = await homepageLogos.json();

        return {
            about: homepageAboutData.data,
            webinars: homepageWebinarsData.data,
            contourings: homepageContouringsData.data,
            partnerships: homepagePartnershipsData.data,
            logos: homepageLogosData.data,
            error: null
        };
    } catch (error) {
        return {
            about: null,
            webinars: null,
            contourings: null,
            partnerships: null,
            logos: null,
            error: error.message || "Sorry, error with loading the data. Please try again."
        };
    }
}