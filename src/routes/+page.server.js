
export async function load({ url }) {

    // trys to load the data and send it

    try {
        const homepageAbout = await fetch('https://fdnd-agency.directus.app/items/avl_content/3');

        if (!homepageAbout.ok) {
            throw new Error(`HTTP error! status: ${homepageAbout.status}`);
        }

        const homepageAboutData = await homepageAbout.json();
        return { about: homepageAboutData.data, error: null };

    // if there is error handles it and gives error message in return to the user

    } catch (error) {

        return {
            about: null,
            error: "Sorry, error with loading the data please try again."
        };
    }
}