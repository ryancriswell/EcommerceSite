# EcommerceSite
HTML Lads Ecommerce Site for CSCD 378

## Running

This is a React app, however we currently use on-the-fly jsx compilation via Babel for ease of development. This still requires a local http server of your choice, for simplicity I use Python http.server. There is nothing python-specific about our app, and any method of hosting the root `EcommerceSite` folder locally will work.

* In your terminal of choice, navigate to the root folder, `EcommerceSite`
* With python3 installed, execute `python -m http.server` (http.server is an included module and does not need to be installed separately)
* In your browser, navigate to `http://localhost:8000/src/index.html`

## Accessibility Features

The site currently implements a few accessibility features. On each page, pressing tab once when the page loads allows the user to skip to the main  content, skipping the navigation panel. The icons used for the search, user account, and cart provide additional information to a screen reader, allowing the icons to be read aloud as text. `prefers-reduced-motion` is implemented for the animations on the nav bar. `aria-hidden` is used on some decorative elements to prevent decorative elements from interfering with navigation by caret or audio.