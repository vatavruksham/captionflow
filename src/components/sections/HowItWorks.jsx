import { MessageSquarePlus, Sparkles, SlidersHorizontal, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    icon: MessageSquarePlus,
    title: 'Pick Platform & Topic',
    description:
      'Choose Instagram, Facebook, LinkedIn, or X and tell CaptionFlow what your post is about. No brief required — a sentence is enough.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Writes Your Captions',
    description:
      'CaptionFlow generates three distinct caption variants — each with a scroll-stopping hook, supporting copy, and relevant hashtags — tuned to your chosen vibe.',
  },
  {
    number: '03',
    icon: SlidersHorizontal,
    title: 'Fine-Tune the Vibe',
    description:
      'Switch between Playful, Professional, Bold, or Minimal tones instantly, control emoji usage, and regenerate until a caption feels exactly right.',
  },
  {
    number: '04',
    icon: Send,
    title: 'Post & Track What Converts',
    description:
      'Copy your favorite variant straight to the platform of your choice, and use built-in A/B variants to learn which tone drives the most engagement.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-gradient-to-b from-surface-50 to-surface-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="From Blank Page to Published Caption" />

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-xl border border-surface-200 bg-white/70 p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-bold text-surface-100"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-card">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
