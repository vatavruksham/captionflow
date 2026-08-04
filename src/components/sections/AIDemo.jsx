import { useEffect, useRef, useState } from 'react';
import {
  Loader2,
  PenLine,
  RotateCcw,
  Instagram,
  Facebook,
  Linkedin,
  Smile,
  Briefcase,
  Zap,
  Minus,
  Copy,
  Check,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

function XIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const platforms = [
  { id: 'instagram', label: 'Instagram', icon: Instagram, limit: '2,200 characters' },
  { id: 'facebook', label: 'Facebook', icon: Facebook, limit: '63,000 characters' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, limit: '3,000 characters' },
  { id: 'x', label: 'X', icon: XIcon, limit: '280 characters' },
];

const vibes = [
  { id: 'playful', label: 'Playful', icon: Smile, emojis: ['\u2728', '\ud83d\udc40', '\ud83d\ude05', '\ud83c\udf89'] },
  { id: 'professional', label: 'Professional', icon: Briefcase, emojis: ['\ud83d\udcc8', '\u2705', '\ud83e\udde0'] },
  { id: 'bold', label: 'Bold', icon: Zap, emojis: ['\ud83d\ude80', '\ud83d\udd25', '\u26a1'] },
  { id: 'minimal', label: 'Minimal', icon: Minus, emojis: [] },
];

const hookTemplates = {
  playful: [
    'Okay but who else needed this take on {topic}?',
    'POV: you just found the easiest way to talk about {topic}.',
    'Not us obsessing over {topic} again\u2026',
  ],
  professional: [
    "Here's what you need to know about {topic}.",
    'Three insights on {topic} that changed how we work.',
    'The smartest way to approach {topic}, explained.',
  ],
  bold: [
    'Stop scrolling. {Topic} is about to change everything.',
    'This is your sign to finally nail {topic}.',
    "Everyone's doing {topic} wrong. Here's the fix.",
  ],
  minimal: [
    '{Topic}. Simplified.',
    'Less noise. More {topic}.',
    '{Topic} \u2014 done right.',
  ],
};

const bodyTemplates = {
  playful: [
    "We tried it, loved it, and now we can't stop talking about it. Save this for later!",
    'Drop a \u2764\ufe0f if you needed this reminder today.',
    "Tag someone who needs to see this before their next post.",
  ],
  professional: [
    'A quick breakdown for teams looking to improve results this quarter.',
    'Here are the fundamentals that consistently move the needle.',
    'Bookmark this for your next planning session.',
  ],
  bold: [
    'No fluff. Just the strategy that actually works.',
    "If you're not doing this yet, you're already behind.",
    'This changes the game — read it twice.',
  ],
  minimal: [
    'Clarity over complexity.',
    'One idea. Done well.',
    'Focus on what matters.',
  ],
};

const platformTagPool = {
  instagram: ['ContentCreator', 'InstagramTips', 'SocialMediaMarketing', 'Reels'],
  facebook: ['SmallBusiness', 'CommunityFirst', 'FacebookMarketing'],
  linkedin: ['Leadership', 'GrowthMindset', 'B2BMarketing', 'CareerTips'],
  x: ['MarketingTwitter', 'GrowthHacking', 'BuildInPublic'],
};

function toTitle(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function slugTags(topic) {
  return topic
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ''))
    .filter(Boolean)
    .map((w) => toTitle(w));
}

function generateCaptions(platformId, topic, vibeId) {
  const cleanTopic = topic.trim() || 'your next launch';
  const platform = platforms.find((p) => p.id === platformId);
  const vibe = vibes.find((v) => v.id === vibeId);
  const hooks = hookTemplates[vibeId];
  const bodies = bodyTemplates[vibeId];
  const topicTags = slugTags(cleanTopic);
  const tagPool = platformTagPool[platformId];

  return [0, 1, 2].map((i) => {
    const hook = hooks[i % hooks.length]
      .replace('{Topic}', toTitle(cleanTopic))
      .replace('{topic}', cleanTopic);
    const body = bodies[i % bodies.length];
    const emoji = vibe.emojis.length ? ` ${vibe.emojis[i % vibe.emojis.length]}` : '';
    const hashtags = [...topicTags, tagPool[i % tagPool.length], tagPool[(i + 1) % tagPool.length]]
      .filter((v, idx, arr) => arr.indexOf(v) === idx)
      .map((t) => `#${t}`);

    return {
      id: `${platformId}-${vibeId}-${i}`,
      caption: `${hook}${emoji}\n\n${body}`,
      hashtags,
      platformLabel: platform.label,
    };
  });
}

