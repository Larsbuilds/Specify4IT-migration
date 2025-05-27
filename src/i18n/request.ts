import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale, defaultLocale } from '../config';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
  
  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
    timeZone: 'Europe/Berlin',
    now: new Date(),
  };
});
