import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, PenLine } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const enter = () =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  const stagger = (ms) => ({ transitionDelay: mounted ? `${ms}ms` : '0ms' });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-100 via-surface-50 to-surface-100">
      {/* decorative glows */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy + CTAs */}
          <div className="text-center lg:text-left">
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur ${enter()}`}
              style={stagger(0)}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI Caption Generator
            </span>

            <h1
              className={`mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl ${enter()}`}
              style={stagger(80)}
            >
              Write Captions That{' '}
              <span className="gradient-text">Convert with AI</span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0 ${enter()}`}
              style={stagger(160)}
            >
              Engaging captions for Instagram, Facebook, LinkedIn, and X — generated in
              seconds. Pick a platform, topic, and vibe, and CaptionFlow writes hooks,
              hashtags, and ready-to-post variants tailored to your brand voice.
            </p>

            <div
              className={`mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center ${enter()}`}
              style={stagger(240)}
            >
              <Button href="/#demo" size="lg">
                <span className="inline-flex items-center gap-2">
                  <PenLine className="h-4 w-4" aria-hidden="true" />
                  Try AI Demo
                </span>
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                <span className="inline-flex items-center gap-2">
                  View Pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
            </div>

            <p
              className={`mt-4 text-sm text-ink-muted ${enter()}`}
              style={stagger(300)}
            >
              No free trial needed — test the live AI demo below.
            </p>
          </div>

          {/* Right: product preview */}
          <div className={`relative ${enter()}`} style={stagger(320)}>
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-3 shadow-card-hover backdrop-blur-xl sm:p-4">
              <img
                src="/images/hero-dashboard.jpg"
                alt="CaptionFlow caption generator showing platform-specific captions with hooks, hashtags, and tone variants"
                loading="eager"
                className="w-full rounded-2xl object-cover"
              />
              <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2.5 text-center text-sm font-medium text-ink-soft">
                <PenLine className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Three scroll-stopping captions, generated instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
