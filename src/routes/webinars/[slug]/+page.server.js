import fetchJson from "$lib/fetch-json"
import fetchReplies from "$lib/fetch-replies"
import formatBytes from "$lib/format-bytes"
import formatDate from "$lib/format-date"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const webinarURL = `${baseURL}avl_webinars?fields=thumbnail,video,date,title,transcript,description,id,views,resources.directus_files_id.id,resources.directus_files_id.title,resources.directus_files_id.type,resources.directus_files_id.filesize,speakers.avl_speakers_id.fullname,speakers.avl_speakers_id.slug,speakers.avl_speakers_id.profile_picture,speakers.avl_speakers_id.entitle,categories.avl_categories_id.name&filter[slug][_eq]=${params.slug}`
  const webinar = await fetchJson(webinarURL)

  const commentsURL = `${baseURL}avl_comments?fields=time_posted,content,parent_id,likes,id,user_id.profile_picture.id,user_id.profile_picture.title,user_id.fullname,replies&filter[webinar_id][_eq]=${webinar.data[0].id}&filter[parent_id][_null]=true`  
  const comments = await fetchJson(commentsURL)
  
  // Unlimited replies
  for (const comment of comments.data) {
    comment.replies = await fetchReplies(comment.replies); 
    comment.time_posted = formatDate(comment.time_posted);
  }

  // Format filesize to KB MB GB etc
  if (webinar && Array.isArray(webinar.data)) {
    const updatedData = webinar.data.map(web => {
      if (web.resources && Array.isArray(web.resources)) {
        const updatedLiterature = web.resources.map(lit => {
          const filesize = lit.directus_files_id?.filesize; 
          return {
            ...lit,
            formattedFileSize: filesize ? formatBytes(parseInt(filesize, 10)) : 'Unknown Size' 
          };
        });
  
        return {
          ...web,
          resources: updatedLiterature
        };
      }
    });
    webinar.data = updatedData;
  }

  webinar.data[0].date = formatDate(webinar.data[0].date);
  
  return {
    webinar: webinar.data[0],
    comments: comments.data
  }
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	comment: async ({ request, params }) => {
		const data = await request.formData();
    const content = data.get('comment');
    const timestamp = new Date().toISOString();
    const user_id = 1;

    const webinarData = await fetchJson(`${baseURL}avl_webinars?fields=id&filter[slug][_eq]=${params.slug}`);
    const webinar_id = webinarData.data[0].id;

    await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        webinar_id: webinar_id
      })
    });
    
    return { success: true };
	},

  like: async ({ request }) => {
    const data = await request.formData();
    const ID = data.get('comment-id');
    const likesData = await fetchJson(`${baseURL}avl_comments/${ID}?fields=likes`);
    const likes = likesData.data.likes;
    
    await fetchJson(`${baseURL}avl_comments/${ID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: likes + 1,
      })
    });
    
    return { success: true };
  },

  reply: async ({ request, params }) => {
		const data = await request.formData();
    const content = data.get('reply');
    const ID = data.get('comment-id');
    const timestamp = new Date().toISOString();
    const user_id = 1;

    const webinarData = await fetchJson(`${baseURL}avl_webinars?fields=id&filter[slug][_eq]=${params.slug}`);
    const webinar_id = webinarData.data[0].id;

    await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        webinar_id: webinar_id,
        parent_id: ID
      })
    });
    
    return { success: true };
	},
};