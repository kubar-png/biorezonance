# Mobile responsiveness audit

Audited against iOS HIG (44pt minimum) and Material Design (48dp minimum) touch targets, applying the principles from the `mobile-design` skill (touch psychology, Fitts' Law, thumb-zone reachability, mobile typography, form usability, and platform conventions). Tested mentally across 320 / 375 / 390 / 414 / 768 px viewports.

## Summary
- **Overall grade: B-**
- **Critical issues: 8**
- **Recommended fixes: 11**

Strong foundations (viewport meta, `100svh`, safe-area handling, hamburger drawer at 44×44, `overflow-x:hidden`, `prefers-reduced-motion`), but several touch targets fall below 44px, body inputs ship at 14.5px (iOS will auto-zoom on focus), and the desktop nav `ul` is rendered on mobile DOM (just hidden) which is fine, but a few smaller patterns will hurt thumb usability.

---

## Critical issues (fix before launch)

### 1. Form inputs are 14.5px → iOS Safari zooms on focus
- **What**: All `.field input`, `textarea`, `select` use `font-size:14.5px`. iOS Safari auto-zooms the viewport when an input is focused with a font-size below 16px. The page is then left zoomed-in, which feels broken on a medical-practice booking form.
- **Where**: `src/app/globals.css:384` — `.field input,.field textarea,.field select{...font-size:14.5px;...}`. Same issue at line 345 for `.faq-side .search input` (14px) and line 412 for `.foot-brand .nl input` (13.5px).
- **Why it matters**: The contact form is the primary conversion point. Auto-zoom on every field breaks flow on iPhones (~55% of CZ mobile users).
- **Fix**: Bump to `font-size:16px` on mobile for all `input`, `textarea`, `select`. Either set globally to 16px or add a `@media (max-width:900px)` override forcing 16px.

### 2. FAQ tab buttons are below the 44px minimum
- **What**: `.faq-side .tabs button` uses `padding:10px 18px` with `font-size:13.5px` and no explicit min-height → roughly 36–38px tall. Four tabs ("Vše / Obecné / První návštěva / Pojišťovna") sit in one row with `gap:8px`.
- **Where**: `src/app/globals.css:342`. Component renders at `src/components/FaqSection.tsx:56-69`.
- **Why it matters**: Fitts' Law — adjacent under-spec targets mean miss-taps and accidental category switches. On 320–375px iPhone SE the row also risks overflowing (4 buttons + paddings + 8px gaps).
- **Fix**: `min-height:44px; padding:12px 16px;` on `.faq-side .tabs button`. Allow the tabs container to wrap (`flex-wrap:wrap`) or horizontally scroll on small screens to avoid overflow.

### 3. FAQ "+" toggle icon has no real hit area beyond the summary; the icon itself is 32×32
- **What**: `.faq-item summary .ico` is `width:32px;height:32px`. The summary row is tappable (good) but the visual affordance falls below 44px and the summary's vertical padding (`18px 20px` on mobile) puts the row near 50–56px which is fine **only** if the `q` text is short. With long Czech questions like "Zvládnou děti sezení v délce hodiny až dvou?" the wrapping line height pushes the icon off-axis visually.
- **Where**: `src/app/globals.css:355` and `:363`.
- **Why it matters**: Visual + tap mismatch; users who tap the icon (not the text) will sometimes miss.
- **Fix**: Bump `.faq-item summary .ico` to `width:40px;height:40px` on mobile and ensure `summary` has `min-height:56px`.

### 4. Footer social icon (WhatsApp) is 36×36 — below 44px
- **What**: `.foot-strip .socials a{width:36px;height:36px}` with `gap:8px`. A 36×36 button is below iOS minimum and the only WhatsApp entry point in the footer.
- **Where**: `src/app/globals.css:422`.
- **Why it matters**: WhatsApp is the user's preferred channel (mentioned everywhere on the site). The icon must be effortlessly tappable.
- **Fix**: `width:44px;height:44px` minimum; or wrap with a larger padded link.

### 5. Newsletter input + button is too cramped and below 44px
- **What**: `.foot-brand .nl input{font-size:13.5px}` (zoom trigger) and `.nl button{padding:10px 16px;font-size:13px}` (~36px tall). Both share a single pill with `padding:5px 5px 5px 18px`.
- **Where**: `src/app/globals.css:411-414`. Component `src/components/Newsletter.tsx`.
- **Why it matters**: Combined: iOS zoom + sub-44px button = poor experience on the only newsletter sign-up.
- **Fix**: Input `font-size:16px`, button `min-height:44px; padding:12px 18px`. Consider stacking the form vertically on `<480px`.

### 6. Date input (`type="date"`) on iOS opens picker but visual height depends on font-size; current 14.5px → also triggers zoom
- **What**: `<input type="date">` inherits the global 14.5px. iOS still auto-zooms even on date pickers.
- **Where**: `src/components/ContactForm.tsx:22` + same CSS rule at `src/app/globals.css:384`.
- **Why it matters**: Booking flow critical field.
- **Fix**: Covered by #1 (16px global). Also add `autocomplete="bday"` for accessibility/autofill.

### 7. Hero `.fan` orbit/petals — desktop layout pieces remain in DOM and depend on `display:none` only at 900px breakpoint
- **What**: `.orbit` is positioned at `right:-120px; top:80px; width:780px; height:780px;` and `.fan{height:520px}`. It's hidden via `.fan{display:none}` at `max-width:900px` — but `.orbit` itself is **inside `.hero-grid`'s right column** and has no scoped hide rule. Reading the markup it appears `.orbit` lives inside `.fan`, so this is OK in practice — but the `.moment` element styled at line 188 has `position:absolute; transform:translate(-30%,-50%)` with no mobile rule. If ever rendered it would extend off-screen and cause horizontal overflow. Verify it's not in the JSX (it currently isn't, so this is latent risk only).
- **Where**: `src/app/globals.css:116-123, 188-189`.
- **Why it matters**: Dead CSS rules that will silently break the page if a `<div class="moment">` is added later.
- **Fix**: Wrap `.moment` styles in `@media (min-width:901px)` or remove if unused.

