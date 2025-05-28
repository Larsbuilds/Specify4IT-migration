import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales, type Locale } from '@/config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Specify4IT',
  description: 'Create error free code from provable specifications',
  viewport: 'width=device-width, initial-scale=1',
  icons: [
    { rel: 'icon', url: '/favicon.ico' }
  ]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

async function getMessages(locale: Locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (_error) {
    notFound();
  }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale);

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
