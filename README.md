# Joe Kuwano — Engineering Portfolio

A simple, static, two-language (English / 日本語) portfolio site. No
build step, no framework — just plain HTML, CSS and JS.

## Editing the text

Everything on the page — nav labels, the hero text, the about
paragraph, every project, gallery captions, and the contact links —
lives in **`content.js`**. That is the only file you need to open to
change text or add a project. Each string is written as:

```js
{ en: "English text", ja: "日本語のテキスト" }
```

Edit the value inside the quotes, save, and refresh the page (or push
and let GitHub Pages redeploy). There's nothing to compile.

## Adding your own artwork

The gallery is intentionally empty to start — it's built for your
hand-drawn illustrations, not placeholder or AI-generated images.

1. Add your image file to `assets/art/` (jpg, png or webp all work).
2. Open `content.js` and find `gallery.images` near the bottom.
3. Add a line, for example:

   ```js
   images: [
     { src: "assets/art/piece-01.jpg", caption: { en: "Title of the piece", ja: "作品タイトル" } },
   ],
   ```

4. Save and refresh. The gallery grid updates automatically, and
   clicking an image opens it full-size.

You can use the same `assets/art/` folder for a project thumbnail —
just set that project's `image` field (also in `content.js`) to the
image's path, e.g. `image: "assets/art/shortcut-controller.jpg"`.
Leave it as `null` and a simple placeholder is shown instead.

## Publishing with GitHub Pages

1. Create a new repository on GitHub and push this whole folder to it
   (`index.html`, `style.css`, `script.js`, `content.js`, `assets/`).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a
   branch`, pick the `main` branch and the `/ (root)` folder, then
   save.
4. GitHub will give you a URL in the form
   `https://<your-username>.github.io/<repo-name>/` within a minute
   or two.

Any time you edit `content.js` or add an image and push, GitHub Pages
redeploys automatically.

## Structure

```
index.html     — page structure only (no copy — see content.js)
style.css      — all visual styling
script.js      — reads content.js and renders the page, handles the
                 language toggle, mobile nav, and image lightbox
content.js     — every piece of text, every project, every gallery
                 entry — the one file to edit day-to-day
assets/art/    — your illustrations go here
```

## Before you publish

- Replace the placeholder email in `content.js` (`contact.email`)
  with your real address.
- Add a project thumbnail or two, and at least one piece of art to
  the gallery, if you'd like the placeholders to disappear.
