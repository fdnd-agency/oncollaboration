import fetchJson from "$lib/fetch-json"
import fetchReplies from "$lib/fetch-replies"
import formatBytes from "$lib/format-bytes"
import formatDate from "$lib/format-date"


const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const contouringURL = `${baseURL}avl_contourings?fields=image_scan,title,id,user_id.profile_picture.id,user_id.profile_picture.title,user_id.fullname,user_id.entitle,used_literature.directus_files_id.id,used_literature.directus_files_id.title,used_literature.directus_files_id.type,used_literature.directus_files_id.filesize,categories.avl_categories_id.name&filter[slug][_eq]=${params.slug}`
  const contouring = await fetchJson(contouringURL)
  
  const commentsURL = `${baseURL}avl_comments?fields=time_posted,content,parent_id,likes,id,user_id.profile_picture.id,user_id.profile_picture.title,user_id.fullname,replies&filter[contouring_id][_eq]=${contouring.data[0].id}&filter[parent_id][_null]=true`
  const comments = await fetchJson(commentsURL)
  
  // Unlimited replies
  for (const comment of comments.data) {
    comment.replies = await fetchReplies(comment.replies);
    comment.time_posted = formatDate(comment.time_posted);
  }
  
  // Format filesize to KB MB GB etc
  if (contouring && Array.isArray(contouring.data)) {
  const updatedData = contouring.data.map(ctscan => {
    if (ctscan.used_literature && Array.isArray(ctscan.used_literature)) {
      const updatedLiterature = ctscan.used_literature.map(lit => {
        const filesize = lit.directus_files_id?.filesize; 
        return {
          ...lit,
          formattedFileSize: filesize ? formatBytes(parseInt(filesize, 10)) : 'Unknown Size' 
        };
      });

      return {
        ...ctscan,
        used_literature: updatedLiterature
      };
    }
  });
    contouring.data = updatedData;
  }

  return {
    contouring: contouring.data[0],
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
    
    const contouringData = await fetchJson(`${baseURL}avl_contourings?fields=id&filter[slug][_eq]=${params.slug}`);
    const contouring_id = contouringData.data[0].id;

    await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        contouring_id: contouring_id
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

    const contouringData = await fetchJson(`${baseURL}avl_contourings?fields=id&filter[slug][_eq]=${params.slug}`);
    const contouring_id = contouringData.data[0].id;

    await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        contouring_id: contouring_id,
        parent_id: ID
      })
    });
    
    return { success: true };
	},
}