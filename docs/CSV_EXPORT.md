# CSV export

Dashboard exports use RFC-style CSV builders in `src/lib/csv.ts` and plan-specific helpers in `src/lib/csv-plans.ts`.

## API

- `toCsv(rows)` — header row from the first object’s keys; escapes quotes/newlines/commas.
- `downloadCsv(filename, csv)` — Blob download in the browser.
- Plan rows: map plans through `csv-plans` helpers before `toCsv`.

## Filename tips

Prefer `sorobill-plans-YYYY-MM-DD.csv` / `sorobill-subscribers-….csv` so downloads are easy to find.

## Empty data

`toCsv([])` returns an empty string — UI should disable export or show “Nothing to export” instead of downloading a blank file.
