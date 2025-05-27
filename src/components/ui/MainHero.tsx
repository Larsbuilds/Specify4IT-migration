import { FadeInView } from '../animations/FadeInView';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';
import { H1, Lead, Paragraph } from './typography';

interface MainHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

export function MainHero({ title, subtitle, description }: MainHeroProps) {
  return (
    <section className="relative bg-background-alt overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-DEFAULT/10 to-background-alt/50" />
      <div className="relative container mx-auto px-6 py-32">
        <StaggerContainer>
          <StaggerItem>
            <H1 className="text-primary-DEFAULT text-center mb-6 max-w-4xl mx-auto">
              {title}
            </H1>
          </StaggerItem>
          <StaggerItem>
            <Lead className="text-text-secondary text-center mb-8 max-w-3xl mx-auto">
              {subtitle}
            </Lead>
          </StaggerItem>
          {description && (
            <StaggerItem>
              <Paragraph className="text-text-primary text-center max-w-2xl mx-auto opacity-90">
                {description}
              </Paragraph>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
