export type Project = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  detail: string[];
  image: string;
  tags: string[];
  role: string;
  year: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "terrachow",
    name: "Terrachow",
    tagline: "Nigerian Food Delivery Platform",
    description:
      "A food delivery platform connecting users with local vendors across Nigeria. Features real-time order tracking, secure payments, and seamless delivery management.",
    detail: [
      "Terrachow is a food delivery mobile app connecting everyday users with local vendors and restaurants across Nigeria. As Mobile App Developer, I built the customer-facing app in React Native (Expo), covering vendor discovery, cart and checkout, and order placement.",
      "The app includes real-time order tracking so users can follow their delivery from vendor to doorstep, along with secure in-app payments and a smooth, native-feeling UI tuned for the Nigerian market's mobile-first users.",
      "Terrachow is live on both the Google Play Store and Apple App Store, with an active user base ordering food across Nigerian cities.",
    ],
    image: "/projects/terrachow.jpg",
    tags: ["React Native", "Expo", "Mobile"],
    role: "Mobile App Developer",
    year: "2023",
    links: [
      { label: "Website", href: "https://store.terrachow.com/" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.terrachow.terrachow" },
      { label: "App Store", href: "https://apps.apple.com/us/app/terrachow/id1587526296" },
    ],
  },
  {
    id: 2,
    slug: "360gadgets-africa",
    name: "360Gadgets Africa",
    tagline: "E-commerce & Digital Services Platform",
    description:
      "A full-featured e-commerce platform for electronic gadgets across Nigeria with digital services (VTU). Integrated Paystack & Flutterwave payment gateways.",
    detail: [
      "360Gadgets Africa is a full-featured e-commerce platform for electronic gadgets, paired with digital services like airtime and data top-ups (VTU). As Fullstack Engineer, I worked across the mobile app, web storefront, and backend API.",
      "The platform integrates both Paystack and Flutterwave for payments, giving Nigerian customers multiple reliable checkout options, and handles inventory, order management, and digital service delivery through a Node.js and MongoDB backend.",
      "Built with React Native for mobile and Next.js for web, the platform ships to both the Play Store and App Store alongside its web presence.",
    ],
    image: "/projects/360gadgets.jpg",
    tags: ["React Native", "Next.js", "Node.js", "MongoDB", "Paystack"],
    role: "Fullstack Engineer",
    year: "2023",
    links: [
      { label: "Website", href: "https://360gadgetsafrica.com/" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.gadgetsafrica.gadgetsafrica" },
      { label: "App Store", href: "https://apps.apple.com/us/app/360gadgetsafrica/id6736353137" },
    ],
  },
  {
    id: 3,
    slug: "a1-information-technology",
    name: "A1 Information Technology",
    tagline: "Tech Training & Gadget Repair Platform",
    description:
      "A comprehensive platform for gadget repair training (online & offline), gadget repairs, and tool sales. Built the full website(s) and service platform from ground up.",
    detail: [
      "A1 Information Technology needed a complete digital presence covering their gadget repair training academy (online & in-person), device repair services, and repair-tool sales. As Lead Fullstack Developer, I built the entire platform from the ground up.",
      "The build spans two connected properties: the main marketing and service site, and a dedicated academy platform for course enrollment and training content — both built with Next.js and TypeScript on top of a Node.js and MongoDB backend.",
      "I owned the project end-to-end: architecture, API design, frontend implementation, and deployment, giving A1 a single cohesive platform instead of disconnected tools.",
    ],
    image: "/projects/a1infotech.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    role: "Lead Fullstack Developer",
    year: "2024",
    links: [
      { label: "Main Site", href: "https://www.a1info.tech/" },
      { label: "Academy", href: "https://academy.a1info.tech/" },
    ],
  },
  {
    id: 4,
    slug: "glamconnect",
    name: "GlamConnect",
    tagline: "Beauty Professionals Booking Platform",
    description:
      "A Saudi-Arabian based platform connecting beauty professionals with clients. Simplifies booking, portfolio showcasing, and payments for beauty service providers.",
    detail: [
      "GlamConnect is a Saudi Arabia-based platform that connects beauty professionals with clients, simplifying appointment booking, portfolio showcasing, and payments. As Backend Developer, I built the REST API powering both the mobile apps and web app.",
      "The backend, built with Node.js, Express, and MongoDB, handles professional profiles, availability and booking logic, and payment flows — designed to scale as the platform grew across the Saudi market.",
      "GlamConnect ships on the Play Store, App Store, and as a standalone web app, all consuming the same backend I built.",
    ],
    image: "/projects/glamconnect.jpg",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    role: "Backend Developer",
    year: "2024",
    links: [
      { label: "Web App", href: "https://glam-sync-mvp.vercel.app/" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=sa.aba.glam_connect" },
      { label: "App Store", href: "https://apps.apple.com/us/app/glamconnect/id6755059933" },
    ],
  },
  {
    id: 5,
    slug: "cloudstech",
    name: "Cloudstech",
    tagline: "International Software & AI Agency",
    description:
      "The marketing website for an international software and AI agency. Built with Next.js, Three.js for 3D effects, and GSAP animations for a stunning, interactive experience.",
    detail: [
      "Cloudstech is an international software and AI agency that needed a marketing site matching its modern, AI-forward positioning. As Frontend Engineer, I built the entire site with Next.js and TypeScript.",
      "The site uses Three.js for interactive 3D visuals and GSAP for scroll-driven animation sequences, creating a polished, high-motion experience without sacrificing load performance.",
      "The result is a distinctive agency site that stands out from typical template-driven marketing pages, built entirely around custom animation and 3D work.",
    ],
    image: "/projects/cloudstech.jpg",
    tags: ["Next.js", "Three.js", "GSAP", "TypeScript"],
    role: "Frontend Engineer",
    year: "2024",
    links: [
      { label: "Website", href: "https://www.cloudstech.org/" },
    ],
  },
];
