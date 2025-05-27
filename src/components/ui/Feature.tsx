import { FadeInView } from '../animations/FadeInView';
import { Card, CardHeader, CardTitle, CardDescription } from './card';

interface FeatureProps {
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function Features({ features }: FeatureProps) {
  return (
    <section className="py-24 bg-background-DEFAULT">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeInView key={feature.title} delay={index * 0.2}>
              <Card className="bg-background-alt border-none">
                <CardHeader>
                  <div className="w-12 h-12 mb-4">
                    <img 
                      src={`/icons/feature/${feature.icon}.svg`}
                      alt={feature.title}
                      className="w-full h-full text-primary-DEFAULT"
                    />
                  </div>
                  <CardTitle className="text-h5 font-medium text-primary-DEFAULT">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
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
