# Gaul Brothers Construction: Website

A fast, modern static website for **Gaul Brothers Construction**, a general contractor and custom millwork shop in Union City, NJ. It needs no build step: open `index.html` in a browser, or host the folder on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Sections
- **Hero:** headline, calls to action and quick company highlights
- **Services:** general contracting, millwork, cabinetry, finish carpentry, renovations, restaurant & commercial
- **About:** company story, what sets the company apart and a 4-step process
- **Founders:** profile cards for the two brothers
- **Projects:** a filterable portfolio (Residential, Restaurants, Commercial, Millwork). Each project opens a detail window.
- **Contact:** phone, email, address, hours, an embedded map and an estimate request form with validation

## File layout
```
index.html            Page markup
assets/css/styles.css All styling (colors and fonts are set at the top in :root)
assets/js/projects.js Portfolio data (edit this to add or change projects)
assets/js/main.js     Navigation, scroll effects, project filters and window, contact form
assets/img/           Favicon and wood-grain texture
```

## ⚠️ Content to confirm or replace before launch
Some details came from public business listings. The rest is placeholder copy.

| Item | Status | Where |
|---|---|---|
| Address: 808 21st St, Union City, NJ 07087 | From public listings. Please confirm | `index.html` (contact + footer) |
| Phone: (201) 223-5865 | From public listings. Please confirm | `index.html` |
| Francis X. Gaul, Co-Founder & President | Name from public records. Title and bio are placeholders | `index.html` → `#founders` |
| John Gaul, Co-Founder & Head of Millwork | Name confirmed. Title and bio are placeholders | `index.html` → `#founders` |
| Email `info@gaulbrothers.com` | **Placeholder** | `index.html`, `assets/js/main.js` (`CONTACT_EMAIL`) |
| Founded 2000 | Based on a 2000 NJ corporate filing. Please confirm | hero stats |
| Business hours, service area | **Placeholder** | `index.html` |
| Olive Garden (Darden Restaurants) and high-end NYC restaurant projects | Real client work. Add restaurant names, locations, dates and photos (and check you have permission to name clients) | `assets/js/projects.js` |
| 4 other projects (homes, office) | **Sample placeholders** | `assets/js/projects.js` |
| Founder and project photos | Illustrations/initials until real photos are added | see below |

## Adding real photos
- **Projects:** put images in `assets/img/projects/`, then set `image: "assets/img/projects/your-photo.jpg"` on the project in `assets/js/projects.js`.
- **Founders:** inside each `.founder-photo` div in `index.html`, replace the `<span>` with `<img src="assets/img/founders/francis.jpg" alt="Francis X. Gaul">`.

## Getting contact-form emails
By default the form opens the visitor's email app with the message filled in. To receive submissions directly in your inbox:
1. Create a free form at [Formspree](https://formspree.io) (or a similar service).
2. Paste the endpoint into `FORM_ENDPOINT` at the top of `assets/js/main.js`.

## Publishing with GitHub Pages
In the repository go to **Settings → Pages**, choose this branch and the `/ (root)` folder, then save.
