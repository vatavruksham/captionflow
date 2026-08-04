import { useState } from 'react';
import { Check, X as XIcon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { pricing, comparison, faqs } from '../data/pricing';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-surface-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-ink transition-colors duration-300 hover:text-primary"
      >
        {q}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm leading-relaxed text-ink-soft animate-fade-in">{a}</p>
      )}
    </div>
  );
}

export default function Pricing() {
  useDocumentTitle('Pricing — CaptionFlow');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Simple Pricing"
            title="Plans for Every Content Team"
            subtitle="Start with two platforms and scale to a full agency workflow. Every plan includes AI-generated hooks, hashtags, and variants."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricing.map((tier, idx) => (
            <AnimateOnScroll key={tier.id} delay={idx * 100}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? 'border-primary bg-white shadow-card-hover'
                    : 'border-surface-200 bg-white/70 shadow-card backdrop-blur'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-bold uppercase text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{tier.renderLimit}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-ink">${tier.price}</span>
                  <span className="text-ink-muted">/mo</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/login"
                  className={`mt-6 block w-full rounded-lg py-3 text-center font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? 'btn-glow bg-gradient-to-r from-primary to-accent text-white hover:brightness-105'
                      : 'border border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  Buy Now
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Warranty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-surface-200 bg-gradient-to-r from-primary/5 to-accent/5 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-ink">Our Guarantee</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-ink-soft">
            Every plan is backed by a 14-day money-back guarantee. If CaptionFlow
            isn&apos;t the right fit for your content workflow, cancel within 14 days
            for a full refund — no questions asked.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/70 p-4 shadow-card backdrop-blur">
              <p className="font-semibold text-ink">14-Day Money-Back</p>
              <p className="mt-1 text-sm text-ink-soft">
                Full refund if you&apos;re not satisfied within the first two weeks
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-4 shadow-card backdrop-blur">
              <p className="font-semibold text-ink">99.9% Uptime</p>
              <p className="mt-1 text-sm text-ink-soft">
                Reliable AI generation infrastructure with real-time monitoring
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-4 shadow-card backdrop-blur">
              <p className="font-semibold text-ink">Secure by Design</p>
              <p className="mt-1 text-sm text-ink-soft">
                Your brand voice and content data are encrypted end-to-end
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-4 shadow-card backdrop-blur">
              <p className="font-semibold text-ink">Daily Data Backup</p>
              <p className="mt-1 text-sm text-ink-soft">
                Your saved captions and brand profiles are backed up continuously
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="mb-6 text-center font-display text-2xl font-bold text-ink">
          Feature Comparison
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-surface-200 bg-white/70 shadow-card backdrop-blur">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50">
                <th className="px-4 py-3 font-semibold text-ink">Feature</th>
                <th className="px-4 py-3 text-center font-semibold text-ink">Starter</th>
                <th className="px-4 py-3 text-center font-semibold text-primary">Pro</th>
                <th className="px-4 py-3 text-center font-semibold text-ink">Studio</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-surface-200 last:border-0">
                  <td className="px-4 py-3 text-ink-soft">{row.label}</td>
                  {['starter', 'pro', 'studio'].map((tier) => (
                    <td key={tier} className="px-4 py-3 text-center">
                      {row[tier] === true ? (
                        <Check className="mx-auto h-4 w-4 text-accent" />
                      ) : row[tier] === false ? (
                        <XIcon className="mx-auto h-4 w-4 text-ink-muted/40" />
                      ) : (
                        <span className="text-sm text-ink-soft">{row[tier]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <h3 className="mb-6 text-center font-display text-2xl font-bold text-ink">
          Frequently Asked Questions
        </h3>
        <div className="rounded-2xl border border-surface-200 bg-white/70 p-6 shadow-card backdrop-blur">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </>
  );
}
