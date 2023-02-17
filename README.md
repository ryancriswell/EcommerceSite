# EcommerceSite
HTML Lads Ecommerce Site for CSCD 378

Currently our files are just HTML/CSS so to view you can just open locally in the browser. We have navigation in between pages via buttons so you'll only have to open one and you can navigate to the others inside the website. We are working on learning React which will help a lot in creating reusable components and we'll have to revise the HTML when we implement react, but for now we get the base layout of the site done. 

## Accessibility Features

The site currently implements a few accessibility features. On each page, pressing tab once when the page loads allows the user to skip to the main  content, skipping the navigation panel. The icons used for the search, user account, and cart provide additional information to a screen reader, allowing the icons to be read aloud as text. `prefers-reduced-motion` is implemented for the animations on the nav bar. `aria-hidden` is used on some decorative elements to prevent decorative elements from interfering with navigation by caret or audio.