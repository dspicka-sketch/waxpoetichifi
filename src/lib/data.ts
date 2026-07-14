export const site = {
  name: "Wax Poetic",
  tagline: "Curated Listening Room · Sound Society",
  description:
    "A community-driven vinyl listening room and event space in Sebastopol, California — built for slowing down, listening deeply, and sharing music together.",
  url: "https://waxpoetichifi.com",
  location: {
    address: "104 N. Main Street",
    city: "Sebastopol",
    state: "CA",
    full: "104 N. Main Street, Sebastopol, CA",
  },
  email: "hello@waxpoetic.space",
  phone: "",
  social: {
    instagram: "https://instagram.com/waxpoetichifi",
    facebook: "https://facebook.com/waxpoetichifi",
  },
  links: {
    membershipRegister: "https://waxpoetichifi.com/membership-registration/",
    memberLogin: "https://waxpoetichifi.com/member-login/",
    calendar: "https://waxpoetichifi.com/calendar/",
    donate: process.env.NEXT_PUBLIC_DONATE_URL || "#donate",
    rentals: "/rentals",
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Sound Society" },
  { href: "/rentals", label: "Private Events" },
];

export const headerCta = {
  label: "Join the Sound Society",
  href: "/membership",
} as const;

export type MembershipTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  cta: string;
  popular?: boolean;
  limited?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    id: "listener",
    name: "Listener",
    price: "$29",
    period: "/month",
    description:
      "Your entry into the room. Early access, member pricing, and a standing place in the Wax Poetic community.",
    benefits: [
      "Access during open member hours",
      "Early access to ticketed events",
      "Member pricing on wine and snack packs",
      "Monthly curated playlist",
      "Occasional member-only offerings",
    ],
    cta: "Join as Listener",
  },
  {
    id: "selector",
    name: "Selector",
    price: "$79",
    period: "/month",
    description:
      "For those who don't just listen — they shape the experience.",
    benefits: [
      "Everything in Listener",
      "Priority access to limited-capacity events",
      "1 guest pass per month",
      "Invitations to select member-only sessions",
      "Quarterly merch or curated item",
      "Enhanced wine discounts",
    ],
    cta: "Join as Selector",
    popular: true,
  },
  {
    id: "patron",
    name: "Patron",
    price: "$149",
    period: "/month",
    description: "Support the room. Shape the culture.",
    benefits: [
      "Everything in Selector",
      "Guaranteed or reserved access to select events",
      "2 guest passes per month",
      "Invitations to private / after-hours sessions",
      "Monthly curated gift or certificate",
      "Optional supporting member recognition",
    ],
    cta: "Join as Patron",
  },
  {
    id: "founder",
    name: "Founder",
    price: "$1,500",
    period: "one-time",
    description:
      "Create a new place for music and community. Lifetime membership for two.",
    benefits: [
      "Listener + Selector benefits",
      "Lifetime membership for two",
      "First priority access to all events",
      "Private dinners + listening salons",
      "Guest access",
      "Personalized gold record display",
    ],
    cta: "Become a Founder",
    limited: true,
  },
];

export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: "listening" | "dj" | "workshop" | "member" | "special";
  description: string;
  capacity: number;
  ticketsRemaining: number;
  memberOnly?: boolean;
  price: string;
  ticketUrl: string;
  image?: string;
};

export const events: Event[] = [
  {
    id: "flight-night-jul",
    title: "Selector Night: Soul & Funk",
    date: "2026-07-16",
    time: "7:00 PM",
    category: "dj",
    description:
      "Member-curated vinyl session featuring deep soul, funk, and rare grooves. Limited to 40 guests.",
    capacity: 40,
    ticketsRemaining: 12,
    price: "$25",
    ticketUrl: "https://waxpoetichifi.com/calendar/",
    image: "/media/2026/05/group-listening.webp",
  },
  {
    id: "album-length-jul",
    title: "Album-Length Listening: Kind of Blue",
    date: "2026-07-23",
    time: "6:30 PM",
    category: "listening",
    description:
      "Full-album session on our hi-fi system. No talking during playback. Discussion after.",
    capacity: 30,
    ticketsRemaining: 8,
    price: "$20",
    ticketUrl: "https://waxpoetichifi.com/calendar/",
    image: "/media/2026/05/listen-wine.webp",
  },
  {
    id: "member-session-aug",
    title: "Members-Only: Late Night Jazz",
    date: "2026-08-01",
    time: "9:00 PM",
    category: "member",
    description:
      "Exclusive after-hours session for Sound Society members. Wine pairings included.",
    capacity: 25,
    ticketsRemaining: 15,
    memberOnly: true,
    price: "Members",
    ticketUrl: "https://waxpoetichifi.com/membership-registration/",
    image: "/media/2026/05/group-listening-dark.webp",
  },
  {
    id: "vinyl-workshop-aug",
    title: "Vinyl 101: Care & Collecting",
    date: "2026-08-08",
    time: "2:00 PM",
    category: "workshop",
    description:
      "Learn proper vinyl care, grading, and building a collection that lasts. Hands-on demos.",
    capacity: 20,
    ticketsRemaining: 14,
    price: "$35",
    ticketUrl: "https://waxpoetichifi.com/calendar/",
    image: "/media/2026/05/record-player.webp",
  },
  {
    id: "guest-dj-aug",
    title: "Guest DJ: Local Crate Diggers",
    date: "2026-08-15",
    time: "8:00 PM",
    category: "dj",
    description:
      "Sonoma County selectors spin their finest finds. Dance floor optional, listening mandatory.",
    capacity: 45,
    ticketsRemaining: 22,
    price: "$30",
    ticketUrl: "https://waxpoetichifi.com/calendar/",
    image: "/media/2026/07/WaxPoetic_FriendsFamily-1.jpg",
  },
];

export type RentalPackage = {
  id: string;
  name: string;
  duration: string;
  capacity: string;
  price: string;
  description: string;
  includes: string[];
};

export const rentalPackages: RentalPackage[] = [
  {
    id: "listening",
    name: "Listening Session",
    duration: "3 hours",
    capacity: "Up to 30 guests",
    price: "From $800",
    description:
      "Curated vinyl listening experience with dedicated sound engineer and custom playlist.",
    includes: [
      "Private room access",
      "Curated vinyl playlist",
      "Wine & small plates menu",
      "Dedicated host",
    ],
  },
  {
    id: "celebration",
    name: "Celebration",
    duration: "4 hours",
    capacity: "Up to 40 guests",
    price: "From $1,200",
    description:
      "Elevate date night, birthdays, or anniversaries with an unforgettable private gathering.",
    includes: [
      "Full venue access",
      "Custom music curation",
      "Catering coordination",
      "Photo-friendly lighting",
      "Complimentary champagne toast",
    ],
  },
  {
    id: "retreat",
    name: "Corporate Retreat",
    duration: "Half or full day",
    capacity: "Up to 25 guests",
    price: "Custom quote",
    description:
      "Business retreats, team offsites, and creative workshops in an inspiring atmosphere.",
    includes: [
      "Private listening room",
      "A/V for presentations",
      "Breakout spaces",
      "Catering options",
      "Flexible scheduling",
    ],
  },
];

export const donationImpacts = [
  { amount: "$25", impact: "Funds one community listening session" },
  { amount: "$100", impact: "Supports an artist residency stipend" },
  { amount: "$250", impact: "Sponsors a free youth workshop" },
  { amount: "$500", impact: "Helps maintain our hi-fi equipment" },
];
