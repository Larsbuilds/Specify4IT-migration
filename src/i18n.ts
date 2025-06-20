import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export type Messages = Record<string, Record<string, string>>;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is supported
  if (typeof locale !== 'string' || !locales.includes(locale as typeof locales[number])) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    // This is a valid locale string at this point
    locale: locale as string
  };
});