### 8. Hero CTAs lose minimum height on mobile
- **What**: On mobile `.hero .btn,.hero .btn-2{padding:14px 22px;font-size:14px}` (line 180). With 14px text + 14px vertical padding the button height is ~42–44px depending on line-height — borderline. The standard `.btn` at desktop is `padding:18px 30px` which is great; the mobile override reduces it.
- **Where**: `src/app/globals.css:180`.
- **Why it matters**: Primary "Objednat se" CTA — the most important action on the page — sits right at the touch-target threshold.
- **Fix**: `padding:16px 24px; font-size:15px; min-height:48px;` on mobile. Keep `.btn` and `.btn-2` consistent.

---

## Recommended improvements

### 9. Service card arrow `.svc .arr` collides with the absolute `.svc-link` overlay
- **What**: `.svc-link{position:absolute;inset:0;z-index:3}` covers the whole card. The visual arrow `.svc .arr` is purely decorative on mobile but the user has no separate "Objednat se" hint — entire card behaves as link. That's fine; just ensure the card height stays comfortable. On mobile `.svc .arr` is `40×40` (below 44) and absolutely positioned at `right:20px;bottom:20px`, which is visual-only since `.svc-link` covers everything. Note: this works because `.svc-link` is the actual tap target — but screen-reader users may read both the link and the inner heading. Add `aria-hidden` on visual elements or simplify.
- **Where**: `src/app/globals.css:205-223`, `src/components/ServiceLink.tsx`.
- **Fix**: Add `aria-hidden="true"` to `.num-big`, `.name`, `.desc` wrapper, since the link's `aria-label` already conveys intent. Or remove the absolute overlay and make the heading itself the anchor (simpler markup).

### 10. Nav burger is exactly 44×44 — good, but its `:active{transform:scale(.92)}` may feel jumpy with the sticky nav at `top:12px`
- **What**: Acceptable. Just verify visually.
- **Fix**: Optional — reduce scale to `.96`.

