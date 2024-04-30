To run the project

First, you need to clone the repository from GitHub. You can find the clone URL on the repository page on GitHub;
You need to install dependencies run 'npm instal';
Once the dependencies are installed, you can start the Vite development server: 'npm run dev'
open this link (http://localhost)
Includes:

- User can enter repo URL in the input on top of the page and press "Load". For example: https://github.com/facebook/react.
- App loads issues for the repo using Github API.
- App contains 3 columns:
  - ToDo (all new issues)
  - In Progress (opened issues with assignee)
  - Done (closed issues)
  - User able to drag-n-drop between the columns and change the order of issues.
  - Current issue position (column and order) store between search and browser sessions.When the user loads issues for Repo1 -> Repo2 -> Repo1 he see all changes he did for Repo1.
  - User able to visit the profile of the owner of the repo and visit the repo as well by links under the input.

Technical Considerations: • React, TypeScript for building the components and managing state. • Redux toolkit as a state manager. • Chakra UI for styling, application is responsive. • Vitest and React Testing Library for testing.

- [DEMO LINK]( https://ViktorAfk.github.io/kanban-test-task/) 
