# Accredian Enterprise Clone

A modern, high-performance landing page clone for the Accredian Enterprise platform, built with **Next.js 14** and **Tailwind CSS**.

## ✨ Features

- **Pixel-Perfect UI**: Precisely matches the original Accredian design system with exact Google Blue (`#1A73E8`) branding.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices with a custom hamburger menu.
- **Scroll Tracking**: Advanced intersection observers automatically highlight the active navigation link based on the currently viewed section.
- **Clean Architecture**: Component-driven development using React functional components.
- **Optimized Assets**: Uses `next/image` for automatic image optimization and SVGs for crisp, scalable icons.
- **Zero Extraneous Dependencies**: Built entirely with standard Tailwind CSS and Next.js features for maximum performance.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language

## 📦 Deployment

This project is configured for static export and is ready to be deployed on platforms like **Vercel** or **Netlify**. It builds without errors and has been stripped of any unused components.

To build the project for production:

```bash
npm run build
```

## 📄 Project Structure

- `/app`: Next.js 14 App Router configuration and main entry point.
- `/components`: Reusable UI sections (`Hero`, `Navbar`, `FAQ`, `Footer`, etc.).
- `/lib`: Static data sources used across the components (`data.ts`).
- `/public`: Static assets, images, and brand logos.
