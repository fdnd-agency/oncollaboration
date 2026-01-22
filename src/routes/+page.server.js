import { error } from '@sveltejs/kit'; 

export async function load({ url }) {
    try {
        const [ aboutRes, webinarsRes, contouringsRes, partnershipsRes, logosRes, doctorInfoRes, doctorsRes ] = await Promise.all([
            fetch('https://fdnd-agency.directus.app/items/avl_content/3'),
            fetch('https://fdnd-agency.directus.app/items/avl_content/6'),
            fetch('https://fdnd-agency.directus.app/items/avl_content/7'),
            fetch('https://fdnd-agency.directus.app/items/avl_content/5'),
            fetch('https://fdnd-agency.directus.app/items/avl_logos'),
            fetch('https://fdnd-agency.directus.app/items/avl_content/4'),
            fetch('https://fdnd-agency.directus.app/items/avl_team')
        ]);

        const checkResponse = (res, name) => {
            if (!res.ok) {
                throw error(res.status, `Could not load ${name} (Status: ${res.status})`);
            }
        };

        checkResponse(aboutRes, 'About Section');
        checkResponse(webinarsRes, 'Webinars');
        checkResponse(contouringsRes, 'Contourings');
        checkResponse(partnershipsRes, 'Partnerships');
        checkResponse(logosRes, 'Logos');
        checkResponse(doctorInfoRes, 'Doctor Info');
        checkResponse(doctorsRes, 'Doctors');

        const [ aboutData, webinarsData, contouringsData, partnershipsData, logosData, doctorInfoData, doctorsData ] = await Promise.all([
            aboutRes.json(), webinarsRes.json(), contouringsRes.json(), partnershipsRes.json(), logosRes.json(), doctorInfoRes.json(), doctorsRes.json()
        ]);

        // i choose to sort the logos from this way because this is from dark to light so it matches the carrousel

        const logosOrder = [5, 1, 2, 4, 3, 6];
            const logosSorted = logosOrder.map(id => 
                logosData.data.find(logo => logo.id === id)
        );

        return {
            about: aboutData.data,
            webinars: webinarsData.data,
            contourings: contouringsData.data,
            partnerships: partnershipsData.data,
            logos: logosSorted, 
            doctorinfo: doctorInfoData.data,
            doctors: doctorsData.data
        };

    } catch (err) {

        if (err?.status) {
            throw err;
        }
        
        console.error(err);
        throw error(500, "Sorry, error with loading the data. Please try again.");
    }
}