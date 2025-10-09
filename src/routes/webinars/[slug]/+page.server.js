export async function load({params}) {
    const webinarURL = await fetch (`https://fdnd-agency.directus.app/items/avl_webinars/?filter[slug][_eq]=${params.slug}`)
    // console.log(webinarURL)
    const webinar = await webinarURL.json()
    // console.log(webinar)
    return { webinar: webinar.data[0] }
}