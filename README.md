# Give me Huggs — landing page

Marketing site for the Give me Huggs app. Send a little love to the creators you love.

Built with Vite, React 19, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the built output
```

## Structure

```
src/
  App.jsx                  Navbar → Hero → HowItWorks → AppCTA → Footer
  index.css                design tokens (@theme) + base layer
  components/
    Navbar, Hero, HowItWorks, AppCTA, Footer
    Container, StoreButtons, Logo, Reveal, Icons
    app/                   the in-phone app screen recreation
      PhoneMockup          owns the --u scale variable
      ScreenHeader, AvatarRow, GiftIllustration, SendHuggsButton
      scale.js             u() helper — all app-screen geometry goes through it
legacy-static/             the previous hand-written HTML version
```

### Design notes

- The page background is plain white (`#FFFFFF`). Sections separate with
  whitespace and `--color-divider` / `--color-hairline` rules — never a color wash.
- Coral `#F2545B` and blue `#4A90D9` appear only in the logo, buttons, icons and
  text accents. Navy `#1B2A4A` for headings, `#5A6580` for body copy.
- Poppins for headings, Inter for body.
- Everything inside `PhoneMockup` sizes off the single `--u` CSS variable, so the
  whole app screen scales from one value. Use the `u()` helper from `scale.js`
  rather than Tailwind arbitrary values — Tailwind scans source statically and
  will not generate a class built from a template literal.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages. The custom domain lives in `public/CNAME`, which Vite
copies into the build output.