### 11. Sticky nav `top:12px` covers content; `scroll-padding-top:96px` may be too small on mobile
- **What**: `html{scroll-padding-top:96px}` is applied globally. On mobile the sticky nav is `~56px` tall + `12px` offset = `~68px`, so 96px is OK on mobile, but on desktop the rounded pill is taller (~62px + 16px) and 96px is still right. Hash-link jumps to `#sluzby` etc. should land cleanly. Verify on iPhone — the URL bar reveal/hide can shift things.
- **Fix**: Use `scroll-padding-top:clamp(80px,15vh,120px)` or set explicitly per breakpoint.

### 12. Tap conflicts in `.contact-head .info .row`
- **What**: Three stacked clickable rows (`<a class="row">` for tel, mail, map). `padding:14px 16px` on mobile = ~64–72px tall, which is fine. But `gap` between rows in `.info` is `14px` (line 373) — OK, just at 8px minimum. Acceptable. The 4th "Otevřeno" row is a `<div>` not an `<a>` (correctly non-tappable).
- **Fix**: None — but ensure the first 3 keep `gap >= 12px` to avoid stray taps near the map row.

### 13. Hero mini-cards (`.hero-mobile-cards`) use 11–11.5px body type
- **What**: `.hero-mini-card p{font-size:11.5px}` (line 171), reduced further to 11px at `<380px`. That's below the 12px web-readability floor and well below 16px input target — but these are display labels, not inputs, so iOS won't zoom. Still hard to read in bright sun.
- **Where**: `src/app/globals.css:171, 185`.
- **Fix**: Bump to `font-size:12.5px` minimum. The cards have room.

