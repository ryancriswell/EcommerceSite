# EcommerceSite
HTML Lads Ecommerce Site for CSCD 378

<div style="text-align:center">
    <img alt="Lads Coffee Logo" width="33%" src="App/public/images/logo.png" />
</div>

## Running

This is a react app, executed through NodeJS. As such, `node` and `npm` are required.

* In your terminal of choice, navigate to the root folder, `.../EcommerceSite/App`
* With npm installed, you may have to install these packages if you don't have them already:
* execute `npm install react-scripts` to fetch the necessary Node components.
* `npm i @react-google-maps/api`, 
* `npm i react-router-dom`
* Inside the App directory, execute `npm start` to run the local server.
* In your browser, navigate to `http://localhost:3000/` if it doesn't automatically open

## Features

* A functional (though locally stored) cart and shop are available.
* A maps page is implemented, which shows the use of the Google Maps API to list store locations.
* A footer and header with commonly accessed features and a complete site map are present on every page, making navigation from one page to any other intuitive.
* Reactive elements through animations make the page feel dynamic and interactive.

Accessibility

* On each page, pressing tab once when the page loads allows the user to skip to the main  content, skipping the navigation panel.
* The icons used for the search, user account, and cart provide additional information to a screen reader, allowing the icons to be read aloud as text.
* `prefers-reduced-motion` is implemented for all the animations and transitions on the site.
* `aria-hidden` is used on some decorative elements to prevent decorative elements from interfering with navigation by caret or audio.
* Relative sizing is used for all text elements on the page, meaning the site will respond to users with different font size preferences.

![Full Screenshot](Documents/Full%20Screenshot.png)