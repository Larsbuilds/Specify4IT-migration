import { FadeInView } from '../animations/FadeInView';
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import Image from 'next/image';

interface FeatureProps {
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function Features({ features }: FeatureProps) {
  return (
    <section className="py-24 bg-white dark:bg-[#1A2B3C]/90">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeInView key={feature.title} delay={index * 0.2}>
              <Card className="bg-[#F8F9FA] dark:bg-[#1A2B3C] border-[#3E7CB1]/10 hover:border-[#3E7CB1]/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 mb-4 p-2 bg-white dark:bg-[#1A2B3C]/50 rounded-lg shadow-sm">
                    <Image 
                      src={`/icons/feature/${feature.icon}.svg`}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="w-full h-full text-[#3E7CB1]"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1A2B3C] dark:text-white mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-[#666666] dark:text-[#F8F9FA]/80">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