### 14. `.lede` is `18px` desktop, but reduced to `14.5px` on mobile
- **What**: `.hero .lede{font-size:14.5px}` (line 178). Body text on mobile should be 15–16px for medical/legal-adjacent content. The audience skews 40+ (a doctor's site).
- **Where**: `src/app/globals.css:178`.
- **Fix**: `font-size:15.5px;` on mobile.

### 15. Hover-only transforms (`.svc:hover{transform:translateX(6px)}`, `.ben:hover{transform:translateY(-4px)}`, `.petal:hover{...}`, `.pill-cta:hover{transform:translateX(2px)}`) have no `:focus` or `:active` equivalents for touch
- **What**: Mobile has no hover. The cards work without it, but the visual affordance is lost.
- **Where**: `src/app/globals.css:60, 81, 133, 209, 283`.
- **Fix**: Add `:focus-visible` and `:active` styles that mirror the hover transform, so keyboard + touch users get feedback. Example: `.svc:active{transform:translateX(4px) scale(0.99)}`.

### 16. No `inputmode` / `autocomplete` on contact form
- **What**: `ContactForm.tsx` — `<input name="name">` lacks `autocomplete="name"`, phone lacks `inputmode="tel"` (though `type="tel"` covers iOS keyboard), email lacks `autocomplete="email"`.
- **Where**: `src/components/ContactForm.tsx:18, 22, 26, 30`.
- **Fix**: Add `autocomplete="name"`, `autocomplete="bday"` + `inputmode="numeric"` on date if needed, `autocomplete="email" inputmode="email"`, `autocomplete="tel" inputmode="tel"`.

### 17. Checkbox labels in kontraindikace block — checkbox itself is browser-default (~18px) and below touch threshold
- **What**: `<input type="checkbox" name="ks">` with default sizing. Label wraps text so the tap target is the label text, which on mobile is `font-size:14px`. Total row is ~24–28px tall.
- **Where**: `src/components/ContactForm.tsx:52-57`.
- **Why it matters**: Critical medical disclosure (pacemaker, pregnancy). Hitting the wrong row is a real safety issue.
- **Fix**: Apply CSS: `input[type="checkbox"]{width:22px;height:22px}` and add `padding:10px 0` to the wrapping label so each row is ≥44px tall.

### 18. About stats card text at 11px on mobile is too small
- **What**: `.about-stats .lbl{font-size:11px}` (line 252) — sub-12px content. The label "v klasické medicíně" matters as social proof.
- **Where**: `src/app/globals.css:252`.
- **Fix**: `font-size:12.5px`.

### 19. FAQ search input lacks `type="search"` clear behavior on iOS — wait, it has it. But the placeholder text uses an ellipsis character (`…`) which is fine; just verify visually
- **What**: Minor — `.faq-side .search` is a div with no min-height. The input is 14px and triggers iOS zoom (see #1).
- **Where**: `src/components/FaqSection.tsx:73`.
- **Fix**: 16px font-size covers it. Container `min-height:48px`.

### 20. `<details>`/`<summary>` removes default disclosure marker but `cursor:pointer` is the only affordance besides the `+` icon; no `aria-expanded` syncing
- **What**: Native `<details>` handles `aria-expanded` implicitly — that's fine. Just note the `+` icon doesn't rotate on focus (only on `[open]`). Keyboard users get no feedback during focus.
- **Where**: `src/components/FaqSection.tsx:92-95`.
- **Fix**: `.faq-item summary:focus-visible .ico{outline:2px solid var(--rose-deep)}` or similar.

---

## Things done right

- Viewport meta is correct (`width=device-width, initialScale=1, maximumScale=5`) — allows pinch-zoom for accessibility (good — many sites wrongly set `maximumScale=1`).
- `themeColor` set for iOS Safari chrome tinting.
- `html,body{overflow-x:hidden;max-width:100vw}` prevents horizontal scroll.
- `100svh` used in hero (`section.hero{min-height:100svh}`) — correct modern approach, doesn't jump with URL bar reveal/hide.
- Mobile drawer uses `100dvh`, `env(safe-area-inset-top/bottom)`, `overscroll-behavior:contain`, `-webkit-overflow-scrolling:touch` — textbook iOS-safe drawer.
- Hamburger button is exactly `44×44` with `-webkit-tap-highlight-color:transparent` and `:active{transform:scale(.92)}` for tactile feedback.
- Drawer CTA "Objednat se" is full-width with `padding:18px 24px` and 16px font — exemplary primary CTA in the thumb zone.
- Drawer nav links use `padding:16px 0` with `26px font` — generous, easy to hit.
- `@media (prefers-reduced-motion: reduce)` disables all animations — good a11y.
- `focus-visible` outline ring at `:focus-visible{outline:2px solid var(--rose-deep)}`.
- Hero on mobile is restructured (`order:`) to be content-first: eyebrow → h1 → lede → cards → CTAs — natural mobile reading flow.
- Section padding scales down on mobile (`96px → 64px`) consistently.
- Footer grid collapses cleanly: `5col → 2col @ 900px → 1col @ 480px`.
- Contact form rows for tel/mail/map are full real `<a>` tags with `tel:` and `mailto:` — native handoff to phone/mail apps.
- Body has `overscroll-behavior-y:none` — no rubber-band overscroll surprises.
- Image-free design avoids LCP/CLS issues; no `<img>` to mismanage.
- `aria-label`, `aria-expanded`, `aria-selected`, `role="dialog"`, `role="tablist"`, `role="tab"` properly used.
- Czech-aware: `keep-all`, `hyphens:manual`, `text-wrap:balance` on headlines, `&nbsp;` in critical phrases.
- React `<Image>` not used — and not needed, since the design is illustrative (gradients + SVG icons). No image sizing pitfalls.
- `scroll-padding-top:96px` for sticky-nav-aware anchor jumps.

---

## Suggested fix priority

1. **#1 (form input 16px)** — single-line CSS change, biggest UX win.
2. **#2 (FAQ tabs 44px)** — primary navigation pattern of the FAQ.
3. **#4 + #5 (footer icons + newsletter)** — last-impression UX.
4. **#8 (hero CTA mobile padding)** — primary conversion button.
5. **#17 (checkbox labels)** — medical-safety critical.
6. **#3 (FAQ summary minHeight)** — secondary but easy.
7. **#16 (autocomplete + inputmode)** — quality polish, helps iOS autofill.
