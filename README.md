# Coding Shortcut

React + Vite + TypeScript + Supabase scaffold.

## Development

```bash
npm install
cp .env.example .env   # fill in your Supabase project URL and anon key
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (Coolify)

The app is served via Nginx from a multi-stage Docker build (`Dockerfile`).

In Coolify, set these build-time environment variables on the application:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Coolify handles the reverse proxy, TLS, and domain routing (`coding.shortcut`) on top of the container, which listens on port 80.
