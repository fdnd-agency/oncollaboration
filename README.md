# Oncollaboration
Oncollaboration is a platform where radiologists from Indonesia and The Netherlands can unite to share their knowledge, and 
discuss recent developments in their medical field.

**Release Candidate**  
[Live site](https://oncollaboration.agency.fdnd.nl)

## Table of contents
  * [Description](#description)
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Changelog](#changelog)
  * [Sources](#sources)
  * [License](#license)

> Semester 4 Team: [Lesley Reynolds](https://github.com/Jason2426), [Quincy Kapenga](https://github.com/kwinsie), [Jason Wong](https://github.com/Jason2426)
and [Jesse Leeuwerink](https://github.com/J3SS3HVA)

> Semester 3 Team: [Eva Haller](https://github.com/itsValyria), [Ryan Korver](https://github.com/Ryank2004), [Damian Romeijn](https://github.com/DamianR2004) & [Zoë Penner](https://github.com/zoepje)

## Description
There currently are multiple things you can do on this platform, like:
- Watch webinars
- Watch contourings
- Comment on webinars/contourings(also a timestamp functionality. example 1:10:11)
- Read information about a speaker
- Visit your own profile


### 📸 Home
<img width="300" alt="Oncollaboration Home iPhone SE" src="">


You can watch the website live here: 🌐 [oncollaboration.agency.fdnd.nl](https://oncollaboration.agency.fdnd.nl/) 

## Features
When building this website, we used SvelteKit 5. We utilized components and made the website dynamic with data from Directus. The database is built from 6 Multiple tables.
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

During the development, we worked with a mobile-first approach. We also applied Progressive Enhancement so that everyone can use this website.

## Installation
To work on this project, you can clone this repository. Once you have done this, you need to install all the necessary files using the command `npm install`. After that, you can run it on your localhost with `npm run dev`.

## Usage
Important: Make sure you check the [version-before-redesign](https://github.com/fdnd-agency/oncollaboration/tree/version-before-redesign) branch to see what kind of features we already have before we started building on the redesign.

You can browse through the webinars and contourings, leave comments on them, and search for specific ones. Additionally, you can filter them by category. Webinars are available to watch, and you can download the resources used for both the webinars and contourings.

## Changelog
### Sprint 14
This sprint, we made a start on this project on [repo](https://github.com/Ryank2004/Oncollaboration-Sprint-14). We worked on the user story: [Als gebruiker moet ik presentaties makkelijk kunnen terug vinden.](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/9) We focused heavily on creating the homepage and developing components that we will use in various places. Here is a list of issues we resolved during this sprint:
- [Het maken van de Navigatiebalk](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/15)
- [Bouwen van kaartjes voor de contourings](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/14)
- [Bouwen van preview kaartjes voor de webinars](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/13)
- [De search tektbalk en knop bouwen](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/18)
- [Bouwen van filter html css](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/21)
- [Verschillende webinars en contourings inladen uit de database voor op de homepage](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/25)
- [Scroll lijst bouwen voor de preview kaartjes in html/css](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/16)
- [Consider importing a nav component](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/51)


In addition to these issues, we have also started working on:
- [Logo voor Oncollaboration designen](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/45)
- [Featured article redesign](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/23)

There is still a lot that needs to be added to the website. All of these issues are listed on our [projectboard](https://github.com/users/Ryank2004/projects/5).

### Sprint 16
In sprint 16, we changed from [repo](https://github.com/itsValyria/Oncollaboration) and [projectboard](https://github.com/orgs/fdnd-agency/projects/35), so we can eventually pull our code to the FDND organization repo using a pull request. This sprint, we all focused on a component to make sure it works well, it is WCAG compatible and responsive. We also worked on smaller points of improvement for our site. This is a list of all the issues we worked on this sprint:

- [Search functie bouwen](https://github.com/fdnd-agency/avl/issues/25)
- [Filteren op categorie functie](https://github.com/fdnd-agency/avl/issues/26)
- [Q&A form voor de contourings en webinars.](https://github.com/fdnd-agency/avl/issues/34)
- [Footer voor desktop](https://github.com/fdnd-agency/avl/issues/33)
- [Featured article bouwen de desktop homepage](https://github.com/fdnd-agency/avl/issues/16)
- [Fetch urls met alleen die fields die we echt nodig hebben](https://github.com/fdnd-agency/avl/issues/43)
- [Error page bouwen](https://github.com/fdnd-agency/avl/issues/27)
- [Featured article design](https://github.com/fdnd-agency/avl/issues/20)

We updated our [projectboard](https://github.com/orgs/fdnd-agency/projects/35) with every task that still needs to be completed.

### Sprint 17
This sprint, we all did three creative code spikes. This is a list of all the spikes:

> Scroll driven animation:
- [Eef: Glitzy holographic surreal](https://github.com/fdnd-agency/avl/issues/78)
- [Ryan: 90s space psychedelia](https://github.com/fdnd-agency/avl/issues/72)
- [Zoë: Electrical pop-art](https://github.com/fdnd-agency/avl/issues/73)
- [Damian: Delayed Risoprint](https://github.com/fdnd-agency/avl/issues/74)

> View transition
- [Eef: Freaky experimental escapist](https://github.com/fdnd-agency/avl/issues/77)
- [Ryan: Glitzy digital dreamscape](https://github.com/fdnd-agency/avl/issues/79)
- [Zoë: Pretty hippy chique](https://github.com/fdnd-agency/avl/issues/75)
- [Damian: Magical Baroque](https://github.com/fdnd-agency/avl/issues/76)

> Christmas theme
- [Eef: Inspiring Pastel Christmas theme](https://github.com/fdnd-agency/avl/issues/80)
- [Ryan: Wintery Gothic Christmas theme](https://github.com/fdnd-agency/avl/issues/82)
- [Damian: Heavenly Gothic Christmas theme](https://github.com/fdnd-agency/avl/issues/83)

### Sprint 18
Sprint 18 was all about coming to a release candidate. We determined what needed fixing before pulling this whole project to the FDND Agency organization repository. Here is a list of issues we attended to:

- [Webbinar detail page](https://github.com/fdnd-agency/avl/issues/31)
- [Section "Watch Next"](https://github.com/fdnd-agency/avl/issues/87)
- [Breadcrumbs for detail page](https://github.com/fdnd-agency/avl/issues/92)
- [Description for the video](https://github.com/fdnd-agency/avl/issues/89)
- [Video header (video, title, views, date, categories)](https://github.com/fdnd-agency/avl/issues/91)
- [Sorting filter results](https://github.com/fdnd-agency/avl/issues/65)
- [New branding](https://github.com/fdnd-agency/avl/issues/86)
- [Section "About the speaker"](https://github.com/fdnd-agency/avl/issues/88)
- [Filteroption ALL fix](https://github.com/fdnd-agency/avl/issues/66)

### Sprint 19

In this sprint a new team started working on the project. What i did (Jesse Leeuwerink) is checking everything like the code base, contribute.md, handover.md etc. 

This sprint I did the following things 
- build a Profile page
- a speaker page
- made a chapter function in the webinar slug page
- and made a not fully working time stamp function

### Sprint 20

This time we worked on the following things

- finishing the timestamp function for the webinar slug page
- migrating the project from svelteKit to 5
- Starting to make redesign ideas
- Designing a prototype version of the Home page
- Building the redesign of the home page

## Sources
- [SvelteKit tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [Dynamic component](https://www.youtube.com/watch?v=7h6slC4HcpI)
- [Directus fields](https://docs.directus.io/app/data-model/fields.html)

## License
This project is licensed under the terms of the [MIT license](./LICENSE).
