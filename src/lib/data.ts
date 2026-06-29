import {
  Award,
  BrainCircuit,
  Database,
  Gauge,
  Layers,
  Mail,
  MapPinned,
  MessageCircle,
  Monitor,
  Phone,
  ShoppingCart,
  Users,
  Webhook,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import type {
  BlogPost,
  ContactInfo,
  Job,
  NavLink,
  PricingPlan,
  Project,
  Service,
  SkillGroup,
  SocialLink,
  Stat,
  Testimonial,
  TimelineItem,
} from "@/src/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SOCIALS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "X", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
];

/** Roles cycled through by the typewriter effect in the hero headline. */
export const HERO_ROLES = [
  "Full Stack",
  "Front End",
  "Back End",
  "DevOps",
  "AI/ML",
];

export const STATS: Stat[] = [
  { icon: Layers, value: 6, suffix: "+", label: "Year Experience" },
  { icon: Monitor, value: 125, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 341, suffix: "+", label: "Satisfied Clients" },
  { icon: Award, value: 9, suffix: "+", label: "Awards Winner" },
];

export const COMPANY_LOGOS = [
  "stripe",
  "Google",
  "SAMSUNG",
  "mon",
  "Spotify",
  "INTERCOM",
  "GoCardless",
  "notion",
];

export const GIT_JOURNAL = [
  { date: "15 Jul", text: "Muzzilla-streaming-API-services-for-Python", dim: false },
  { date: "30 Jun", text: "ChatHub-Chat-application-VueJs-Mongodb", dim: false },
  { date: "26 May", text: "DineEasy-coffee-tea-reservation-system", dim: false },
  { date: "17 Apr", text: "FinanceBuddy-Personal-finance-tracker", dim: true },
  { date: "05 Mar", text: "TuneStream-Music-streaming-service-API", dim: true },
];

