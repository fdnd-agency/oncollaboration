# Contributing.md

## Version-before-redesign branch
When working on this project we strongly advice you to open and run this branch. So you can see the previous design with all the functionalities made prior. This will give you a better understanding of how it was build and how to implement it for the redesign for Oncollaboration.

[first design](https://github.com/fdnd-agency/oncollaboration/tree/version-before-redesign)

## How to make new branches ?
-	When making  a new branch Use kebab-case when naming a branch
-	Branches are created for fixes and features with clear, logical names. It should be obvious what the branch is for. Whether it’s a fix, feature, doc, style, refactor, perfection, chore or test.

**Examples of branch names:**

Feature/generic-button-component or fix/responsive-card-layout

## Commits

## Committing strategy

Committing often is very useful. It’s useful to commit every time you write code that you want to keep. You can even use temporary commits with messages such as "wip" (work in progress)." - [Version Control Tips door Spyros Argalias](http://programmingduck.com/articles/version-control-commit-early-push-once)

### Conventional Commits

At FDND Agency, because of Semantic Versioning, we use conventional commits. Conventional commit is a specification, a set of rules that have to be followed when writing commit messages.

**Allowed Commit types**

o	build: ... Changes that affect the build system or external dependencies

o	chore: ... Changes to the build process or auxiliary tools and libraries such as documentation generation

o	ci: ... Changes to CI configuration files and scripts (GitHub Actions, netlify.toml)

o	docs: ... Changes to documentation, eg: Readme.md, Handover.md or Figma files or design rationale in the Wiki

o	feat: ... Implementing a new feature

o	fix: ... Fix for a bug, style or layout issue

o	perf: ... A code change that improves performance

o	refactor: ... A code change that neither fixes a bug nor adds a feature but improves structure or readability

o	style: ... Changes that affect readability but not the working of the code (source formatting, adding tabs or newline)

o	test: ... Adding missing or correcting existing tests

**Reference issues in commits**

Add the corresponding #issue-number to your commit messages for easy reference.

## Gitmoji

Optionally use the use gitmoji in commit messages commit strategy as a visual add-on for conventions commits 😍
Examples
A few examples for Frontend changes from our very own agency
o	refactor: Deduplicated marker popup creation to helper function 🧑‍💻
o	style: Formatting toegepast in src bestanden #91
o	feat: animals uit de database worden nu opgehaald en weergegeven in de dropdown #213
o	fix: header font maat veranderd 🐛 #394
Sources: Mastering commit messages
Sources
o	Automating Versioning and Releases Using Semantic Release
o	use gitmoji in commit messages
## Pull-request
We use a pull Request template which you automagically get when creating a PR in one of our repositories.
Please make sure you follow the following rules:
•	Write small PR's
•	Review your own PR first
•	Provide context and guidance
## Code conventions
For a smooth collaboration and to ensure a high-quality, pleasurable, accessible, and performant final product in Sprint 20.
•	  	Use functional layering for organizing the component library: bricks, blocks, constructions, and assemblies.
•	Develop mobile-first.
•	Use kebab-case for HTML and CSS.
•	Use camelCase in JavaScript.
•	Add a blank line between sections of code to improve readability.
•	Use semantic HTML where possible. Use
and only when no better option exists.
•	Add comments to complex code where necessary—or create an issue labeled documentation to keep the codebase clean.
•	When selecting multiple CSS classes with styling, write the class names on separate lines.
•	Preferably use EM's for values not PX. (Forgotten convention, added 23-05) 
Best practices
•	Follow DRY principles / Build using component-based architecture.
•	After creating a component, immediately test it for accessibility, performance, and responsiveness. Document the results in the pull request.
•	Pull requests should be detailed like this one -> Example Pull Request. Include a description of what the code does or adds, test results, before-and-after screenshots, and how it should be reviewed.
•	Every pull request must have at least two reviewers who critically evaluates it and provides constructive feedback when needed.
•	We use Poker Planning and/or a roadmap to assign weight/size to issues. This helps estimate how long tasks will take and allows us to define realistic start and end dates.
•	Make micro commits.


