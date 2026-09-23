# UI exports (lib index)

Shared modules merchants and checkout rely on:

| Module | Path | Notes |
|---|---|---|
| Plan mapper | `src/lib/plan-mapper.ts` | API → UI `Plan` |
| CSV | `src/lib/csv.ts` | `toCsv` / `downloadCsv` |
| CSV plans | `src/lib/csv-plans.ts` | Plan row shaping |
| Analytics | `src/lib/analytics.ts` | `track()` custom events |
| API defaults | `src/lib/api-defaults.ts` | Fetch defaults / headers |
| Plan share | `src/lib/plan-share.ts` | `planPayUrl`, `publicPlansUrl` |
| Site paths | `src/lib/site-paths.ts` | In-app path constants |
| Format | `src/lib/format.ts` | Amounts, addresses, intervals |

Prefer importing from these helpers instead of duplicating string templates in components.
