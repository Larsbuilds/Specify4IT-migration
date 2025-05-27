'use client';

import { useTranslations } from 'next-intl';
import { MainHero } from '@/components/ui/MainHero';
import { Features } from '@/components/ui/Feature';
import { CallToAction } from '@/components/ui/CallToAction';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export default function Home() {
  const t = useTranslations();

  const features = [
    {
      title: 'Check',
      description: 'Verify there are no conflicts in your specifications',
      icon: 'check'
    },
    {
      title: 'Animate',
      description: 'Visualize user behavior specifications',
      icon: 'animate'
    },
    {
      title: 'Deduce',
      description: 'Extract and clarify customer requirements',
      icon: 'deduce'
    },
    {
      title: 'Prove',
      description: 'Validate application properties mathematically',
      icon: 'prove'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <MainHero
        title="Innovative technology. A powerful new software solution."
        subtitle="The Specify4IT automated reasoning toolset creates error free code from provable specifications."
        description="Specify4IT™ is an innovative product conceived, designed and built specifically for developers who want to create relational database software right first time."
      />

      <Features features={features} />

      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <StaggerContainer>
            <StaggerItem>
              <h2 className="text-h2 font-bold text-primary-DEFAULT text-center mb-12">
                About the Toolset
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-h4 font-medium text-primary-DEFAULT mb-4">
                    Structure your software
                  </h3>
                  <p className="text-text-secondary">
                    This automated toolset enables a user to specify software in a structured way,
                    resulting in provable specifications that can be checked and animated prior to
                    generating any code.
                  </p>
                </div>
                <div>
                  <h3 className="text-h4 font-medium text-primary-DEFAULT mb-4">
                    Efficient workflow
                  </h3>
                  <p className="text-text-secondary">
                    The result of this is error-free code, created at the click of a button;
                    estimated to take half the time and with half the workforce of conventional methods.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <CallToAction
        title="Ready to build error-free software?"
        description="Start creating relational database software right first time with Specify4IT."
        buttonText="Get Started"
        buttonHref="/product"
      />
    </main>
  );
}
