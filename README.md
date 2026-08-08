# Joe Kuwano — Engineering Portfolio

A single-page portfolio site: night-sky hero, mission-patch project cards, a
"Sketchbook" gallery for hand-drawn art, and a "Mission Log" timeline —
with an English / Japanese language toggle. Plain HTML/CSS/JS — no build
step, no dependencies to install.

## Put it on GitHub Pages (free hosting)

1. Create a new repository on GitHub — for a *user site* name it
   `your-username.github.io`, or for a *project site* any name you like
   (e.g. `portfolio`).
2. Upload this folder's contents (`index.html`, `style.css`, `script.js`,
   `assets/`) to the repo, either by dragging them into the GitHub web UI
   or via git:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick branch `main` and
   folder `/ (root)`, then **Save**.
5. Wait about a minute, then your site will be live at:
   - `https://your-username.github.io` (if you named the repo that way), or
   - `https://your-username.github.io/your-repo` (for a project repo).

## What to customize

Most of the real content (your name, all five projects, the mission log)
is already filled in from your CV. A few things are still placeholders:

- **Email** — currently `joe.kuwano@example.com` in `<section class="contact">`,
  update to your real address.
- **LinkedIn link** — `#linkedin­Link` in the contact section currently
  points nowhere; add your profile URL.
- **Résumé** — both `#resumeLink` (hero button) and `#resumeLink2` (contact
  section) point to `#`. Add a `resume.pdf` to the repo and link to it
  directly, e.g. `href="resume.pdf"`.
- **Project links for Go-Kart / Mini-Warman / Rocketry / Space Challenge**
  currently point to your GitHub profile (`github.com/jkuw137`) since no
  specific repo was given — swap in direct repo links if you have them.
- **"Started Engineering Degree" entry** in the Mission Log — fill in the
  actual year and any detail you want.
- **Sketchbook / artwork** — see below.

Everything else (project titles, descriptions, mission log entries, about
bio) can still be edited directly in `index.html`, but **remember to update
both the English text and its matching entry in the `i18n` dictionary near
the bottom of `script.js`** — otherwise the Japanese version won't match.

## Adding your own artwork

The "Sketchbook" section (`#art`) currently shows six dashed placeholder
tiles. To add a real piece:

1. Save your image into `assets/art/` (e.g. `assets/art/piece-01.jpg`).
2. In `index.html`, replace a placeholder block:
   ```html
   <div class="art-slot"> ... </div>
   ```
   with:
   ```html
   <figure class="art-piece">
     <img src="assets/art/piece-01.jpg" alt="Describe the piece">
     <figcaption>Illustration title — medium, year</figcaption>
   </figure>
   ```
3. Repeat for each piece — add more `<figure>` blocks or delete unused
   placeholder tiles as needed.

There's a copy of these instructions in `assets/art/README.md` too.

## Language toggle (English / 日本語)

The button in the top-right of the nav swaps the whole page between English
and Japanese. All translated strings live in one place: the `i18n` object
near the bottom of `script.js`. Each entry looks like:

```js
heroSub: { en: "From motor mounts to full flight stacks...", ja: "モーターマウントから..." },
```

To edit a translation, change the `ja` (or `en`) value for that key — the
key names match the element IDs in `index.html`, so `heroSub` corresponds
to the element with `id="heroSub"`. The user's language choice is
remembered between visits (via `localStorage`).

Technical terms in the project tags (e.g. "Fusion", "ESP32", "Arduino") are
left in English in both languages, which is standard practice in Japanese
technical writing — feel free to translate them too if you'd prefer.

## Colors & fonts

Defined once at the top of `style.css` under `:root` — change the hex values
there and they'll cascade through the whole site. Fonts are loaded from
Google Fonts in `index.html` (Fraunces for headings, Inter for body text,
JetBrains Mono for the small technical labels).

## Notes

- Fully responsive down to mobile, includes a hamburger menu under ~720px.
- Respects `prefers-reduced-motion` (stars stop twinkling, no shooting star).
- No frameworks or build tools — just open `index.html` in a browser to
  preview locally, or use a local server (e.g. `python3 -m http.server`).
