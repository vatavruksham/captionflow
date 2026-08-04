import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { features } from '../../data/features';

const summaries = {
  1: 'One idea, written right for every platform.',
  2: 'Hooks engineered to stop the scroll.',
  3: 'Relevant hashtags, chosen automatically.',
  4: 'Dial emoji usage up or down to match your tone.',
  5: 'Three directions per post, ready to test.',
  6: 'Consistent tone across every caption you post.',
};

export default function FeaturesTeaser() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading eyebrow="Features" title="Everything a Great Caption Needs" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex items-start gap-4 rounded-xl border border-surface-200 bg-white/70 p-5 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {summaries[feature.id] || feature.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 font-medium text-primary transition-colors duration-300 hover:text-primary-dark"
        >
          View all features
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
