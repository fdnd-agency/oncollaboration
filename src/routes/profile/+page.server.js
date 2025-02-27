import fetchJson from "$lib/JavaScript/fetch-json";

const baseURL = "https://fdnd-agency.directus.app/items/";

export async function load({ fetch }) {
  try {
    
    const userResponse = await fetchJson(
      `${baseURL}avl_users/4?fields=id,fullname,email,profile_picture,entitle`
    );

    
    const favouritesResponse = await fetchJson(
      `${baseURL}avl_users/4?fields=favourites.avl_webinars_id.slug,favourites.avl_webinars_id.duration,favourites.avl_webinars_id.title,favourites.avl_webinars_id.thumbnail,favourites.avl_webinars_id.speakers.avl_speakers_id.fullname,favourites.avl_webinars_id.speakers.avl_speakers_id.slug,favourites.avl_webinars_id.speakers.avl_speakers_id.profile_picture,favourites.avl_webinars_id.speakers.avl_speakers_id.entitle,favourites.avl_webinars_id.categories.avl_categories_id.name`
    );    

    if (!userResponse?.data || !favouritesResponse?.data) {
      throw new Error("Invalid response format");
    }

    return {
      user: userResponse.data,
      favourites: favouritesResponse.data.favourites.map((fav) => fav.avl_webinars_id),
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}