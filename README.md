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
<img width="300" alt="OnCollaboration Home iPhone SE" src="https://github.com/user-attachments/assets/62edf36e-d55e-4168-a511-5cc217003b9c">
<img width="600" alt="OnCollaboration Home MacBook Pro" src="https://github.com/user-attachments/assets/178795c5-86a1-4cfe-a511-229e72a37c55">

### 📸 Webinars
<img width="300" alt="OnCollaboration Webinars iPhone SE" src="https://github.com/user-attachments/assets/6dda7889-13e1-405d-821e-cbbbbdc824fa">
<img width="600" alt="OnCollaboration Webinars MacBook Pro" src="https://github.com/user-attachments/assets/ebf2c9b6-2710-47c3-9b0a-525e72bf9a72">

You can watch the website live here: 🌐 [oncollaboration.agency.fdnd.nl](https://oncollaboration.agency.fdnd.nl/)) 

## Features
Bij het bouwen van deze website hebben we gebruik gemaakt van SvelteKit. We hebben gebruik gemaakt van componenten en we hebben de website dynamisch gemaakt met data uit Directus.
De database is opgebouwt uit 6 tabellen, waarvan je het datamodel [hier](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/24#issuecomment-2375264843) kunt vinden:
- [Webinars](https://fdnd-agency.directus.app/items/avl_webinars)
- [Speakers](https://fdnd-agency.directus.app/items/avl_speakers)
- [Contourings](https://fdnd-agency.directus.app/items/avl_contourings)
- [Comments](https://fdnd-agency.directus.app/items/avl_comments)
- [Categories](https://fdnd-agency.directus.app/items/avl_categories)
- [Users](https://fdnd-agency.directus.app/items/avl_users)

Tijdens het bouwen hebben we mobile first gewerkt. Ook hebben we Progressive Inhancement toegepast zodat iedereen deze website kan gebruiken.

## Installation
Om aan dit project te werken kun je deze repo clonen. 
Zodra je dit hebt gedaan moet je alle benodigde bestande installeren met het comando `npm install`.
Als je dit heb gedaan kun je het op je localhost runnen met `npm run dev`.

## Usage
Op de website kun je scrollen door de webinars en contourings. Als het uiteindelijk af is kun je de webinars bekijken en vragen in de comments achterlaten. Ook kun je met je collegas de contourings bespreken.

## Changelog
### Sprint 14
Deze sprint hebben we een start gemaakt aan dit project. We hebben gewerkt aan de userstory: [Als gebruiker moet ik presentaties makkelijk kunnen terug vinden.](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/9) We hebben ons heel erg gefocust op het maken van de homepage, en het maken van componenten die we op verschillende platsen gaan gebruiken. Hier is een lijst van issues die wij hebben opgelost deze sprint:
- [Het maken van de Navigatiebalk](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/15)
- [Bouwen van kaartjes voor de contourings](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/14)
- [Bouwen van preview kaartjes voor de webinars](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/13)
- [De search tektbalk en knop bouwen](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/18)
- [Bouwen van filter html css](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/21)
- [Verschillende webinars en contourings inladen uit de database voor op de homepage](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/25)
- [Scroll lijst bouwen voor de preview kaartjes in html/css](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/16)
- [Consider importing a nav component](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/51)

Naast deze issues zijn wij ookal begonnen aan:
- [Logo voor Oncollaboration designen](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/45)
- [Featured article redesign](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/23)

Er moet nog een hele hoop toegevoegd worden aan de website. Al deze issues staan in ons [projectboard](https://github.com/users/Ryank2004/projects/5).

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
