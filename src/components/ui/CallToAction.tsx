import { Button } from './button';
import { FadeInView } from '../animations/FadeInView';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CallToAction({ title, description, buttonText, buttonHref }: CallToActionProps) {
  return (
    <section className="bg-primary-DEFAULT text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-lg mb-8 opacity-90">{description}</p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-DEFAULT hover:bg-white/90"
              asChild
            >
              <a href={buttonHref}>{buttonText}</a>
            </Button>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
