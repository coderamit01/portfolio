import type { LucideIcon } from "lucide-react";

/** A run of text where `em` segments are rendered in the code-accent (pink) colour. */
export type RichText = { text: string; em?: boolean }[];

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: RichText;
}

export interface Job {
  company: string;
  period: string;
  /** Single-letter / glyph rendered in the logo tile. */
  logo: string;
  logoBg: string;
  logoColor: string;
  role: string;
  points: string[];
  tech: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  detail: string;
  active?: boolean;
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  client: string;
  time: string;
  tech: string;
  accent: string;
}

export interface Skill {
  label: string;
  color: string;
  bg?: string;
  /** Optional grid column placement (1-indexed) to mirror the staggered layout. */
  col?: number;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: { label: string; included: boolean }[];
  cta: string;
  featured?: boolean;
}

export interface BlogPost {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  gradient: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

export type Theme = "dark" | "light";
