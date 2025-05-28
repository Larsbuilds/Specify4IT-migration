
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';
import { H1, Lead, Paragraph } from './typography';
import { Button } from './button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface MainHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function MainHero({ 
  title, 
  subtitle, 
  description,
  ctaText = 'Learn More',
  ctaHref = '/product'
}: MainHeroProps) {
  const locale = useLocale();

  return (
    <section className="relative bg-[#F8F9FA] dark:bg-[#1A2B3C] overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E7CB1]/5 to-[#1A2B3C]/10 dark:from-[#3E7CB1]/10 dark:to-[#1A2B3C]/30" />
      <div className="relative container mx-auto px-6 py-32">
        <StaggerContainer>
          <StaggerItem>
            <H1 className="text-[#1A2B3C] dark:text-white text-center mb-6 max-w-4xl mx-auto">
              {title}
            </H1>
          </StaggerItem>
          <StaggerItem>
            <Lead className="text-[#666666] dark:text-[#F8F9FA] text-center mb-8 max-w-3xl mx-auto">
              {subtitle}
            </Lead>
          </StaggerItem>
          {description && (
            <StaggerItem>
              <Paragraph className="text-[#333333] dark:text-[#F8F9FA]/90 text-center max-w-2xl mx-auto">
                {description}
              </Paragraph>
            </StaggerItem>
          )}
          <StaggerItem>
            <div className="mt-10 flex justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-[#3E7CB1] text-white hover:bg-[#1A2B3C]"
                asChild
              >
                <Link href={`/${locale}${ctaHref}`}>{ctaText}</Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
