import fetchJson from "$lib/JavaScript/fetch-json";
import { env } from '$env/dynamic/public';

const baseURL = env.PUBLIC_API_BASE_URL || "https://fdnd-agency.directus.app/items/";


export async function load({ params }) {
  try {

    const speakerResponse = await fetchJson(
      `${baseURL}avl_speakers?fields=fullname,slug,profile_picture,entitle,about,phone_number,email`
    );

 

    if (!speakerResponse?.data || speakerResponse.data.length === 0) {
      throw new Error("Speaker details not found");
    }

   

    return { 
      speakers: speakerResponse.data 
    };
  } catch (error) {
    console.error("Failed to fetch speaker data:", error);
    return { speakers: null, webinars: [] };
  }
}
