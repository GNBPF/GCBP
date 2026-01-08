export interface NavItem {
  label: string;
  href: string;
  isHash?: boolean;
}

export interface BlogPost {
  id: string;
  date: string;
  location: string;
  title: string;
  imageUrl: string;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  description: string;
}
