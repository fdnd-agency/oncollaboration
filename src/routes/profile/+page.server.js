import fetchJson from "$lib/JavaScript/fetch-json"

export async function load({ fetch }) {
  try {
    const response = await fetchJson("https://fdnd-agency.directus.app/items/avl_users/4?fields=*,favourites.*.*");
    
    if (!response?.data) {
      throw new Error('Invalid response format');
    }
    
    return {
      user: response.data
    };
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}