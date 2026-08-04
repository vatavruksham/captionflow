/**
 * Customer testimonials for CaptionFlow — from social media managers, marketers, and creators.
 * Western names only. Avatars use DiceBear "notionists" (clean professional line-art).
 */
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`;

export const testimonials = [
  {
    quote:
      'We post across four platforms daily and used to spend an hour a day just writing captions. CaptionFlow gives us three solid options in seconds — we just pick and tweak.',
    name: 'Michael Anderson',
    role: 'Social Media Manager',
    company: 'USA',
    avatar: avatar('Michael Anderson'),
  },
  {
    quote:
      "The hooks are what sold me. Our Instagram engagement went up noticeably once we started using CaptionFlow's opening lines instead of writing our own.",
    name: 'Sarah Thompson',
    role: 'Marketing Lead',
    company: 'UK',
    avatar: avatar('Sarah Thompson'),
  },
  {
    quote:
      'I run captions for a dozen client accounts and the brand voice feature keeps every one sounding consistent, even when I am switching between playful and professional tones all day.',
    name: 'Daniel Walker',
    role: 'Freelance Marketer',
    company: 'Canada',
    avatar: avatar('Daniel Walker'),
  },
  {
    quote:
      'As a creator, writing captions was always my least favorite part of posting. Now I describe the topic, pick a vibe, and CaptionFlow does the rest in seconds.',
    name: 'Emma Richardson',
    role: 'Content Creator',
    company: 'Australia',
    avatar: avatar('Emma Richardson'),
  },
  {
    quote:
      'The A/B variants are genuinely useful — we test two tones every week and now know exactly which style our LinkedIn audience responds to.',
    name: 'James Carter',
    role: 'Growth Marketer',
    company: 'USA',
    avatar: avatar('James Carter'),
  },
  {
    quote:
      'Smart hashtags alone saved us hours of research. Every caption comes with relevant tags already matched to the platform and topic.',
    name: 'Olivia Bennett',
    role: 'Brand Strategist',
    company: 'UK',
    avatar: avatar('Olivia Bennett'),
  },
];

export default testimonials;
