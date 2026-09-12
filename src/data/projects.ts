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
    tagline: "Nigerian Food Delivery & Logistics Platform",
    description:
      "An on-demand food delivery platform connecting hungry users with local restaurants across Nigeria. Designed with a mobile-first checkout flow, real-time order tracking, and friction-free payments tuned for Nigerian network conditions.",
    detail: [
      "Terrachow is an on-demand food delivery mobile platform connecting everyday consumers with local culinary vendors across Nigeria. As Product & Mobile App Developer, I took full ownership of the customer-facing mobile application built in React Native (Expo), focusing on user discovery, frictionless cart-to-checkout flows, and order placement ergonomics.",
      "To ensure high retention and customer trust in a market where delivery reliability is paramount, I engineered real-time GPS courier tracking and live status updates from kitchen dispatch to doorstep. I also implemented resilient in-app payment handling tuned for fluctuating mobile networks, providing an intuitive, native-feeling user experience.",
      "Terrachow was launched to production on both Google Play and the Apple App Store, successfully processing customer orders across multiple Nigerian urban centers.",
    ],
    image: "/projects/terrachow.jpeg",
    tags: ["React Native", "Expo", "Mobile UX", "Product Engineering"],
    role: "Product & Mobile App Developer",
    year: "2023",
    links: [
      { label: "Website", href: "https://www.terrachow.com/" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.terrachow.terrachow" },
      { label: "App Store", href: "https://apps.apple.com/us/app/terrachow/id1587526296" },
    ],
  },
  {
    id: 2,
    slug: "360gadgets-africa",
    name: "360Gadgets Africa",
    tagline: "E-commerce & Instant Digital Services Platform",
    description:
      "An omnichannel e-commerce and digital services (VTU) platform. Built to optimize checkout conversion by pairing multi-gateway payment failover (Paystack & Flutterwave) with instant automated digital top-up delivery.",
    detail: [
      "360Gadgets Africa is an omnichannel commerce platform providing consumer electronics alongside high-frequency digital services including instant airtime and data subscriptions (VTU). As Lead Product & Fullstack Engineer, I bridged the gap between commercial strategy and engineering execution across mobile (React Native), web (Next.js), and backend micro-services.",
      "A primary product bottleneck was payment abandonment. To address this, I architected dual-gateway integration with Paystack and Flutterwave featuring intelligent fallback logic, reducing failed checkouts and boosting transaction completion rates. On the backend, I designed transactional workflows in Node.js and MongoDB to automate digital service dispatch within seconds.",
      "The product shipped concurrently to the Google Play Store, Apple App Store, and responsive web, establishing a scalable foundation that drove reliable revenue across both physical merchandise and recurring digital top-ups.",
    ],
    image: "/projects/360gadgets.jpg",
    tags: ["React Native", "Next.js", "Node.js", "MongoDB", "Paystack", "Product Strategy"],
    role: "Lead Product & Fullstack Engineer",
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
    tagline: "Tech Education & Service Ecosystem",
    description:
      "An end-to-end digital ecosystem unifying gadget repair services, technician training academies, and repair tool commerce. Engineered from 0 to 1 with self-serve enrollment and seamless service scheduling.",
    detail: [
      "A1 Information Technology operates at the intersection of technical vocational education and hardware repair services. Previously reliant on fragmented physical workflows, the organization needed a unified digital ecosystem to scale its physical academy, online courses, and customer repair intake. As Lead Product Engineer, I owned the 0-to-1 build of their digital infrastructure.",
      "I designed and architected two deeply integrated properties: a high-converting customer service portal for booking hardware repairs and tool purchasing, and a dedicated academy web application enabling student onboarding, curriculum management, and online tuition payments. Both applications were engineered with Next.js, TypeScript, Node.js, and MongoDB.",
      "By establishing clean user funnels and clear information architecture, the new platform eliminated operational bottlenecks for staff and allowed prospective students across Nigeria to discover, enroll, and pay for courses completely online.",
    ],
    image: "/projects/a1infotech.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Product Architecture"],
    role: "Lead Product Engineer",
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
    tagline: "Beauty Professionals Marketplace (Saudi Arabia)",
    description:
      "A Saudi Arabian marketplace connecting beauty professionals with clients. Engineered the core booking availability algorithms, multi-platform REST API, and transactional flows powering mobile and web clients.",
    detail: [
      "GlamConnect is a on-demand beauty services marketplace operating in Saudi Arabia, connecting independent beauty specialists and salons with clients. As Backend & Systems Product Engineer, I built the unified REST API backend that powers both native mobile clients and the web application.",
      "Marketplace dynamics required rock-solid scheduling logic: preventing overlapping appointments across varying time zones, handling multi-service bookings, and supporting localized payment settlements. Using Node.js, Express, and MongoDB, I engineered a high-concurrency booking engine with real-time slot reservation locks.",
      "The backend serves as the single source of truth for GlamConnect's Play Store, App Store, and web applications, ensuring consistent business logic, sub-100ms API responses, and zero double-bookings.",
    ],
    image: "/projects/glamconnect.jpg",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "System Design"],
    role: "Backend & Systems Product Engineer",
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
    tagline: "International Software & AI Agency Platform",
    description:
      "A high-conversion interactive brand platform for an international software & AI agency. Merged custom 3D WebGL visuals and scroll-triggered motion choreography with fast Core Web Vitals to maximize inbound sales leads.",
    detail: [
      "Cloudstech is an international software and artificial intelligence agency providing custom enterprise solutions. To position the agency effectively in a competitive global market, the firm required a flagship web presence that conveyed technical sophistication while driving qualified inbound client leads. As Frontend & Interactive Product Engineer, I built the platform from concept to deployment.",
      "I engineered interactive 3D elements using Three.js and choreographed scroll-driven animations with GSAP, ensuring 60fps rendering across desktop and mobile devices without degrading Core Web Vitals or search engine indexability.",
      "The resulting experience balances high visual craft with clear conversion paths, significantly increasing inquiry conversions and presenting an agency image on par with world-class digital product studios.",
    ],
    image: "/projects/cloudstech.jpg",
    tags: ["Next.js", "Three.js", "GSAP", "TypeScript", "UX & Interaction"],
    role: "Frontend & Interactive Product Engineer",
    year: "2024",
    links: [
      { label: "Website", href: "https://www.cloudstech.org/" },
    ],
  },
];
