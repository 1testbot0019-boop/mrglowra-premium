export const blogs = [
  {
    slug: 'why-toilet-and-floor-hygiene-matter-more-than-you-think-and-how-most-indian-homes-get-it-wrong',
    title: 'Why Toilet and Floor Hygiene Matter More Than You Think (And How Most Indian Homes Get It Wrong)',
    excerpt: 'A practical guide to household hygiene in Indian homes — why toilets and floors deserve more attention, how often to clean them, and what actually matters.',
    date: '2026-07-02',
    read: '3 min read',
    url: 'https://www.mrglowra.com/why-toilet-and-floor-hygiene-matter-more-than-you-think-and-how-most-indian-homes-get-it-wrong'
  },
  {
    slug: 'how-regular-cleaning-helps-prevent-seasonal-illnesses-a-complete-guide',
    title: 'How Regular Cleaning Helps Prevent Seasonal Illnesses: A Complete Guide',
    excerpt: 'Discover practical cleaning routines for reducing germs, dust, allergens and mould throughout the year.',
    date: '2025-12-27',
    read: '4 min read',
    url: 'https://www.mrglowra.com/how-regular-cleaning-helps-prevent-seasonal-illnesses-a-complete-guide'
  },
  {
    slug: 'best-mop-for-cleaning-floors',
    title: 'Best Mop for Cleaning Floors: A Complete Guide to Choosing the Right Cleaning Tool',
    excerpt: 'Compare flat, spin, spray, microfiber, string, steam and sponge mops and learn which works best for different floor types.',
    date: '2025-11-01',
    read: 'Guide',
    url: 'https://www.mrglowra.com/best-mop-for-cleaning-floors'
  },
  {
    slug: 'best-toilet-cleaner-for-toilet-bowl',
    title: 'Best Toilet Cleaner for Toilet Bowl – Ultimate Guide by Mr. Glowra',
    excerpt: 'A practical guide covering toilet stains, limescale, mould, cleaning technique, safety and choosing the right toilet cleaner.',
    date: '2025-11-22',
    read: '5 min read',
    url: 'https://www.mrglowra.com/best-toilet-cleaner-for-toilet-bowl'
  },
  {
    slug: 'pine-oil-vs-phenyle-floor-cleaner-india',
    title: 'Pine Oil vs. Phenyle: The Best & Safest Floor Cleaner for Indian Homes?',
    excerpt: 'Understand the differences between pine-oil and phenyle floor cleaners and what to consider for an Indian home.',
    date: '2025-11-20',
    read: '4 min read',
    url: 'https://www.mrglowra.com/pine-oil-vs-phenyle-floor-cleaner-india'
  },
  {
    slug: 'best-floor-cleaner-in-india-2025-expert-review-by-mr-glowra',
    title: 'Best Floor Cleaner in India 2025: Expert Review by Mr Glowra',
    excerpt: 'A detailed comparison of floor-cleaning priorities including cleaning power, fragrance, floor compatibility, dilution and value.',
    date: '2025-01-01',
    read: '4 min read',
    url: 'https://www.mrglowra.com/best-floor-cleaner-in-india-2025-expert-review-by-mr-glowra'
  }
];

export function getBlog(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
