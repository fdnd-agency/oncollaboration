export async function load({ url }) {
    try {

        const homepageAbout = await fetch('https://fdnd-agency.directus.app/items/avl_content/3');
        const homepageWebinars = await fetch('https://fdnd-agency.directus.app/items/avl_content/6');
        const homepageContourings = await fetch('https://fdnd-agency.directus.app/items/avl_content/7');
        const homepageSpeakers = await fetch('https://fdnd-agency.directus.app/items/avl_content/4');
        const homepageDoctors = await fetch('https://fdnd-agency.directus.app/items/avl_team');

        if (!homepageAbout.ok) {
            throw new Error(`HTTP error! status: ${homepageAbout.status}`);
        }

        if (!homepageWebinars.ok) {
            throw new Error(`HTTP error! status: ${homepageWebinars.status}`);
        }

        if (!homepageContourings.ok) {
            throw new Error(`HTTP error! status: ${homepageContourings.status}`);
        }

        if (!homepageSpeakers.ok) {
            throw new Error(`HTTP error! status: ${homepageSpeakers.status}`);
        }

        if (!homepageDoctors.ok) {
            throw new Error(`HTTP error! status: ${homepageDoctors.status}`);
        }
        
        const homepageAboutData = await homepageAbout.json();
        const homepageWebinarsData = await homepageWebinars.json();
        const homepageContouringsData = await homepageContourings.json();
        const homepageSpeakersData = await homepageSpeakers.json();
        const homepageDoctorsData = await homepageDoctors.json();

        return {
            about: homepageAboutData.data,
            webinars: homepageWebinarsData.data,
            contourings: homepageContouringsData.data,
            speakers: homepageSpeakersData.data,
            doctors: homepageDoctorsData.data,
            error: null
        };
    } catch (error) {
        return {
            about: null,
            webinars: null,
            contourings: null,
            speakers: null,
            doctors: null,
            error: error.message || "Sorry, error with loading the data. Please try again."
        };
    }
}