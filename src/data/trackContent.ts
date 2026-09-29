import type { PortfolioTrack } from "./tracks";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export type TrackContentOverrides = {
  meta?: {
    titleDefault?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
  };
  hero?: {
    badge?: string;
    titleLine1?: string;
    titleLine2?: string;
    titleLine3?: string;
    description?: string;
    productEngineer?: string;
  };
  marquee?: string[];
  about?: {
    heading?: string;
    bio1?: string;
    bio2?: string;
    skills?: { label: string; percent: number }[];
  };
  stackHeading?: string;
  stackIndices?: number[];
  experienceIndices?: number[];
  preferredProjects?: string[];
};

export const trackContentEn: Record<PortfolioTrack, TrackContentOverrides> = {
  all: {},
  mobile: {
    hero: {
      badge: "MOBILE APP DEVELOPER — CODIAC",
      titleLine1: "SHIPPING INTUITIVE",
      titleLine2: "CROSS-PLATFORM",
      titleLine3: "MOBILE APPS.",
      description: "4+ years engineering production iOS and Android apps with React Native & Expo. From gesture-driven 60fps UX to offline-first architectures, low-bandwidth resilience, and native payment flows across Africa and the Middle East.",
      productEngineer: "Mobile App Developer",
    },
    marquee: [
      "React Native",
      "Expo",
      "iOS & Android",
      "Mobile UX",
      "Offline-First",
      "TypeScript",
      "App Store & Google Play",
      "Reanimated",
      "Mobile Payments",
      "Native Modules",
      "Performance Tuning",
      "Push Notifications",
    ],
    about: {
      heading: "Mobile App Developer\nBuilding for Frictionless Hands-On UX",
      bio1: "I'm Musa Musa Kannike (Codiac) — a Mobile App Developer specializing in high-performance cross-platform applications with React Native and Expo.",
      bio2: "I design and build mobile apps that thrive under real-world conditions: erratic networks, varying screen sizes, and strict latency demands. Having shipped products to thousands of users on both Google Play and the Apple App Store, I focus on instant responsiveness, smooth animations, and bulletproof user checkout flows.",
      skills: [
        { label: "React Native / Expo", percent: 96 },
        { label: "TypeScript / JavaScript", percent: 95 },
        { label: "Mobile UX & Gestures", percent: 92 },
        { label: "Offline Storage & State", percent: 90 },
        { label: "App Store & Play Console Deployment", percent: 88 },
        { label: "REST APIs & Native Bridges", percent: 85 },
      ],
    },
    stackHeading: "Mobile Architecture & Engineering",
    stackIndices: [1, 0, 2],
    preferredProjects: ["terrachow", "360gadgets-africa", "sabilearn", "glamconnect"],
  },
  frontend: {
    hero: {
      badge: "FRONTEND & INTERACTIVE DEVELOPER — CODIAC",
      titleLine1: "CRAFTING ENGAGING",
      titleLine2: "HIGH-PERFORMANCE",
      titleLine3: "WEB EXPERIENCES.",
      description: "4+ years creating pixel-perfect, accessible, and fast web applications using React, Next.js, and TypeScript. Specializing in interactive 3D with Three.js, GSAP motion choreography, and high-converting product UI.",
      productEngineer: "Frontend Developer",
    },
    marquee: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Three.js",
      "GSAP Motion",
      "Tailwind CSS",
      "Core Web Vitals",
      "Responsive UX",
      "Design Systems",
      "State Management",
      "Performance & SEO",
      "Accessible UI",
    ],
    about: {
      heading: "Frontend & UI Developer\nObsessed with Craft & Performance",
      bio1: "I'm Musa Musa Kannike (Codiac) — a Frontend & Interactive Web Developer passionate about building engaging, fluid, and scalable web interfaces.",
      bio2: "I blend visual artistry with solid engineering practices. From interactive 3D WebGL scenes to sub-second page loads and robust component design systems, I ensure digital products not only look world-class but feel effortless and convert visitors into active users.",
      skills: [
        { label: "React.js / Next.js", percent: 96 },
        { label: "TypeScript", percent: 95 },
        { label: "CSS / Tailwind CSS / Design Systems", percent: 94 },
        { label: "Three.js & GSAP Interactions", percent: 88 },
        { label: "Core Web Vitals & Performance", percent: 90 },
        { label: "Accessibility (a11y) & SEO", percent: 86 },
      ],
    },
    stackHeading: "Frontend Architecture & Interactive UX",
    stackIndices: [0, 1, 2],
    preferredProjects: ["cloudstech", "a1-information-technology", "sabilearn", "360gadgets-africa"],
  },
  backend: {
    hero: {
      badge: "BACKEND & SYSTEMS DEVELOPER — CODIAC",
      titleLine1: "ENGINEERING RESILIENT",
      titleLine2: "HIGH-CONCURRENCY",
      titleLine3: "APIs & PLATFORMS.",
      description: "4+ years architecting reliable backend services, transactional databases, and payment failover engines using Node.js, Express, NestJS, and MongoDB. Delivering sub-100ms response times and zero double-bookings.",
      productEngineer: "Backend Developer",
    },
    marquee: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "Prisma",
      "RESTful APIs",
      "Payment Gateways",
      "System Design",
      "Database Optimization",
      "Microservices",
      "Authentication & Security",
      "Cloud Deployment",
    ],
    about: {
      heading: "Backend & Systems Developer\nFocused on Reliability and Scale",
      bio1: "I'm Musa Musa Kannike (Codiac) — a Backend and Systems Developer building mission-critical services, automated dispatch pipelines, and high-concurrency scheduling systems.",
      bio2: "Behind great customer-facing interfaces lies rock-solid server architecture. I specialize in designing transactional database schemas, implementing fault-tolerant payment flows with multi-gateway routing, and structuring clean APIs that power mobile and web frontends with high speed and zero data corruption.",
      skills: [
        { label: "Node.js / Express / NestJS", percent: 95 },
        { label: "MongoDB & Schema Architecture", percent: 92 },
        { label: "REST APIs & System Design", percent: 92 },
        { label: "Payment Gateways (Paystack, Flutterwave)", percent: 94 },
        { label: "Authentication & Security", percent: 88 },
        { label: "Docker & Cloud Deployments", percent: 80 },
      ],
    },
    stackHeading: "Backend Infrastructure & Distributed Systems",
    stackIndices: [2, 0, 1],
    preferredProjects: ["glamconnect", "360gadgets-africa", "a1-information-technology"],
  },
};

