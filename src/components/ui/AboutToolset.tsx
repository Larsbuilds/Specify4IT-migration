'use client';

import { FadeInView } from '../animations/FadeInView';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';
import { H2 } from './typography';

interface AboutToolsetProps {
  title: string;
  features: {
    title: string;
    description: string;
  }[];
}

export function AboutToolset({ title, features }: AboutToolsetProps) {
  return (
    <section className="py-24 bg-[#F8F9FA] dark:bg-[#1A2B3C]/80">
      <div className="container mx-auto px-6">
        <StaggerContainer>
          <StaggerItem>
            <H2 className="text-center mb-16">{title}</H2>
          </StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <FadeInView delay={index * 0.2}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#1A2B3C] dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666] dark:text-[#F8F9FA]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeInView>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
