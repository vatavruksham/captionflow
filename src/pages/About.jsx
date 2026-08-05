import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { team } from '../data/team';

export default function About() {
  useDocumentTitle('About — CaptionFlow');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Making Every Caption Count"
            subtitle="Founded in Toronto in 2024, CaptionFlow was built for the moment every social media manager knows too well: a great photo, and no idea what to write."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur">
            <h3 className="mb-4 font-display text-xl font-bold text-ink">Our Mission</h3>
            <p className="mb-4 leading-relaxed text-ink-soft">
              Great content deserves a caption that matches it — but writing one that
              hooks readers, fits the platform, and sounds like your brand takes real
              time. We believe AI should handle that first draft so creators and
              marketers can focus on strategy, not staring at a blinking cursor.
            </p>
            <p className="mb-4 leading-relaxed text-ink-soft">
              CaptionFlow generates platform-tuned captions with hooks, hashtags, and
              tone control in seconds, giving every post its best shot at standing
              out.
            </p>
            <p className="leading-relaxed text-ink-soft">
              From solo creators to agencies managing dozens of client accounts,
              CaptionFlow gives every team the speed of a copywriter on call.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll delay={100}>
          <div className="rounded-2xl border border-surface-200 bg-gradient-to-r from-primary/5 to-accent/5 p-8">
            <h3 className="mb-4 font-display text-xl font-bold text-ink">How It Started</h3>
            <p className="mb-4 leading-relaxed text-ink-soft">
              In 2024, our founding team was running social content for a roster of
              Toronto brands and noticed the same bottleneck on every account: content
              was ready, but captions were the last — and slowest — step every single
              time.
            </p>
            <p className="leading-relaxed text-ink-soft">
              We combined expertise in natural language generation, social platform
              norms, and product design to build CaptionFlow — describe your topic,
              pick a vibe, and get scroll-stopping captions in seconds.
            </p>
          </div>
        </AnimateOnScroll>
      </section>


      {/* Our AI */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll delay={150}>
          <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur">
            <h3 className="mb-4 font-display text-xl font-bold text-ink">Our AI</h3>
            <p className="leading-relaxed text-ink-soft">
              CaptionFlow fine-tunes language models for platform-specific hooks, tone, and hashtag patterns. Caption inference is productized so social teams get scroll-stopping copy from software, not freelance caption writers.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <h3 className="mb-8 text-center font-display text-2xl font-bold text-ink">
          Our Team
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <AnimateOnScroll key={member.name} delay={idx * 100}>
              <div className="flex flex-col items-center rounded-2xl border border-surface-200 bg-white/70 p-6 text-center shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-20 w-20 rounded-full border-2 border-surface-200 bg-surface-100 shadow-card"
                />
                <h4 className="mt-4 font-display font-semibold text-ink">{member.name}</h4>
                <p className="text-sm font-medium text-primary">{member.title}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">{member.bio}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
