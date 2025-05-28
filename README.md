# Specify4IT Website

A modern, internationalized website for Specify4IT built with Next.js 14, featuring dark mode and multi-language support.

## Features

- 🌐 Internationalization with next-intl
- 🎨 Dark mode support
- 🚀 Next.js 14 App Router
- 💅 Tailwind CSS for styling
- 🔄 Smooth page transitions
- 📱 Fully responsive design

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/specify4it.git
cd specify4it
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your changes to GitHub
2. Visit [Vercel](https://vercel.com/new) and import your repository
3. Configure the following environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_DEFAULT_LOCALE`
4. Deploy!

Vercel will automatically detect the Next.js configuration and deploy your site.

## Project Structure

```
src/
├── app/                 # App router pages
├── components/          # React components
├── messages/            # i18n translation files
└── styles/             # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

