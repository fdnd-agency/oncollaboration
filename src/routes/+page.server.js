    import fetchJson from "$lib/JavaScript/fetch-json";
import { env } from '$env/dynamic/public';
 
const baseURL = env.PUBLIC_API_BASE_URL || "https://fdnd-agency.directus.app/items/";
 
 
export async function load({ params }) {
  try {
 
    const speakerResponse = await fetchJson(
      `${baseURL}avl_speakers?fields=fullname,slug,profile_picture,entitle,about,phone_number,email`
    );
 
    const contentResponse = await fetchJson(
      `${baseURL}avl_content?fields=key,heading,text,read_more_link,read_more_text`
    );
 
 
    if (!speakerResponse?.data || speakerResponse.data.length === 0) {
      throw new Error("Speaker details not found");
    }
 
    if (!contentResponse?.data || contentResponse.data.length === 0) {
      throw new Error("Content details not found");
    }
   
 
    return {
      speakers: speakerResponse.data,
      content: contentResponse.data
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { speakers: null, content: [] };
  }
}