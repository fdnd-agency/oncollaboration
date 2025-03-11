## Creating a new feature branch

We work with a certain format for our feature branches on this project, they are typically formulated in this format:

`cool-word-#69`

Spaces have to be replaced. with a `-` and we mention the issue `#XX` that corresponds to the branch.

A few examples:
- `view-transition-#69`
- `hover-states-#42`
- `webinar-cards-#99`
- etc.

## How to commit

We have a certain way of writing commit messages on this project, the commit messages are typically formulated in this format:

`[type]: (description)`

In the description, make you could close the issue you're working on if it's fixed in this commit.

A few examples:

- `Hover states: created navigation hover states`
- `View transition: added view transition`
- `View transition: styled view transition, fixed #69`
- etc.

## How to make pull requests

We also have a certain way of writing a pull request, this is documented in the `pull_request_template.md`. Take a look there sometime! ;)

These are the main focuses in a pull request:
- What does this pull request change?
- How has this been tested?
- Images (typically for UI changes)
- How to review

## Code conventions & principles in this project
> Determined at September 23rd

### General
- Use **English** for all code, comments, and commit messages.
- Work **mobile-first** to ensure responsive design.
- No **CSS nesting**, as it causes issues in Svelte when used with media queries.

### Code Formatting
- Use **2 spaces** for indentation
- Write **complex code** with explanatory comments so someone else can also understand it.

### JavaScript
- Use **camelCase** for variable and function names.

###  CSS
- Use a single CSS file for global styles and custom properties
- Define reusable properties for colors, spacing, typography, etc with logical names

### Components
- Store all components in a single folder (e.g., src/lib/) to maintain organization.
- Each component should have its JavaScript and styles in the same file when possible.