export const trackContentAr: Record<PortfolioTrack, TrackContentOverrides> = {
  all: {},
  mobile: {
    hero: {
      badge: "مطور تطبيقات الجوال — كودياك",
      titleLine1: "أطور تطبيقات جوال",
      titleLine2: "عالية الأداء",
      titleLine3: "وسلسة الاستخدام.",
      description: "أكثر من 4 سنوات في تطوير تطبيقات iOS وAndroid المتقنة باستخدام React Native وExpo. من تجارب تفاعلية بمعدل 60 إطاراً في الثانية إلى بنى معمارية تعمل دون اتصال بالإنترنت وحلول دفع مرنة.",
      productEngineer: "مطور تطبيقات الجوال",
    },
    marquee: [
      "React Native",
      "Expo",
      "تطبيقات iOS وAndroid",
      "واجهات الجوال",
      "العمل دون اتصال",
      "TypeScript",
      "App Store & Google Play",
      "Reanimated",
      "بوابات الدفع للجوال",
      "Native Modules",
      "تحسين الأداء",
      "الإشعارات الفورية",
    ],
    about: {
      heading: "مطور تطبيقات الجوال\nيركز على تجربة مستخدم سلسة واستثنائية",
      bio1: "أنا موسى موسى كانيكي (كودياك) — مطور برمجيات وتطبيقات متخصص في بناء تطبيقات الجوال متعددة المنصات باستخدام React Native وExpo.",
      bio2: "أركز على بناء تطبيقات تعمل بكفاءة تحت ظروف الاستخدام الحقيقية: تقلبات الشبكة، تنوع الشاشات، وسرعة الاستجابة اللحظية. أطلقت تطبيقات ناجحة على متجري Google Play وApp Store تخدم آلاف المستخدمين.",
      skills: [
        { label: "React Native / Expo", percent: 96 },
        { label: "TypeScript / JavaScript", percent: 95 },
        { label: "واجهات وحركات الجوال", percent: 92 },
        { label: "التخزين المحلي وإدارة الحالة", percent: 90 },
        { label: "النشر على المتاجر (App Store & Play Store)", percent: 88 },
        { label: "واجهات البرمجة REST والربط الأصيل", percent: 85 },
      ],
    },
    stackHeading: "بنية وهندسة تطبيقات الجوال",
    stackIndices: [1, 0, 2],
    preferredProjects: ["terrachow", "360gadgets-africa", "sabilearn", "glamconnect"],
  },
  frontend: {
    hero: {
      badge: "مطور الواجهات الأمامية والتفاعلية — كودياك",
      titleLine1: "أصمم تجارب ويب",
      titleLine2: "سريعة الاستجابة",
      titleLine3: "وفريدة التصميم.",
      description: "أكثر من 4 سنوات في هندسة واجهات ويب تفاعلية وسريعة باستخدام React وNext.js وTypeScript. متخصص في المؤثرات ثلاثية الأبعاد (Three.js)، حركات GSAP الانسيابية، وأنظمة التصميم القابلة للتوسع.",
      productEngineer: "مطور واجهات أمامية",
    },
    marquee: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Three.js",
      "حركات GSAP",
      "Tailwind CSS",
      "Core Web Vitals",
      "واجهات تفاعلية",
      "أنظمة التصميم",
      "إدارة الحالة",
      "تحسين الأداء وSEO",
      "إمكانية الوصول (a11y)",
    ],
    about: {
      heading: "مطور الواجهات الأمامية\nيجمع بين الشغف البصري والدقة التقنية",
      bio1: "أنا موسى موسى كانيكي (كودياك) — مطور واجهات أمامية ومصمم تجارب تفاعلية أبتكر واجهات ويب تترك انطباعاً مبهراً.",
      bio2: "أدمج الحرفية البصرية مع أفضل الممارسات الهندسية. من المشاهد ثلاثية الأبعاد WebGL إلى سرعة تحميل لا تتجاوز الثانية، أضمن أن تكون منصتك الرقمية متميزة عالمياً وسهلة الاستخدام لكل زائر.",
      skills: [
        { label: "React.js / Next.js", percent: 96 },
        { label: "TypeScript", percent: 95 },
        { label: "CSS / Tailwind CSS / أنظمة التصميم", percent: 94 },
        { label: "Three.js ومؤثرات GSAP", percent: 88 },
        { label: "Core Web Vitals وتحسين سرعة الويب", percent: 90 },
        { label: "إمكانية الوصول (a11y) وSEO", percent: 86 },
      ],
    },
    stackHeading: "تطوير الواجهات الأمامية والتجارب التفاعلية",
    stackIndices: [0, 1, 2],
    preferredProjects: ["cloudstech", "a1-information-technology", "sabilearn", "360gadgets-africa"],
  },
  backend: {
    hero: {
      badge: "مطور البنى التحتية والخوادم — كودياك",
      titleLine1: "أبني بنى تحتية",
      titleLine2: "قوية وموثوقة",
      titleLine3: "عالية التحمل.",
      description: "أكثر من 4 سنوات في تصميم خوادم وخدمات REST APIs وقواعد بيانات موثوقة باستخدام Node.js وExpress وNestJS وMongoDB. مع استجابة أقل من 100 ملي ثانية وحلول دفع مخصصة.",
      productEngineer: "مطور خوادم وأنظمة",
    },
    marquee: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "Prisma",
      "RESTful APIs",
      "بوابات الدفع الإلكتروني",
      "تصميم النظم (System Design)",
      "تحسين قواعد البيانات",
      "الخدمات المصغرة (Microservices)",
      "المصادقة والأمان",
      "النشر السحابي",
    ],
    about: {
      heading: "مطور خوادم ونظم\nمكرس للأمان والموثوقية والتوسع العالي",
      bio1: "أنا موسى موسى كانيكي (كودياك) — مطور خوادم ونظم معمارية متخصص في بناء خدمات الويب الأساسية وأنظمة الحجز والمدفوعات عالية الحركة.",
      bio2: "خلف كل واجهة مستخدم ممتازة تكمن بنية خوادم متينة. أتخصص في تصميم مخططات قواعد بيانات محكمة، دمج بوابات الدفع مع أنظمة التبديل التلقائي عند الفشل، وبناء واجهات برمجة تطبيقات (APIs) سريعة ومحمية تدعم منصات الويب والجوال.",
      skills: [
        { label: "Node.js / Express / NestJS", percent: 95 },
        { label: "MongoDB وهندسة البيانات", percent: 92 },
        { label: "REST APIs وتصميم النظم", percent: 92 },
        { label: "بوابات الدفع (Paystack, Flutterwave)", percent: 94 },
        { label: "المصادقة وأمان الخوادم", percent: 88 },
        { label: "Docker والنشر السحابي", percent: 80 },
      ],
    },
    stackHeading: "البنية التحتية والأنظمة الموزعة",
    stackIndices: [2, 0, 1],
    preferredProjects: ["glamconnect", "360gadgets-africa", "a1-information-technology"],
  },
};

export function applyTrackToDictionary(
  dict: Dictionary,
  track: PortfolioTrack,
  lang: string
): Dictionary {
  if (track === "all") return dict;

  const overridesMap = lang === "ar" ? trackContentAr : trackContentEn;
  const overrides = overridesMap[track] || {};

  const updated = JSON.parse(JSON.stringify(dict)) as Dictionary;

  if (overrides.meta) {
    updated.meta = {
      ...updated.meta,
      ...overrides.meta,
    };
  }

  if (overrides.hero) {
    updated.hero = {
      ...updated.hero,
      ...overrides.hero,
    };
  }

  if (overrides.marquee && overrides.marquee.length > 0) {
    updated.marquee = overrides.marquee;
  }

  if (overrides.about) {
    updated.about = {
      ...updated.about,
      ...overrides.about,
      skills: overrides.about.skills || updated.about.skills,
    };
  }

  if (overrides.stackHeading) {
    updated.stack.heading = overrides.stackHeading;
  }

  if (overrides.stackIndices && overrides.stackIndices.length > 0) {
    const originalItems = [...updated.stack.items];
    updated.stack.items = overrides.stackIndices
      .map((idx) => originalItems[idx])
      .filter(Boolean);
  }

  return updated;
}
