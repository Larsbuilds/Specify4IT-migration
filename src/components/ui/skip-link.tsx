'use client';

import { useTranslations } from 'next-intl';

export function SkipLink() {
  const t = useTranslations('accessibility');

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[#1A2B3C] focus:outline-none focus:ring-2 focus:ring-[#3E7CB1]"
    >
      {t('skip-to-content')}
    </a>
  );
}
