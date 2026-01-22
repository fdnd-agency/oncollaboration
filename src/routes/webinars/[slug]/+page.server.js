import { error } from '@sveltejs/kit'

export async function load({params}) {
        const webinarURL = await fetch (`https://fdnd-agency.directus.app/items/avl_webinars?fields=slug,thumbnail.id,thumbnail.title,duration,title,video,speakers.avl_speakers_id.fullname,categories.avl_categories_id.name,date&filter[slug][_eq]=${params.slug}`)
        // If ever there is an issue simply uncomment the console log and see where the issue lies
        // console.log(webinarURL)
        // console.log(categoriesURL)
        if (!webinarURL.ok) {
            throw new Error('Failed to fetch webinar data')
        }
        
        const webinar = await webinarURL.json()

        // console.log(webinar)
        return { webinar: webinar.data[0] }
}