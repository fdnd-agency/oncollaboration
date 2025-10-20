import { error } from '@sveltejs/kit'

export async function load({params}) {
        const webinarURL = await fetch (`https://fdnd-agency.directus.app/items/avl_webinars/?filter[slug][_eq]=${params.slug}`)
        // const categoriesURL = await fetch(`https://fdnd-agency.directus.app/items/avl_categories`)
        // console.log(webinarURL)
        // console.log(categoriesURL)
        if (!webinarURL.ok) {
            throw new Error('Failed to fetch webinar data')
        }
        
        const webinar = await webinarURL.json()

        // const categories = await categoriesURL.json()
        // console.log(webinar)
        return { webinar: webinar.data[0] }
}