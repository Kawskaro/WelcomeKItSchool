# Digital Welcome Kit for Schools

Mobile-first React application that helps migrant families in Chile understand the school enrollment process, required documents, school information, and how to request support.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4
- React Router
- react-i18next

## Environment variables

Create a local `.env` file based on `.env.example`.

```bash
cp .env.example .env
```

Required placeholders:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

These variables are prepared for the future Supabase integration. The current MVP UI does not require them yet.

## Run locally

```bash
npm install
npm run dev
```

Default local URL:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Keep the detected framework preset as `Vite`.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Add the environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the Vercel project settings.
7. Deploy.

`vercel.json` includes an SPA rewrite so direct visits to routes like `/pasos` or `/ayuda` resolve correctly in production.

## Project scripts

- `npm run dev`: start the development server
- `npm run build`: type-check and create the production build
- `npm run preview`: preview the production build locally
- `npm run lint`: run ESLint
- `npm run format`: format the codebase with Prettier
