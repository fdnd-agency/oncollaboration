# How the code base works
This project is built with SvelteKit 4 and uses Directus as the CMS.

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
All documents that work with dynamic code are in the `src` folder. All static documents are in the `static` folder.

`static` contains the folders `css`, `fonts`, and `images`.

`src` is divided into `lib`, which contains reusable documents, `routes`, where each folder is a route name, and `app.html`, which contains the head for all files.

In `lib`, we used the LEGO method to organize the components.
We also have a separate folder for all JavaScript files. In `index.js` we import all components, so you only need one line of code to import multiple components.

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
