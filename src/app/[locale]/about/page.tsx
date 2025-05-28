'use client';

import { useTranslations } from 'next-intl';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer>
            <StaggerItem>
              <FadeInView>
                <h1 className="text-4xl font-bold text-[#1A2B3C] dark:text-white text-center mb-8">
                  {t('title')}
                </h1>
                <p className="text-[#666666] dark:text-[#F8F9FA]/80 text-center max-w-2xl mx-auto mb-16">
                  {t('description')}
                </p>
              </FadeInView>
            </StaggerItem>

            <StaggerItem>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {t.raw('sections').map((section: { title: string; content: string }, index: number) => (
                  <FadeInView key={section.title} delay={index * 0.2}>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold text-[#1A2B3C] dark:text-white">
                        {section.title}
                      </h2>
                      <p className="text-[#666666] dark:text-[#F8F9FA]/80 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
