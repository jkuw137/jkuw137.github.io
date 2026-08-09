# Joe Kuwano — Portfolio Site

A small, two-language portfolio site: mechanical engineering projects on one
side, hand-drawn illustrations on the other, wrapped in a quiet night-sky
theme.

## Files

```
index.html          the page structure — you shouldn't need to touch this
style.css            all the visual styling
content.js           ✦ ALL of the site's text (English + Japanese) lives here
script.js             language switching, nav, starfield, scroll effects
assets/art/           put your hand-drawn illustrations here
assets/img/           put a hero banner / project thumbnails here (optional)
assets/resume/        put your résumé PDF here
```

## Editing the text

Everything you read on the page — headings, project descriptions, nav
labels, both languages — lives in **`content.js`**. Open it, find the line
you want to change, edit the text between the quote marks, and save. No
build step, no other files to touch. Refresh `index.html` in your browser
to see the change.

The English text is under `en: { ... }` and Japanese under `ja: { ... }`.
Each line has a short label (like `proj1Desc`) that matches a spot on the
page — you don't need to understand it, just find matching English/Japanese
pairs and edit both if you change the meaning of one.

A couple of entries (`heroTitle`, `aboutHeading`) contain small bits of
HTML like `<br>` for a line break — leave those tags where they are, just
edit the words around them.

**A note on the Japanese text:** it's a solid first pass, but it hasn't
been checked by a native speaker. If you know someone who reads Japanese,
it's worth a quick proofread before this goes live — especially the more
conversational lines (About, Contact).

## Adding your artwork

The Sketchbook section starts with six empty placeholder slots. To fill
one in:

1. Put your image file in `assets/art/` (e.g. `assets/art/piece-01.jpg`).
2. In `index.html`, find the `<div class="art-slot">` you want to replace
   and swap it for:
   ```html
   <figure class="art-piece">
     <img src="assets/art/piece-01.jpg" alt="Describe the piece">
     <figcaption>Illustration title — medium, year</figcaption>
   </figure>
   ```
3. Repeat for each piece. Keep any slots you haven't filled yet as
   placeholders, or delete them if you'd rather have fewer than six.

The instructions are also left as a comment directly above the art grid
in `index.html`.

## Adding project thumbnails

Each project card shows a small ✦ patch icon by default. To use a photo,
render, or diagram instead, put an image in `assets/img/` and add this as
the first line inside the relevant `<article class="project-card">`:

```html
<div class="project-card__thumb"><img src="assets/img/proj1-thumb.jpg" alt="Describe the project"></div>
```

You can keep the ✦ patch alongside it or remove it — both look fine.

## Adding a custom hero banner

By default the top of the page is an animated gradient sky with twinkling
stars (drawn in `script.js`, no image needed). If you'd rather use a
hand-painted or photographed banner:

1. Put the image in `assets/img/` (e.g. `assets/img/hero-banner.jpg`).
2. In `index.html`, find the commented-out `<img class="hero__banner">`
   line near the top of the hero section, uncomment it, and point the
   `src` at your file.

It sits behind the stars and clouds automatically.

## Before you publish

A few placeholders to swap out:

- **Résumé** — add your PDF at `assets/resume/joe-kuwano-resume.pdf` (both
  "Download résumé" buttons already link there).
- **Email** — currently `joe.kuwano@example.com`, marked with a `TODO`
  comment in `index.html`.
- **LinkedIn** — currently a placeholder `#` link, also marked `TODO`.
- **Project 2 (Go-Kart) link** — currently points at your GitHub profile
  since there's no dedicated repo; swap in a real link if you make one.

## Running it locally

No build tools needed — it's plain HTML/CSS/JS. Just open `index.html` in
a browser. If you want a local server (some browsers are fussy about
`file://` paths for scripts), any of these work from this folder:

```bash
python3 -m http.server 8000
# or
npx serve
```

Then visit `http://localhost:8000`.

## Publishing with GitHub Pages

1. Create a new GitHub repo and push this whole folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick your default branch (e.g. `main`) and the `/ (root)` folder.
4. Save. GitHub will give you a URL like
   `https://your-username.github.io/repo-name/` within a minute or two.

## Accessibility & motion notes

- Keyboard focus is visible on every link and button.
- The starfield animation and scroll-reveal effects automatically switch
  off for visitors with "reduce motion" enabled in their OS settings.
- The mobile menu and language toggle are both fully keyboard-operable.
