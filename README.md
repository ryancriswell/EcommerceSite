# EcommerceSite
HTML Lads Ecommerce Site for CSCD 378

## Running

This is a react app created using create-react-app.

* In your terminal of choice, navigate to the root folder, `.../EcommerceSite/App`
* With npm installed, execute `npm insall react-scripts` to fetch the necessary Node components.
* Inside the App directory, execute `npm start` to run the local server.
* In your browser, navigate to `http://localhost:3000/` if it doesn't automatically open

## Accessibility Features

The site currently implements a few accessibility features. On each page, pressing tab once when the page loads allows the user to skip to the main  content, skipping the navigation panel. The icons used for the search, user account, and cart provide additional information to a screen reader, allowing the icons to be read aloud as text. `prefers-reduced-motion` is implemented for the animations on the nav bar. `aria-hidden` is used on some decorative elements to prevent decorative elements from interfering with navigation by caret or audio.
