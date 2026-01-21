# Oncollaboration

## Table of contents
  * [Description](#description)
  * [Techniques](#techniques)
  * [Installation](#installation)
  * [User Manual](#user-manual)
  * [Installation](#installation)
  * [Dev](#dev)
  * [Changelog](#changelog)
  * [Teammembers](#team-members)
  * [Sources](#sources)
  * [License](#license)


## Project Description

Oncollaboration is a website where Dutch and Indonesian radiologists can exchange knowledge. The project was established because Dutch radiologists possess a more advanced level of expertise and wish to share this knowledge with their Indonesian counterparts. The platform provides extensive information about Oncollaboration and its webinars—online radiology meetings that can be viewed on demand. Additionally, a feature has been integrated that allows users to ask questions to the webinar speakers. The site also includes information about the various hospitals involved in setting up this project.



## Techniques

### Common techniques:

As is expected we've used some techniques that span across all pages. We have used these to make this website:
![SvelteKit 5](https://img.shields.io/badge/SvelteKit-5-FF3E00?style=flat&logo=svelte&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=flat&logo=svelte&logoColor=FF3E00)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![Directus](https://img.shields.io/badge/Directus-64f?style=flat&logo=directus&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)



## Installation
1. Open a code editing software
2. Make a branch from the Dev branch so you'll won't touch the main project
3. Clone the repository's code from dev and make sure to click 'contribute for my own purposes.'
4. For the command line you enter the keys " ` and CTRL "
5. Type "npm install" to download the dependencies
6. Type "npm run dev" so you can start the project
7. Have fun with Sveltekit 



## User Manual
 
### Header and Footer
 
The header and the footer on the website will be available on every page of the website. But now the question is how it can be used? The logos that are used in the header and footer are both a use of showing onfwhich collaboration it is and serve as a way as a home button. There is also a navigation menu. These links let you travel throughout the website and serve as a central point for navigation. Currently the pages that are covered with content thus far are the homepage, webinars page and the webinars detail-page. As the last similarity on the header and footer there is the language button. This feature isn't implemented yet, but this will be able to change the language to view the website in.
 
Now for the difference in the footer and header. The footer also has contact information which can be used to contact either the AVL or Kemenkes. The phone numbers used in the contact info can be called directly if you are using a mobile phone.
 
### Homepage
 
The homepage of Oncollaboration serves as the intro of this website. You can read this page through to learn more about what Oncollaboration is about and a few links to other pages. On the website you can scroll down and read some more about the webinars and visit the page. Next to it is the page about the contourings with the same style explaining in some text with a (not yet working) link that connects to that page. Scroll further down and we see the partnerships that make this global collab of doctors possible with their logos in a moving carousel. Finally we have some of the doctors who are speakers on the webinars. You can use these profile cards as a way to find a doctor you'd like to hear more about. Simply click the "view speakers" button to see which webinars they've had thus far (still in progress.)
 
### Webinars page
 
The webinars page is one of the core-pages in this project. This page is used to sort, filter(not yet available) and search(not yet available) for the webinars someone would like to see. If you scroll down to see the results you'll see the webinars you've searched for. With these webinar cards there is some more information on them as well for better clarification. On the webinar card is: the category, the time the webinar takes, adding it to your watchlist, the title of the webinar, the doctor giving the webinar and the view webinar button
 
### Webinars detail page
 
The webinars detail page is the page where you can watch the webinar itself. On this page you can watch the webinar with full controls of viewing, the description of the webinar, the categories in which this webinar belongs, subtitles/transcript that is being said in the webinar, the opportunity to ask a question to a doctor seeing this post and the ability to save the speaker to see the other webinars this doctor might have given as well.
 
### Further pages
 
due to the ongoings of our study the contourings, speakers, profile and more about oncollaboration pages have not yet been made. This will be a feature for the next group working on this exciting project.



## Dev
[Dev_site](https://dev-coll-2526.netlify.app/)



## Changelog

### Sprint 14
During this sprint, we started the project in a new branch called "dev-bak." Our main focus was on creating a solid foundation, setting everything up, and drafting a debriefing. Additionally, we worked on the design using wireframes, wireflows, and a stylesheet, and we began defining the epics and user stories. We also made a start on the initial code.

### Sprint 15
In this sprint, the focus was on developing the homepage, webinar page, detail page, header, and footer. Various issues were resolved, and a solid data model was established. Finally, we transitioned from the "dev-bak" branch to the main "dev" branch.

### Sprint 16
During this sprint, we built components according to Atomic Design principles and implemented container queries instead of media queries. In addition, we started working on the filter system and the logo carousel, after which we incorporated various points of feedback.

### Sprint 17
In this sprint, we completed all three code spikes. The first focused on GSAP, the second on a new CSS technique from 2025, and for the third, we were free to choose a technique as long as it aligned with the client's theme. Furthermore, we processed feedback and continued development on the filter system.

### Sprint 18
In this sprint, our primary focus was on project delivery. We identified remaining tasks, resolved outstanding issues, and incorporated final feedback. Additionally, we developed a few more components.



## Linking the documents
 
If you are curious as to how we came to some of the conclusions in this website there might be some interesting links for you in these documents.
 
## WARNING
 
The language in which these documents have been written is in the native Dutch tongue. For translation into English or your own language you'll have to consult a translator or use a translator app or website.
 
### Teamwork
 
As a team we have established some rules that keeps us going throughout the sprints. If you wish to work in the fashion of us check out the [team rules](https://github.com/fdnd-agency/oncollaboration/blob/dev/CONTRIBUTIONS.md#teamafspraken). In these team rules there is also a rule if there is a data leak or something that goes horribly wrong, look into the [Post-mortem](https://github.com/fdnd-agency/oncollaboration/blob/dev/CONTRIBUTIONS.md#wat-te-doen-bij-post-mortem)
 
To effectively work as team and have a consistent work flow here are a few rules to keep to heart
 
- [Commits](https://github.com/fdnd-agency/oncollaboration/blob/dev/contributions.md#commits) are essential for updating your code for this project.
- [Pull requests](https://github.com/fdnd-agency/oncollaboration/blob/dev/contributions.md#pull-requests) are the way to make you code from your local branch to the dev branch.
- [Branch naming](https://github.com/fdnd-agency/oncollaboration/blob/dev/contributions.md#branch-benaming) is something that is important for a logical 'tree.' Your branches should be named logically so that you'll be able to clearly see which teammemeber works on which feature.
- [Component library sorting](https://github.com/fdnd-agency/oncollaboration/blob/dev/contributions.md#component-library-indeling) is a way for sorting your components in a logical order. We have chosen for [atomic design.](https://atomicdesign.bradfrost.com/chapter-2/)
- [Coding conventions](https://atomicdesign.bradfrost.com/chapter-2/) are a way to write your own code. They are a subset of rules which the members on this project must follow.
 
### Design
 
In this project we have used several colours and fonts. To see and use these styles look into some of these documents.
 
- [Primary, Accent and neutral colours](https://github.com/fdnd-agency/oncollaboration/blob/dev/CONTRIBUTIONS.md#primaire-accenten-en-neutrale-kleuren)
- [Design explanation](https://github.com/fdnd-agency/oncollaboration/blob/dev/README.md#design) note: available in English
- [Global CSS](https://github.com/fdnd-agency/oncollaboration/blob/dev/src/lib/global.css) used in the entire site.


## Team Members

* Sidney - Developer / Designer / Scrum-Master: https://github.com/Sidopjescherm
* Nadia - Developer / Designer / Scrum-Master: https://github.com/nadiachaja
* Kyan - Developer / Designer / Scrum-Master: https://github.com/KyanTG

## Sources
- [SvelteKit tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [Dynamic component](https://www.youtube.com/watch?v=7h6slC4HcpI)
- [Directus fields](https://docs.directus.io/app/data-model/fields.html)

## License
This project is licensed under the terms of the [MIT license](./LICENSE).
