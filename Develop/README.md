# Text Editor PWA

## Description

This is a Progressive Web Application (PWA) text editor that allows users to create and save notes or code snippets with or without an internet connection. The application features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

```sh
npm install
Sure, here is the cleaned-up 

README.md

 file without the duplicate content and grading requirements:

```markdown
# Text Editor PWA

## Description

This is a Progressive Web Application (PWA) text editor that allows users to create and save notes or code snippets with or without an internet connection. The application features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

```sh
npm install
```

## Usage

To start the development server, run the following command:

```sh
npm run start
```

To build the project for production, run the following command:

```sh
npm run build
```

Open your browser and navigate to `http://localhost:8080/` to use the application.

## Features

- Offline functionality
- IndexedDB for data storage
- Service Worker for caching
- PWA manifest for installation

## Technologies

- JavaScript
- Webpack
- Babel
- IndexedDB
- Workbox
- HTML
- CSS

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Questions

If you have any questions about the project, please open an issue or contact me directly at [your-email@example.com](mailto:your-email@example.com).

---

## User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application
- WHEN I open my application in my editor
  - THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
  - THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
  - THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
  - THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
  - THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
  - THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
  - THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
  - THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
  - THEN I download my web application as an icon on my desktop
- WHEN I load my web application
  - THEN I should have a registered service worker using workbox
- WHEN I register a service worker
  - THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Render
  - THEN I should have proper build scripts for a webpack application

## Mock-Up

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](path/to/animation.gif)

The following image shows the application's manifest.json file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](path/to/manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](path/to/service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](path/to/indexeddb.png)
```

Feel free to customize this `README.md` file with additional details specific to your project, such as screenshots and links to the deployed application.
Feel free to customize this `README.md` file with additional details specific to your project, such as screenshots and links to the deployed application.

Similar code found with 1 license type
