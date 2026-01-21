# How the code base works
This project is built with SvelteKit 5 and uses Directus as the CMS.

## Database
You can see the database setup here.

<img width="800" src="./datamodel.png" alt="go to docs/datamodel.png">

You can modify this data in the fdnd agency avl database, for which you need to request access. You can find the tables here:
- [Webinars](https://fdnd-agency.directus.app/items/avl_webinars)
- [Speakers](https://fdnd-agency.directus.app/items/avl_speakers)
- [Contourings](https://fdnd-agency.directus.app/items/avl_contourings)
- [Comments](https://fdnd-agency.directus.app/items/avl_comments)
- [Categories](https://fdnd-agency.directus.app/items/avl_categories)
- [Users](https://fdnd-agency.directus.app/items/avl_users)
- [Messages](https://fdnd-agency.directus.app/items/avl_messages)
- [Team](https://fdnd-agency.directus.app/items/avl_team)
- [Logo](https://fdnd-agency.directus.app/items/avl_logos)
- [Content](https://fdnd-agency.directus.app/items/avl_content)

You can use these links in your fetch/post requests to retrieve or modify data from the database.

## Code structure
All documents that work with dynamic code are in the `src` folder. 

`src` is divided into `lib`, which contains reusable documents, `routes`, where each folder is a route name, and `app.html`, which contains the head for all files.

In `index.js` we import some components, so you only need one line of code to import multiple components.

## Component Structure Overview

The `lib/` directory is organized into four folders of which three are component based: `assets`, `atoms`, `molecules` and `organisms`

## 1. Assets (`lib/assets/`)
SVG's and other images that are used around the website:
- **Bricks:** 
- **Blocks:** 
- **Constructions:** 
- **Assemblages:** 

## 2. Atoms (`lib/atoms/`)
the most little building blocks of our organisms. These tiny parts of code start our components:
- **Webinars, Webinar detail and Home:** Each contains `organisms` and `molecules` are build with `atoms`.

## 3. Molecules (`lib/moelcules/`)
The middle building bricks of organisms, molecules serve as conjoined elements serving as one. Example:
```<article>
    <div class="container-thumbnail">
        <Thumbnail webinar={webinar} ></Thumbnail>

        <BadgeLabel class="duration" text={webinar.duration}></BadgeLabel>

        <BadgeLabel class="category" text={webinar.categories[0].avl_categories_id.name}></BadgeLabel>

        <Button type="button" class="watchlist">
            Add to watchlist
            <img src={watchlist} alt="" aria-hidden="true" />
        </Button>
    </div>

    <WebinarTitle as="h3">{webinar.title}</WebinarTitle>
    <Speaker as="p" class="speakers-fullname">{webinar.speakers[0].avl_speakers_id.fullname}</Speaker>

    <LinkButton class="to-webinar-detail" href={`/webinars/${webinar.slug}`}>
        View webinar
        <svg class="arrow" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.8125 0.21875C6.9375 0.0625 7.1875 0.0625 7.34375 0.21875L13.875 6.75C14.0312 6.90625 14.0312 7.125 13.875 7.28125L7.34375 13.8125C7.1875 13.9688 6.9375 13.9688 6.8125 13.8125L6.1875 13.2188C6.03125 13.0625 6.03125 12.8125 6.1875 12.6875L11.0312 7.8125H0.375C0.15625 7.8125 0 7.65625 0 7.4375V6.5625C0 6.375 0.15625 6.1875 0.375 6.1875H11.0312L6.1875 1.34375C6.03125 1.21875 6.03125 0.96875 6.1875 0.8125L6.8125 0.21875Z" fill="currentColor"/>
        </svg>
    </LinkButton>
</article>
```

### 4 Organisms ('lib/organisms')

The greatest of components. Great components like footer, header and logo-carousels are here. They are great works of molecules working together



## page.svelte files

Make sure that the page files are clean and dry

example:

```svelte
<script>
  import { HomeHero, HomeArrow, Carrousel, FAQ, HomeCallToAction, Partners, DoctorsUnited } from "$lib/index.js";


  let { data } = $props();
  let speakers = data.speakers;
  let content = data.content;
  let logos = data.logos;

</script>


  <HomeHero {content}/>
  <HomeArrow />
  <HomeCallToAction />
  <DoctorsUnited {content}/>
  <Carrousel {speakers}/>
  <FAQ {content}/>
  <Partners {logos}/>
```

## Important components

### Q&A section
The Q&A section is a rather complex component. The Q&A section is built from the files `lib/Assemblages/q-a.svelte` and `lib/Blocks/comment.svelte`.

Forms with method post are used for posting a comment, liking, and replying to a comment. All these actions are handled on the server. In the `+page.server.js` file of the page where the component is used.

On the server side, the data is extracted from the form. As little data as possible is sent via the form for security. The data from the database is fetched and with a PATCH (like) or a POST (comment/reply) the data is updated or added in the database.

If further work is done on this with a login system, you will need to change the user_id in the PATCH and POST to that of the logged-in user. Currently, it is hardcoded to user 1.

For a full explanation, see the [pull request](https://github.com/itsValyria/Oncollaboration/pull/6).

### Search
When you use the search bar, a query is made from your input. This query is added to the URL (/search/query), causing the website data to be fetched again. It then goes through a filter that checks if the title of the webinar/contouring contains this query; if so, it is passed on and this data is loaded in the search results.

There is a separate search page where you go and find the results. The search could be expanded, for example, by adding search tags to the contourings and webinars.

For a full explanation, see the [pull request](https://github.com/itsValyria/Oncollaboration/pull/1).

### Filter
The filter is used on the webinars and contourings pages. You can filter by one category, which is also how the client wants it.

In `+layout.server.js`, it checks what the category is that is passed via the filter. It defaults to "all".

To ensure you are filtering on the same page, you need to create a load function in the `+page.server.js` file of the page where the component is used. Here you use `parent`, which allows you to use the variables from `+layout.server.js`.

You check what the category is and filter the data, passing this new data so that only the filtered data is visible.

```
export async function load({ parent }) {
    return parent().then(({ contourings, category }) => {
        if (category !== 'all') {
            contourings = contourings.filter((contourings) =>
                contourings.categories?.some((cat) =>
                cat.avl_categories_id?.name?.toLowerCase() === category
                )
            );
        }

        return {
            contourings
        }
    })
}
```

You can read more about this in the pull requests: [filter](https://github.com/itsValyria/Oncollaboration/pull/5) and [filter results fix](https://github.com/itsValyria/Oncollaboration/pull/14)

## Other important parts

### Speaker slug page

On this page, the data is set up so that you find all the info about a particular speaker based on the name in the params.

You will also find a section where you see all webinars in which that speaker appears.

### Favorites page

In the server file of this page, you see which user id is fetched. If you change this number, you see a different user. There is also a second fetch that retrieves the favorites field of a particular user.

Everyone has their own favorite webinars, but there is not yet a function where they can add a webinar to their favorites themselves.

### Chapter and timestamp function

On the slug page of the webinars, you will find a chapter field where you can navigate through the chapters of a video. That data comes from the chapter field in the webinars table. It contains, for example, the timestamp in full seconds, which is added to such a chapter button so you can jump to that point in the video. In addition, you can also write a timestamp yourself within the comments (super handy at 1:10:11).

[chapter function](https://github.com/fdnd-agency/oncollaboration/issues/61?issue=fdnd-agency%7Concollaboration%7C63)  
[chapter PE](https://github.com/fdnd-agency/oncollaboration/issues/61?issue=fdnd-agency%7Concollaboration%7C65)  
[timestamp in comments](https://github.com/fdnd-agency/oncollaboration/issues/75#issuecomment-2858430311)
