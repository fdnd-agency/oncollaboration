// +page.server.js
import { json } from "@sveltejs/kit";
import fetchJson from "$lib/JavaScript/fetch-json"

export async function load({ fetch }) {
  
  const response = await fetchJson("https://fdnd-agency.directus.app/items/avl_users/2");  
  
  return {
    user: response.data
  };
}
