# Portfolio

A modern developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## Features

- Multi-page navigation with dedicated sections for Home, About, Experience, Projects, Contact, and Case Study.
- Dark/light theme toggle with persisted user preference using `localStorage`.
- Reusable UI components for layout and consistency.
- Custom design tokens and Tailwind-based styling system.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS 4
- Lucide React icons
- ESLint + Prettier

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Starts the Vite dev server.
- `npm run build` - Type-checks and builds the app.
- `npm run preview` - Serves the production build locally.
- `npm run lint` - Runs ESLint.
- `npm run format` - Formats code with Prettier.
- `npm run format:check` - Checks formatting without writing changes.

## Project Structure

```text
src/
  components/
    layout/
    ui/
  hooks/
  pages/
  styles/
  assets/
```

## Routes

- `/` - Home
- `/about` - About
- `/experience` - Experience
- `/projects` - Projects
- `/contact` - Contact
- `/case-study` - Case Study
