## Goal

Introduce one global content-container rule used on every page, every breakpoint:

- base content width: **1280px** (the Figma design width)
- max-width: **1280px + 10% = 1408px**
- horizontal padding: **5% on each side**
- removes all existing per-breakpoint side padding (e.g. `md:px-6`, `lg:px-20`, `px-6`)

One class controls horizontal layout site-wide.

## Implementation

### 1. Add a Tailwind v4 utility in `src/styles.css`

Express the math literally so the relationship to the 1280px Figma base is visible in the source:

```css
@theme {
  --container-base: 1280px;
}

@utility container-x {
  width: 100%;
  /* 1280px + 10%  →  the global content cap */
  max-width: calc(var(--container-base) * 1.1);
  margin-inline: auto;
  /* 5% gutter on each side, all devices */
  padding-inline: 5%;
}
```

If we ever change the base (e.g. Figma moves to 1320px), only `--container-base` changes and the whole site follows.

### 2. Replace existing container patterns

Swap the current pattern:

```tsx
<div className="mx-auto max-w-[1280px] ..."> ... </div>
```

with:

```tsx
<div className="container-x ..."> ... </div>
```

And remove section-level side padding, since `container-x` now owns horizontal spacing.

- `src/routes/index.tsx`
  - Hero section: drop `md:px-6 lg:px-0` and any wrapping side padding; inner content uses `container-x`.
  - Every `mx-auto flex max-w-[1280px] ...` → `container-x flex ...`.
  - `max-w-[1320px]` blocks (testimonials / showreel) get normalized to `container-x` so the whole site shares one width.
- `src/components/site/Nav.tsx` — `max-w-[1280px]` row → `container-x`.
- `src/components/site/Footer.tsx` — inner `max-w-[1280px]` → `container-x`; remove `px-6 lg:px-20` from `<footer>` (background stays full-bleed; content sits inside `container-x`).
- `src/components/site/Cta.tsx` — same treatment if it has its own side padding.

### 3. Keep these untouched

Inline content max-widths like `max-w-[671px]`, `max-w-[605px]`, `max-w-[864px]` etc. stay — they constrain text/image blocks inside the container, not the container itself.

### 4. Verify

- Open the preview at desktop, tablet, and mobile widths.
- Confirm:
  - 5% gutter on each side at every viewport — content never touches the edge.
  - Content caps at 1408px (1280 + 10%) on wide screens and centers.
  - Nav, hero, all sections, footer all align to the same left/right edges.

## Out of scope

- No typography, color, component, or vertical-spacing changes.
- Inner element max-widths stay as-is.
- No other PC-specific layout changes.
