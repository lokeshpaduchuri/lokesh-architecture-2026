# QA Checklist

## Routes

- Home renders hero, proof strip, approach, and first three featured case studies.
- Work renders all public-safe case studies and category filters.
- Resume renders sidebar, timeline, skills, education, and print actions.
- About renders narrative, principles, process, AI, and beyond-code sections.
- Contact renders links and mailto fallback form states.

## Theme

- Dark mode is the default first impression for a new visitor.
- Theme toggle switches light/dark mode.
- Theme preference persists through `localStorage`.
- Contrast remains readable in both modes.

## Work Modal

- Card click opens the case-study modal.
- Keyboard Enter/Space opens a focused card.
- `/work?project=<slug>` deep-links to the modal.
- Escape closes the modal.
- Overlay click closes the modal.
- Close button has an accessible label.
- Focus remains trapped inside the modal.
- Copy link action copies the current URL when clipboard access is available.
- Browser back/forward reflects modal open/close state.

## Accessibility

- Skip link is visible on focus.
- Heading order is logical.
- Buttons and links have visible focus states.
- Dialog uses `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`.
- Images include alt text, dimensions, lazy loading, and async decoding where appropriate.
- Reduced-motion preference disables long transitions.

## Responsive Checks

- Check mobile width around 375px.
- Check tablet width around 768px.
- Check desktop width around 1440px.
- Check ultrawide width around 1920px.
- Check browser zoom at 100%.
- Check browser zoom at 80%.
- Verify no text overlaps or excessive empty canvas on About, Contact, and Resume.

## Browser Print

- Navbar, footer, theme toggle, decorative visuals, and interactive controls are hidden.
- Resume prints in a clean single document style.
- Timeline content remains readable in black and white.

## SEO

- Each route updates title and description.
- Open Graph and Twitter tags update.
- Canonical link updates per route.
- Home includes Person and WebSite JSON-LD.
- Work includes ItemList with CreativeWork entries.
- Resume and About include ProfilePage / Person JSON-LD.

## Build

- `npm run lint`
- `npm run build`
