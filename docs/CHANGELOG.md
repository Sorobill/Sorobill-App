# Changelog

## [0.3.1] — 2026-09-23

### Added
- Expanded operator docs (pay flow, Freighter, mock mode, routes, hooks)
- Clearer checkout edge-case messaging

### Changed
- Production app URL documentation aligned to `https://sorobill-app.vercel.app`

## [0.3.0] — 2026-09-15

### Added
- Public `/plans` and `/pay/[planId]` checkout surfaces
- `PayHero`, plan mapper, CSV helpers
- `LoadingState` alias and `ErrorState` title prop
- Demo script for reviewers

### Fixed
- Freighter wallet usage during onboarding plan creation
- Production build reliability for Vercel

### Security
- Next.js upgraded for upstream security patch
