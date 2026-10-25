# My To-Do List

A simple, responsive to-do list for capturing tasks and keeping your day focused. Add tasks, remove them when they are done, and keep the list only for the current visit.

## Features

- Add tasks with the **Add Task** button or the Enter key.
- Trims surrounding whitespace and prevents empty tasks.
- Delete tasks individually.
- Shows an empty state and an updated task count.
- Displays task text safely as text rather than interpreting it as HTML.
- Responsive layout for mobile, tablet, and desktop.
- No frameworks, backend, or browser storage.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
todo-list/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Download or clone this project.
2. Open `index.html` directly in a modern web browser.

No build step, package installation, or web server is required. An internet connection is only needed if you want to load the optional Google Fonts; system fonts are used as a fallback.

## Data and refreshing

Tasks are stored only in a JavaScript array in the current page session. They are not saved to local storage, session storage, cookies, a database, or a server. Refreshing or closing the page clears the task list.

## Deploy to GitHub Pages

1. Create a GitHub repository and add the four project files to its root (or to a `todo-list` folder if publishing from that folder).
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the files and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the site and open the URL shown in the Pages settings.
