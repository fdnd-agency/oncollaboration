# Oncollaboration
Oncollaboration is a platform where radiologists from Indonesia and The Netherlands can unite to share their knowledge, and 
discuss recent developments in their medical field.

## Table of contents
  * [Description](#description)
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Changelog](#changelog)
  * [Sources](#sources)
  * [License](#license)

## Description
There currently are multiple things you can do on this platform, like:
- Watch webinars
- Watch contourings
- Comment on webinars/contourings

### 📸 Home
<img width="300" alt="Oncollaboration Home iPhone SE" src="https://github.com/user-attachments/assets/b51ca67e-25a2-4f80-93fd-f761a95d71a9">

<img width="800" alt="Oncollaboration Home MacBook Pro" src="https://github.com/user-attachments/assets/ab754959-790a-41c2-9d9a-1d92b747a21a">

### 📸 Webinars
<img width="300" alt="Oncollaboration Webinars iPhone SE" src="https://github.com/user-attachments/assets/6a86a6fd-dc47-4822-9398-67a08f010f9e">

<img width="800" alt="Oncollaboration Webinars MacBook Pro" src="https://github.com/user-attachments/assets/6f99a009-15bc-44ae-9adf-fe3eb08ecf6f">

### 📸 Contourings
<img width="300" alt="Oncollaboration Contourings iPhone SE" src="https://github.com/user-attachments/assets/a031715c-9ce5-4aa4-88c7-d360a78a44e3">

<img width="800" alt="Oncollaboration Contourings MacBook Pro" src="https://github.com/user-attachments/assets/82a21d8c-687e-4eab-ab73-adb353f8db16">

### 📸 Commentsection
<img width="400" alt="Oncollaboration Commentsection" src="https://github.com/user-attachments/assets/80a2be30-12c2-4536-a663-641cf9c97cf7" />

You can watch the website live here: 🌐 [oncollaboration.agency.fdnd.nl](https://oncollaboration.agency.fdnd.nl/) 

## Features
When building this website, we used SvelteKit. We utilized components and made the website dynamic with data from Directus. The database is built from 6 tables, and you can find the data model [here](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/24#issuecomment-2375264843):
- [Webinars](https://fdnd-agency.directus.app/items/avl_webinars)
- [Speakers](https://fdnd-agency.directus.app/items/avl_speakers)
- [Contourings](https://fdnd-agency.directus.app/items/avl_contourings)
- [Comments](https://fdnd-agency.directus.app/items/avl_comments)
- [Categories](https://fdnd-agency.directus.app/items/avl_categories)
- [Users](https://fdnd-agency.directus.app/items/avl_users)

During the development, we worked with a mobile-first approach. We also applied Progressive Enhancement so that everyone can use this website.

## Installation
To work on this project, you can clone this repository. Once you have done this, you need to install all the necessary files using the command `npm install`. After that, you can run it on your localhost with `npm run dev`.

## Usage
You can browse through the webinars and contourings, leave comments on them, and search for specific ones. Additionally, you can filter them by category. Webinars are available to watch, and you can download the resources used for both the webinars and contourings.

## Changelog
### Sprint 14
This sprint, we made a start on this project. We worked on the user story: [Als gebruiker moet ik presentaties makkelijk kunnen terug vinden.](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/9) We focused heavily on creating the homepage and developing components that we will use in various places. Here is a list of issues we resolved during this sprint:
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
In sprint 16, we changed from repo and projectboard, so we can eventually pull our code to the FDND organization repo using a pull request. This sprint, we all focused on a component to make sure it works well, it is WCAG compatible and responsive. We also worked on smaller points of improvement for our site. This is a list of all the issues we worked on this sprint:

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
- [Zoë: Heartwarming Geometrical Christmas theme](https://github.com/fdnd-agency/avl/issues/81)
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

## Sources
- [SvelteKit tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [Dynamic component](https://www.youtube.com/watch?v=7h6slC4HcpI)
- [Directus fields](https://docs.directus.io/app/data-model/fields.html)

## License
This project is licensed under the terms of the [MIT license](./LICENSE).
