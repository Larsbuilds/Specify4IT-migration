'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageTransition } from '@/components/animations/page-transition';
import { SectionTransition } from '@/components/animations/section-transition';

export default function ProductPage() {
  const t = useTranslations('product');

  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionTransition>
              <h1 className="text-4xl font-bold text-[#1A2B3C] dark:text-white text-center mb-8">
                {t('title')}
              </h1>
              <p className="text-[#666666] dark:text-[#F8F9FA]/80 text-center max-w-2xl mx-auto mb-16">
                {t('description')}
              </p>
            </SectionTransition>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {t.raw('features').map((feature: { title: string; description: string; icon: string }, index: number) => (
                <SectionTransition key={feature.title} delay={index * 0.2}>
                  <div className="space-y-4 p-6 bg-white dark:bg-[#1A2B3C]/50 rounded-lg shadow-lg">
                    <div className="w-12 h-12 bg-[#3E7CB1] rounded-lg flex items-center justify-center mb-4">
                      <Image
                        src={`/icons/feature/${feature.icon.toLowerCase()}.svg`}
                        alt={`${feature.title} icon`}
                        width={24}
                        height={24}
                        className="text-white"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#1A2B3C] dark:text-white">
                      {feature.title}
                    </h2>
                    <p className="text-[#666666] dark:text-[#F8F9FA]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </SectionTransition>
              ))}
            </div>

            <SectionTransition delay={0.4}>
              <div className="mt-24 text-center">
                <h2 className="text-3xl font-bold text-[#1A2B3C] dark:text-white mb-8">
                  {t('pricing.title')}
                </h2>
                <p className="text-[#666666] dark:text-[#F8F9FA]/80 max-w-2xl mx-auto mb-16">
                  {t('pricing.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {t.raw('pricing.plans').map((plan: { title: string; price: string; features: string[] }, index: number) => (
                    <SectionTransition key={`pricing-plan-${index}-${plan.title}`} delay={0.6 + index * 0.2}>
                      <div className="p-8 bg-white dark:bg-[#1A2B3C]/50 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-[#1A2B3C] dark:text-white mb-4">
                          {plan.title}
                        </h3>
                        <div className="text-4xl font-bold text-[#3E7CB1] mb-8">{plan.price}</div>
                        <ul className="space-y-4">
                          {plan.features.map((feature: string) => (
                            <li key={feature} className="flex items-center text-[#666666] dark:text-[#F8F9FA]/80">
                              <svg
                                className="w-5 h-5 text-[#3E7CB1] mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SectionTransition>
                  ))}
                </div>
              </div>
            </SectionTransition>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
