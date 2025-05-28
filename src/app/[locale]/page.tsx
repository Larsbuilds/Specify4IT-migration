'use client';

import { useTranslations } from 'next-intl';
import { MainHero } from '@/components/ui/MainHero';
import { Features } from '@/components/ui/Feature';
import { AboutToolset } from '@/components/ui/AboutToolset';
import { CallToAction } from '@/components/ui/CallToAction';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col">
      <MainHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        ctaText={t('hero.cta')}
        ctaHref="/product"
      />

      <Features features={t.raw('features')} />

      <AboutToolset 
        title={t('about.title')} 
        features={t.raw('about.features')} 
      />

      <CallToAction 
        title={t('cta.title')}
        description={t('cta.description')}
        buttonText={t('cta.button')}
        buttonHref="/contact"
      />
    </main>
  );
}
