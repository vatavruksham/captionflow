import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { features } from '../data/features';

export default function Features() {
  useDocumentTitle('Features — CaptionFlow');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Platform Features"
            title="AI-Powered Caption Writing"
            subtitle="Everything you need to post confidently — hooks, hashtags, tone control, and variants built for every platform."
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll key={feature.id} delay={idx * 100}>
                <div className="group h-full overflow-hidden rounded-2xl border border-surface-200 bg-white/70 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
}
