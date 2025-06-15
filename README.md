# Bug Fix Showcase – Conference Ticket Generator

This project demonstrates my ability to refactor severely broken HTML, CSS, and JavaScript into a fully working, accessible, and design-accurate application.

## 🚨 Issues in Original Version

### HTML
- Invalid tags (`<formz>`, `<h9>`, `<blinker>`)
- Missing form structure and input semantics
- No proper button for form submission
- Non-interactive and misaligned fields
- Irrelevant elements (`<marquee>`, `<strike>`, `<input type=color>`)

### CSS
- Clashing colors (pink/red/orange/green on black)
- Broken box models, small unreadable font sizes
- Hidden or misaligned avatar and ticket layout
- No responsiveness or padding

### JavaScript
- Non-functional form selector (`#no-such-form`)
- Undefined variables and elements
- Logic errors (e.g. no form submit handling)
- No input validation or ticket rendering
- Non-standard and destructive behavior (e.g. `document.write('Oops')`)

## 🛠 Fixes I Implemented

- Rebuilt semantic HTML with valid tags and accessible form controls
- Designed responsive layout using Flexbox + Grid
- Recreated original design from preview image using proper colors, spacing, and clip-paths
- Implemented complete form validation (name, email, GitHub handle, image file)
- Dynamically generates styled ticket with avatar
- Ensured full keyboard navigation and screen reader support

## 🧰 Tech Stack

- HTML5, CSS3
- Vanilla JavaScript
- Mobile-first responsive design
