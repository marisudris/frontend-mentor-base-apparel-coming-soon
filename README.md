# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/my-solution.png)

### Links

- Solution URL: [GitHub]()
- Live Site URL: [GitHub Pages]()

## My process

First - came up with a proper HTML structure that is both semantic, accessible and provide hooks
for CSS styling. Here it required some rewrites and refactoring until I settled on the best structure
that satisfies the layout requirements for both mobile and desktop.
Afterwards I did the mobile layout first and the the desktop - in both cases doing the major layouts
first and small details later.
After the layout styles were finished, I wrote the script for email validation, relying on regex. Additionally provided some behavior for the best UX - like hiding warnings on new input.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Responsive images can be tricky and sometimes it requires careful studies on how to provide the best layout behavior.

### Continued development

I'll keep studying responsive patterns for both Grid and Flex, and gonna do a deep dive in responsive images.

### Useful resources

- [Responsive Images](https://web.dev/learn/design/responsive-images/) - a great resource for more in-depth look at responsive images.

## Author

- Frontend Mentor - [@marisudris](https://www.frontendmentor.io/profile/marisudris)
- GitHub - [@marisudris](https://www.github.com/marisudris)
