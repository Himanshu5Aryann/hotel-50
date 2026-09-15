import { WEDDINGS, BANQUETS, HIMACHAL, DINING_TABLES, CELEBRATIONS } from "./media";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "planning-a-himalayan-wedding",
    title: "Planning a Himalayan Wedding: Where to Begin",
    category: "Weddings",
    excerpt:
      "Choosing a mountain destination for your wedding changes the way you plan everything — here's how to begin thoughtfully.",
    image: WEDDINGS.hero,
    content: [
      "A wedding set against the Himalayan foothills carries a different kind of magic — the light falls differently, the air feels cleaner, and every photograph carries the mountains in the background.",
      "The first step is choosing a venue that can host both the intimacy of your rituals and the scale of your reception. At Hotel Binwa View & Banquets, our 10,000 sq.ft banquet space is designed to do exactly that — flexible enough for a small mehendi and grand enough for a full wedding reception.",
      "Next, think about your guests' journey. Neri, Baijnath offers a convenient setting for families travelling from across Himachal Pradesh and beyond, while still feeling relaxed and private.",
      "Finally, give yourself time with your venue's team. The best weddings are the ones where décor, dining and logistics are planned together, not separately.",
    ],
  },
  {
    slug: "anatomy-of-a-grand-banquet",
    title: "The Anatomy of a Grand Banquet Setup",
    category: "Events",
    excerpt:
      "From the mandap to the reception floor — a look at how a banquet hall transforms across a single wedding day.",
    image: BANQUETS.stage,
    content: [
      "A single banquet hall can host three or four completely different atmospheres within 24 hours — a bright, floral mandap for the morning ceremony, a relaxed lounge setup for the afternoon, and a dramatic, lit stage for the evening reception.",
      "This transformation depends on careful planning: seating layouts, lighting rigs, floral installations and catering flow all need to work in sequence rather than in isolation.",
      "At Hotel Binwa View & Banquets, our banquet team walks every family through this sequence in advance, so that on the day itself, everything simply happens — leaving you free to enjoy your own wedding.",
    ],
  },
  {
    slug: "himachal-for-destination-weddings",
    title: "Why Himachal Pradesh is Becoming a Destination Wedding Favourite",
    category: "Himachal",
    excerpt: "The mountains, the weather and the warmth of the region are drawing more weddings north.",
    image: HIMACHAL.valley,
    content: [
      "Himachal Pradesh has quietly become one of India's most sought-after wedding destinations — offering the scenic drama of the mountains without the extended travel of more remote hill regions.",
      "Baijnath and the surrounding Himalayan landscape give wedding photography a distinct, unforgettable character.",
      "For families, the appeal is also practical: comfortable accessibility, a temperate climate for much of the year, and venues equipped to host both the celebration and the stay.",
    ],
  },
  {
    slug: "planning-your-reception-menu",
    title: "Planning a Reception Menu Your Guests Will Remember",
    category: "Dining",
    excerpt: "A few thoughts on building a wedding dining experience that feels personal, not generic.",
    image: DINING_TABLES.candlelit,
    content: [
      "Wedding dining is often an afterthought in the planning process, when it should be one of the most memorable parts of the evening.",
      "Start with your region's strengths — in Himachal Pradesh, that means fresh produce, warming spices and dishes that feel comforting in the mountain air.",
      "Whatever you choose, work closely with your venue's culinary team early, so presentation, portioning and timing are considered as part of the overall event design, not separately from it.",
    ],
  },
  {
    slug: "celebrations-beyond-weddings",
    title: "Celebrations Beyond Weddings: Hosting Milestone Events",
    category: "Celebrations",
    excerpt: "Anniversaries, engagements and birthdays deserve just as much thought as a wedding day.",
    image: CELEBRATIONS.family1,
    content: [
      "Not every celebration is a wedding — anniversaries, engagement ceremonies and milestone birthdays all deserve venues and teams that take them just as seriously.",
      "A well-run banquet space should be able to scale down gracefully: warm lighting, a smaller floral footprint and a more intimate dining setup, without losing any of the elegance.",
      "At Hotel Binwa View & Banquets, our events calendar includes as many family celebrations as full weddings — each one planned with the same care.",
    ],
  },
  {
    slug: "hospitality-for-wedding-guests",
    title: "Thoughtful Hospitality for Out-of-Town Wedding Guests",
    category: "Hospitality",
    excerpt: "A few small details that make a big difference for guests travelling in for your celebration.",
    image: WEDDINGS.smiling,
    content: [
      "For many guests, a destination wedding is also a short holiday — and thoughtful hospitality can shape how they remember the entire trip.",
      "Comfortable rooms close to the banquet space, clear information about functions and timings, and warm, attentive service all go a long way.",
      "Hosting your wedding and your guests' stay under one roof — as at Hotel Binwa View & Banquets — removes a significant layer of logistics for the hosting family.",
    ],
  },
];
