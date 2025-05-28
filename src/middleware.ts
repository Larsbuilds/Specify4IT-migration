import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './config';
 
const middleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function (request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  console.log('Middleware handling request for:', pathname);
  return middleware(request);
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
