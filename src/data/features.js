import {
  Layers,
  Sparkles as HookIcon,
  Hash,
  SmilePlus,
  FlaskConical,
  Mic2,
} from 'lucide-react';

export const features = [
  {
    id: 1,
    title: 'Multi-Platform Captions',
    description:
      'Generate captions tuned to the norms of Instagram, Facebook, LinkedIn, and X in one pass — the same idea, written the right way for every audience and character limit.',
    icon: Layers,
    image: '/images/features/multi-platform-captions.jpg',
  },
  {
    id: 2,
    title: 'Scroll-Stopping Hooks',
    description:
      'Every caption opens with a hook engineered to stop the scroll — questions, bold statements, or relatable moments chosen to match your topic and audience.',
    icon: HookIcon,
    image: '/images/features/hooks.jpg',
  },
  {
    id: 3,
    title: 'Smart Hashtags',
    description:
      'CaptionFlow suggests relevant, platform-appropriate hashtags pulled from your topic and niche — no more guessing which tags actually get discovered.',
    icon: Hash,
    image: '/images/features/hashtags.jpg',
  },
  {
    id: 4,
    title: 'Emoji Control',
    description:
      'Dial emoji usage up for playful brands or down to zero for minimal, professional tones — CaptionFlow adapts every variant to your preferred style.',
    icon: SmilePlus,
    image: '/images/features/emoji-control.jpg',
  },
  {
    id: 5,
    title: 'A/B Variants',
    description:
      'Get three distinct caption directions for every post so you can test tone, hook style, or call-to-action and double down on what actually converts.',
    icon: FlaskConical,
    image: '/images/features/ab-variants.jpg',
  },
  {
    id: 6,
    title: 'Brand Voice',
    description:
      'Save your brand tone once and CaptionFlow keeps every caption consistent — from playful and bold to polished and professional — across every platform.',
    icon: Mic2,
    image: '/images/features/brand-voice.jpg',
  },
];

export default features;
