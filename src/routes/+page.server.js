export async function load({ url }) {
    const homepageAbout = await fetch ('https://fdnd-agency.directus.app/items/avl_content/3');
    const homepageAboutData = await homepageAbout.json();


    return {about: homepageAboutData.data}
}