function CaptionCard({ variant, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${variant.caption}\n\n${variant.hashtags.join(' ')}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-xl border border-surface-200 bg-surface-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
          Variant {index + 1}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy caption"
          className="inline-flex items-center gap-1 text-[10px] font-medium text-ink-muted transition-colors duration-300 hover:text-primary"
        >
          {copied ? <Check className="h-3 w-3 text-accent" /> : <Copy className="h-3 w-3" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-ink-soft">{variant.caption}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {variant.hashtags.map((tag) => (
          <span key={tag} className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AIDemo() {
  const [platform, setPlatform] = useState('instagram');
  const [topic, setTopic] = useState('our new product launch');
  const [vibe, setVibe] = useState('playful');
  const [status, setStatus] = useState('idle'); // idle | loading | done
  const [variants, setVariants] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const reset = () => {
    clearTimeout(timerRef.current);
    setStatus('idle');
    setVariants([]);
  };

  const generate = () => {
    clearTimeout(timerRef.current);
    setStatus('loading');
    timerRef.current = setTimeout(() => {
      setVariants(generateCaptions(platform, topic, vibe));
      setStatus('done');
    }, 1200);
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gradient-to-b from-surface-100 to-surface-50 py-20"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live AI Demo"
          title="Try the AI Right Here"
          subtitle="Pick a platform, describe your topic, and choose a vibe — CaptionFlow writes three ready-to-post caption variants with hashtags."
        />

        <div className="glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-8">
          {/* Step 1: Platform */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">1. Choose your platform</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {platforms.map((p) => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setPlatform(p.id);
                      reset();
                    }}
                    aria-pressed={platform === p.id}
                    className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-300 ${
                      platform === p.id
                        ? 'border-primary bg-primary/5 shadow-card-hover'
                        : 'border-surface-200 bg-white/70 hover:border-primary/40'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${platform === p.id ? 'text-primary' : 'text-ink-muted'}`} />
                    <span className={`text-xs font-medium ${platform === p.id ? 'text-primary' : 'text-ink-soft'}`}>
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Topic */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">2. What's your post about?</p>
            <input
              type="text"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                reset();
              }}
              maxLength={80}
              placeholder="e.g. our new product launch"
              className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-ink transition-colors duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Step 3: Vibe */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">3. Pick a vibe</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {vibes.map((v) => {
                const Icon = v.icon;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setVibe(v.id);
                      reset();
                    }}
                    aria-pressed={vibe === v.id}
                    className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-300 ${
                      vibe === v.id
                        ? 'border-primary bg-primary/5 shadow-card-hover'
                        : 'border-surface-200 bg-white/70 hover:border-primary/40'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${vibe === v.id ? 'text-primary' : 'text-ink-muted'}`} />
                    <span className={`text-xs font-medium ${vibe === v.id ? 'text-primary' : 'text-ink-soft'}`}>
                      {v.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result area */}
          <div className="rounded-2xl border border-surface-200 bg-white overflow-hidden min-h-[220px]">
            {status === 'done' ? (
              <div className="animate-fade-in p-5">
                <div className="mb-4 flex items-center justify-between border-b border-surface-200 pb-3">
                  <div className="flex items-center gap-2">
                    <PenLine className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-ink">
                      3 Caption Variants for {platforms.find((p) => p.id === platform)?.label}
                    </h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    AI Generated
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {variants.map((variant, i) => (
                    <CaptionCard key={variant.id} variant={variant} index={i} />
                  ))}
                </div>
              </div>
            ) : status === 'loading' ? (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
                <Loader2 className="h-9 w-9 animate-spin text-primary/60" aria-hidden="true" />
                <p className="text-sm text-ink-muted">Writing your captions\u2026</p>
              </div>
            ) : (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
                <PenLine className="h-9 w-9 text-ink-muted/50" aria-hidden="true" />
                <p className="max-w-xs text-sm text-ink-muted">
                  Your AI-generated caption variants will appear here.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {status === 'done' ? (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-white/70 px-8 py-3 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Try Another
              </button>
            ) : (
              <button
                type="button"
                onClick={generate}
                disabled={status === 'loading'}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <PenLine className="h-4 w-4" aria-hidden="true" />
                {status === 'loading' ? 'Generating\u2026' : 'Try AI Demo'}
              </button>
            )}
            <p className="text-xs text-ink-muted">Interactive preview \u00b7 captions are generated client-side</p>
          </div>
        </div>
      </div>
    </section>
  );
}
