# Security Audit — personalsite
**Date**: 2026-03-28 | **Status**: Paused

## Secrets in Git History
No commits touching `.env`, `.env.local`, `.env.production`, `*.pem`, `*.key`, or `service-account*.json` found in any branch. Clean.

## Credentials on Disk
Only `.env.example` exists with empty placeholder values (no real credentials). `.gitignore` covers `.env.local` and `.env.*.local` variants. Note: bare `.env` is **not** in `.gitignore` — if one is ever created it would be committed.

## Deployment
No `.vercel/`, `wrangler.toml`, `netlify.toml`, or `firebase.json` found. No active deployment config detected.

## Code Security
- **CORS**: No CORS or `Access-Control-Allow-Origin` patterns found in source.
- **dangerouslySetInnerHTML**: Used once in `app/blog/[...slug]/page.tsx:115` for JSON-LD structured data via `JSON.stringify(jsonLd)`. Low risk — input is server-generated, not user-supplied.
- **Hardcoded secrets**: No API keys, tokens, or passwords found in source files. All sensitive values are properly referenced via `process.env.*`.

## Action Items
- [ ] Add bare `.env` to `.gitignore` (currently only `.env.local` and `.env.*.local` are listed)