export const SERVICES: Service[] = [
  {
    icon: Monitor,
    title: "Web & App Development",
    description: [
      { text: "Crafting visually appealing and user-friendly interfaces using " },
      { text: "HTML, CSS, JavaScript", em: true },
      { text: ", and modern frameworks like React and Angular." },
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    description: [
      { text: "Designing and managing databases with SQL and NoSQL technologies such as " },
      { text: "MySQL, PostgreSQL", em: true },
      { text: ", and " },
      { text: "MongoDB", em: true },
      { text: "." },
    ],
  },
  {
    icon: Webhook,
    title: "API Development",
    description: [
      { text: "Creating and integrating " },
      { text: "RESTful APIs", em: true },
      { text: " to enable smooth communication between front-end and back-end systems." },
    ],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: [
      { text: "Improving the speed and performance of web applications to provide a better user experience. Work with " },
      { text: "Nodejs, Express", em: true },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: [
      { text: "Developing scalable and secure payment solutions for " },
      { text: "e-commerce platforms", em: true },
      { text: " tailored to your business needs." },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Integrating AI",
    description: [
      { text: "Boost your applications with AI for improved efficiency, automation, and enhanced user experience" },
    ],
  },
];

export const JOBS: Job[] = [
  {
    company: "Google",
    period: "2018 - Present",
    logo: "G",
    logoBg: "#ffffff",
    logoColor: "#4285F4",
    role: "Senior Software Engineer",
    points: [
      "Led development of scalable web applications, improving performance and user experience for millions of users.",
      "Implemented machine learning algorithms to enhance search functionality.",
      "Collaborated with cross-functional teams to integrate new features seamlessly.",
    ],
    tech: ["Python", "TensorFlow", "Angular", "Kubernetes", "GCP"],
  },
  {
    company: "Twitter (X)",
    period: "2012 - 2015",
    logo: "X",
    logoBg: "#000000",
    logoColor: "#ffffff",
    role: "Front-End Engineer",
    points: [
      "Rebuilt the timeline rendering pipeline, cutting initial load time by 38%.",
      "Shipped a real-time notification system handling 50k events/sec.",
      "Mentored 4 junior engineers and established the component design system.",
    ],
    tech: ["JavaScript", "React", "Redux", "GraphQL", "Redis"],
  },
  {
    company: "Amazon",
    period: "2015 - 2018",
    logo: "a",
    logoBg: "#ffffff",
    logoColor: "#ff9900",
    role: "Backend Developer",
    points: [
      "Designed microservices powering order fulfilment across 3 regions.",
      "Reduced infrastructure cost 22% through autoscaling and caching strategy.",
      "Owned the CI/CD pipeline migration to containerized deployments.",
    ],
    tech: ["Java", "Spring", "DynamoDB", "AWS", "Docker"],
  },
  {
    company: "PayPal",
    period: "2010 - 2012",
    logo: "P",
    logoBg: "#ffffff",
    logoColor: "#003087",
    role: "Software Engineer",
    points: [
      "Built a fraud-detection rules engine processing millions of daily transactions.",
      "Integrated third-party payment gateways with 99.99% uptime.",
      "Improved API response latency by 45% via query optimization.",
    ],
    tech: ["PHP", "MySQL", "Node.js", "REST", "Memcached"],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    period: "2020-2024",
    title: "MIT",
    detail: "Bachelor's Degree in Computer Science",
    active: true,
  },
  {
    period: "2018-2019",
    title: "Harvard University",
    detail: "Certification in React and Redux, Node.js Developer Course",
  },
  {
    period: "2015-2016",
    title: "Stanford University",
    detail: "Certification in Full Stack Web Development",
  },
  {
    period: "2013-2015",
    title: "University of Washington",
    detail: "Certification in React and Redux, Node.js Developer Course",
  },
];

export const RESEARCHED: TimelineItem[] = [
  {
    period: "2023-2024",
    title: "Advanced Data Analytics with Big Data Tools",
    detail: "Utilized big data tools for advanced analytics and insights.",
    active: true,
  },
  {
    period: "2021-2013",
    title: "Cloud-Native Application Architectures",
    detail: "Studied best practices for designing cloud-native applications.",
  },
  {
    period: "2019-2020",
    title: "AI-Driven User Experience Personalization",
    detail: "Leveraged AI to personalize user experiences based on behavior.",
  },
];

export const PROJECTS: Project[] = [
  {
    tag: "Deepgram API",
    title: "Integrate AI into the ecommerce system",
    description:
      "Developed an online learning platform with course management, quizzes, and progress tracking.",
    client: "Conceptual JSC",
    time: "6 months",
    tech: "Node.js, React, MongoDB, Stripe",
    accent: "#8dd14f",
  },
  {
    tag: "ChatHub",
    title: "Realtime chat & collaboration suite",
    description:
      "Built a scalable messaging platform with presence, threads, and end-to-end encryption.",
    client: "NimbusWorks LLC",
    time: "4 months",
    tech: "Vue.js, Express, PostgreSQL, Redis",
    accent: "#61dafb",
  },
  {
    tag: "FinanceBuddy",
    title: "Personal finance tracker dashboard",
    description:
      "Designed an analytics dashboard with budgeting, forecasting, and live bank-sync integrations.",
    client: "FinTrust Inc",
    time: "5 months",
    tech: "Next.js, Django, MySQL, Plaid",
    accent: "#f5c451",
  },
];

export const SKILL_TILES = [
  { label: "JS", color: "#83c84b", bg: "var(--inner)", col: 1 },
  { label: "N", color: "#ffffff", bg: "#000000", col: 2 },
  { label: "Nd", color: "#13aa52", bg: "var(--inner)", col: 3 },
  { label: "▲", color: "#ffa611", bg: "var(--inner)", col: 4 },
  { label: "⚛", color: "#61dafb", bg: "var(--inner)", col: 5 },
  { label: "V", color: "#42b883", bg: "var(--inner)", col: 2 },
  { label: "A", color: "#dd0031", bg: "var(--inner)", col: 3 },
  { label: "L", color: "#ff2d20", bg: "var(--inner)", col: 4 },
  { label: "TW", color: "#38bdf8", bg: "var(--inner)", col: 5 },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { label: "Front-End:", items: "HTML, CSS, JavaScript, React, Angular" },
  { label: "Back-End:", items: "Node.js, Express, Python, Django" },
  { label: "Databases:", items: "MySQL, PostgreSQL, MongoDB" },
  { label: "Tools & Platforms:", items: "Git, Docker, AWS, Heroku" },
  { label: "Others:", items: "RESTful APIs, GraphQL, Agile Methodologies" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Amit delivered our platform ahead of schedule and the code quality was exceptional. He turned a vague brief into a polished product our users love.",
    name: "Sarah Mitchell",
    role: "CEO, Conceptual JSC",
    initials: "SM",
  },
  {
    quote:
      "Working with Amit felt like having a senior partner, not just a contractor. Clear communication, smart architecture decisions, zero surprises.",
    name: "David Chen",
    role: "CTO, NimbusWorks",
    initials: "DC",
  },
  {
    quote:
      "Our conversion rate jumped 30% after the rebuild. Amit genuinely cares about performance and user experience down to the last detail.",
    name: "Elena Rossi",
    role: "Product Lead, FinTrust",
    initials: "ER",
  },
];

export const PRICING: PricingPlan[] = [
  {
    name: "Starter",
    price: "$49",
    unit: "/hr",
    description: "For small landing pages and quick fixes.",
    features: [
      { label: "Responsive single page", included: true },
      { label: "Up to 3 sections", included: true },
      { label: "Backend integration", included: false },
      { label: "Priority support", included: false },
    ],
    cta: "Get started",
  },
  {
    name: "Professional",
    price: "$89",
    unit: "/hr",
    description: "Full-stack builds with modern frameworks.",
    featured: true,
    features: [
      { label: "Multi-page application", included: true },
      { label: "REST & GraphQL APIs", included: true },
      { label: "Database integration", included: true },
      { label: "Dedicated maintenance", included: false },
    ],
    cta: "Choose plan",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Long-term partnership & scaling support.",
    features: [
      { label: "Everything in Professional", included: true },
      { label: "Dedicated maintenance", included: true },
      { label: "Priority 24/7 support", included: true },
      { label: "SLA & consulting", included: true },
    ],
    cta: "Contact me",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "CEO",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "Optimize Your Web Application for Speed",
    excerpt:
      "Stay ahead of the curve with these emerging trends in UI/UX design.",
    gradient: "linear-gradient(150deg,#1d2330,#11141c)",
  },
  {
    category: "Development",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "Best Practices for Secure Web Development",
    excerpt:
      "Stay ahead of the curve with these emerging trends in UI/UX design.",
    gradient: "linear-gradient(150deg,#221d30,#14111c)",
  },
  {
    category: "Trending",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "10 JavaScript Frameworks for Web Development in 2024",
    excerpt:
      "Stay ahead of the curve with these emerging trends in UI/UX design.",
    gradient: "linear-gradient(150deg,#1a2230,#10141c)",
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: Phone, label: "Phone Number", value: "+1-234-567-8901" },
  { icon: Mail, label: "Email", value: "contact@william.design" },
  { icon: MessageCircle, label: "Skype", value: "WilliamDesignUX" },
  { icon: MapPinned, label: "Address", value: "0811 Erdman Prairie, Joaville CA" },
];

export const COOPERATION_CONTACTS = [
  { label: "[skype]", value: "Amit.dev" },
  { label: "[phone]", value: "+1-234-567-8901" },
  { label: "[email]", value: "contact@Amit.dev" },
];
