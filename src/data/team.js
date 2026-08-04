/**
 * CaptionFlow leadership team — Toronto-based, founded 2024.
 * Avatars use DiceBear "notionists" (clean professional line-art), seeded by name.
 */
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`;

export const team = [
  {
    name: 'Priya Sharma',
    title: 'CEO & Co-Founder',
    email: 'priya@captionflow.app',
    photo: avatar('Priya Sharma'),
    bio: 'Priya led content strategy for consumer brands across Toronto before founding CaptionFlow. She set out to solve the one bottleneck every social team shares: writing good captions, fast.',
    imagePrompt:
      'Professional corporate headshot of a South Asian-Canadian woman in her mid-30s with dark wavy hair, confident smile, wearing a teal blazer, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Liam O\u2019Brien',
    title: 'CTO & Co-Founder',
    email: 'liam@captionflow.app',
    photo: avatar('Liam OBrien'),
    bio: 'Liam is a natural language processing engineer who previously built writing assistants used by millions. He leads the AI engine that generates CaptionFlow\u2019s hooks, hashtags, and tone variants.',
    imagePrompt:
      'Professional corporate headshot of a white Canadian man in his late 30s with short reddish-brown hair and light beard, warm confident expression, wearing a navy sweater, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Wei Chen',
    title: 'Head of Product',
    email: 'wei@captionflow.app',
    photo: avatar('Wei Chen'),
    bio: 'Wei has spent years designing content tools for creators and marketing teams. She ensures every step of CaptionFlow, from platform picker to caption card, feels fast and intuitive.',
    imagePrompt:
      'Professional corporate headshot of a Chinese-Canadian woman in her early 30s with straight black hair in a bob cut, friendly smile, wearing a coral blouse, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Fatima Ahmed',
    title: 'VP Engineering',
    email: 'fatima@captionflow.app',
    photo: avatar('Fatima Ahmed'),
    bio: 'Fatima is a platform infrastructure specialist who has scaled publishing systems serving global brands. She keeps CaptionFlow fast and reliable as caption requests scale across every platform.',
    imagePrompt:
      'Professional corporate headshot of a Middle Eastern-Canadian woman in her mid-30s wearing a modern hijab, warm smile, wearing a charcoal blazer, soft studio lighting, clean neutral background, editorial portrait photography',
  },
];

export default team;
