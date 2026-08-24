/**
 * The app screen is drawn in one scale unit, `--u`, so the entire UI can be
 * resized from a single CSS variable on an ancestor (see <PhoneMockup>) without
 * anything inside it having to know its own pixel size.
 *
 * At the default --u of 0.625rem (10px) the phone screen is 320px wide, which
 * matches the app's real logical viewport.
 *
 * Geometry goes through this helper as an inline style rather than a Tailwind
 * arbitrary value on purpose: Tailwind scans source text statically, so a class
 * name built from a template literal would never be generated.
 */
export const u = (n) => `calc(var(--u, 0.625rem) * ${n})`

/** Default unit, exported so standalone snippets can opt into a bigger scale. */
export const U_DEFAULT = '0.625rem'
