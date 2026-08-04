/**
 * Pricing tiers for CaptionFlow. Three tiers: Starter, Pro, Studio.
 * All CTAs route to /login (BUY NOW).
 */
export const pricing = [
  {
    id: 'starter',
    name: 'Starter',
    price: 12,
    priceLabel: '$12/mo',
    renderLimit: '60 captions / month',
    features: [
      '60 AI-generated captions / month',
      '2 platforms (choose any)',
      '3 variants per caption',
      'Standard hashtag suggestions',
      'Playful & Professional vibes',
      'Email support',
    ],
    highlighted: false,
    ctaText: 'Buy Now',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    priceLabel: '$29/mo',
    renderLimit: 'Unlimited captions',
    features: [
      'Unlimited AI-generated captions',
      'All 4 platforms (Instagram, Facebook, LinkedIn, X)',
      'Everything in Starter',
      'All 4 tone vibes + emoji control',
      'Smart hashtag & keyword suggestions',
      'Saved brand voice profile',
      'Priority support',
    ],
    highlighted: true,
    ctaText: 'Buy Now',
  },
  {
    id: 'studio',
    name: 'Studio',
    price: 69,
    priceLabel: '$69/mo',
    renderLimit: 'Teams & agencies',
    features: [
      'Everything in Pro',
      'Up to 10 team seats',
      'Multiple brand voice profiles',
      'A/B variant performance notes',
      'Client workspace organization',
      'API access & custom integrations',
      'Dedicated account manager',
    ],
    highlighted: false,
    ctaText: 'Buy Now',
  },
];

export default pricing;

/**
 * Feature comparison matrix across tiers.
 */
export const comparison = [
  {
    label: 'Captions per month',
    starter: '60',
    pro: 'Unlimited',
    studio: 'Unlimited',
  },
  {
    label: 'Platforms supported',
    starter: '2',
    pro: '4',
    studio: '4',
  },
  {
    label: 'Variants per caption',
    starter: '3',
    pro: '3',
    studio: '3',
  },
  {
    label: 'Tone vibes',
    starter: '2',
    pro: '4',
    studio: '4',
  },
  {
    label: 'Emoji control',
    starter: false,
    pro: true,
    studio: true,
  },
  {
    label: 'Brand voice profiles',
    starter: false,
    pro: '1',
    studio: 'Unlimited',
  },
  {
    label: 'Team seats',
    starter: '1',
    pro: '3',
    studio: '10',
  },
  {
    label: 'API access',
    starter: false,
    pro: false,
    studio: true,
  },
  {
    label: 'Support',
    starter: 'Email',
    pro: 'Priority',
    studio: 'Dedicated manager',
  },
];

/**
 * Frequently asked questions for the pricing page.
 */
export const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'There is no free trial — instead you can test the AI live on our home page with the interactive caption generator. Pick a plan whenever you are ready to save and manage your captions.',
  },
  {
    q: 'Which platforms does CaptionFlow support?',
    a: 'CaptionFlow generates captions tuned for Instagram, Facebook, LinkedIn, and X, matching each platform\u2019s tone, length, and hashtag conventions.',
  },
  {
    q: 'Can I control how many emojis are used?',
    a: 'Yes. Choose from four vibes — Playful, Professional, Bold, or Minimal — each with a different emoji density, from expressive to none at all.',
  },
  {
    q: 'What is a brand voice profile?',
    a: 'A brand voice profile saves your preferred tone, vocabulary, and style so every caption CaptionFlow generates stays consistent, even across a large team.',
  },
  {
    q: 'Can agencies manage multiple clients?',
    a: 'Yes. The Studio plan includes client workspace organization and multiple brand voice profiles, so agencies can keep every account\u2019s captions separate and on-brand.',
  },
  {
    q: 'What happens if I need to change my plan?',
    a: 'You can upgrade, downgrade, or cancel from your account settings at any time. Changes take effect at the start of your next billing cycle with no cancellation fees.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'Yes. Every plan includes a 14-day money-back guarantee. If CaptionFlow is not the right fit for your team, contact support within 14 days of your first payment for a full refund.',
  },
];
