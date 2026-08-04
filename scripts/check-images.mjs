/**
 * CaptionFlow — Image Inventory Check
 * Run: node scripts/check-images.mjs
 */
import { existsSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const required = [
  'images/hero-dashboard.jpg',
  'images/og.jpg',
  'images/features/multi-platform-captions.jpg',
  'images/features/hooks.jpg',
  'images/features/hashtags.jpg',
  'images/features/emoji-control.jpg',
  'images/features/ab-variants.jpg',
  'images/features/brand-voice.jpg',
];

console.log('Checking CaptionFlow local images...');
let missing = 0;
for (const rel of required) {
  const filepath = join(PUBLIC_DIR, rel);
  if (existsSync(filepath)) console.log(`  \u2713 ${rel}`);
  else {
    console.error(`  \u2717 missing: ${rel}`);
    missing += 1;
  }
}
if (missing) {
  console.error(`\n${missing} image(s) missing. See IMAGE-GUIDE.md.`);
  process.exit(1);
}
console.log('\nAll local images present.');
