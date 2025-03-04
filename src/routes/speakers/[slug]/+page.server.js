import fetchJson from "$lib/JavaScript/fetch-json";

const baseURL = "https://fdnd-agency.directus.app/items/";

export async function load({ params }) {
  try {

    const speakerResponse = await fetchJson(
      `${baseURL}avl_speakers?fields=fullname,slug,profile_picture,entitle,about,phone_number,email&filter[slug][_eq]=${params.slug}`
    );

    const speakerwebinarResponse = await fetchJson(
      `${baseURL}avl_speakers?fields=webinars.avl_webinars_id.slug,webinars.avl_webinars_id.duration,webinars.avl_webinars_id.title,webinars.avl_webinars_id.thumbnail,webinars.avl_webinars_id.speakers.avl_speakers_id.fullname,webinars.avl_webinars_id.speakers.avl_speakers_id.slug,webinars.avl_webinars_id.speakers.avl_speakers_id.profile_picture,webinars.avl_webinars_id.speakers.avl_speakers_id.entitle&filter[slug][_eq]=${params.slug}`
    );

    if (!speakerResponse?.data || speakerResponse.data.length === 0) {
      throw new Error("Speaker not found");
    }

    if (!speakerwebinarResponse?.data || speakerwebinarResponse.data.length === 0) {
      throw new Error("Speaker not found");
    }

    return { 
      speaker: speakerResponse.data[0], 
      webinars: speakerwebinarResponse.data[0]?.webinars.map(webinar => webinar.avl_webinars_id) || []
    };
  } catch (error) {
    console.error("Failed to fetch speaker data:", error);
    return { speaker: null, webinars: [] };
  }
}
