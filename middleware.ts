import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api/
    // - /_next/
    // - /_vercel/
    // - /.*\\..+$ (files)
    '/((?!api|_next|_vercel|.*\\..+).*)',
  ]
};
