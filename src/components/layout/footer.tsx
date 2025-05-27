'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const locale = useLocale();
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#F8F9FA] border-t border-[#1A2B3C]/10">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-8 md:order-2">
          <Link 
            href="/privacy" 
            locale={locale}
            className="text-[#666666] hover:text-[#3E7CB1] transition-colors font-medium"
          >
            {t('privacy')}
          </Link>
          <Link 
            href="/terms" 
            locale={locale}
            className="text-[#666666] hover:text-[#3E7CB1] transition-colors font-medium"
          >
            {t('terms')}
          </Link>
        </div>
        <div className="mt-6 md:order-1 md:mt-0">
          <p className="text-center text-sm text-[#333333] md:text-left">
            &copy; {currentYear} Specify4IT. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
