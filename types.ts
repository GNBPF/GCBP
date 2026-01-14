export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  supportingLine: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  excerpt: string;
}

export interface Partner {
  id: string;
  name: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  rating: number;
}

export interface SDGGoal {
  id: number;
  title: string;
  color: string;
  imageUrl?: string;
}