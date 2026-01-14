import { NavItem, Pillar, Metric, Story, Partner, TeamMember, Testimonial, SDGGoal } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/story' },
  { label: 'Mission', href: '/mission' },
  { label: 'Programs', href: '/programs' },
  { label: 'Media & Events', href: '/events' },
  { label: 'Donate', href: '/donate' },
];

export const SDG_GOALS: SDGGoal[] = [
  { id: 1, title: 'No Poverty', color: '#E5243B', imageUrl: '/SDG/sdg1.jpg' },
  { id: 2, title: 'Zero Hunger', color: '#DDA63A', imageUrl: '/SDG/sdg2.jpg' },
  { id: 3, title: 'Good Health and Well-Being', color: '#4C9F38', imageUrl: '/SDG/sdg3.jpg' },
  { id: 4, title: 'Quality Education', color: '#C5192D', imageUrl: '/SDG/sdg4.jpg' },
  { id: 5, title: 'Gender Equality', color: '#FF3A21', imageUrl: '/SDG/sdg5.jpg' },
  { id: 6, title: 'Clean Water and Sanitation', color: '#26BDE2', imageUrl: '/SDG/sdg6.jpg' },
  { id: 7, title: 'Affordable and Clean Energy', color: '#FCC30B', imageUrl: '/SDG/sdg7.jpg' },
  { id: 8, title: 'Decent Work and Economic Growth', color: '#A21942', imageUrl: '/SDG/sdg8.jpg' },
  { id: 9, title: 'Industry, Innovation and Infrastructure', color: '#FD6925', imageUrl: '/SDG/sdg9.jpg' },
  { id: 10, title: 'Reduced Inequalities', color: '#DD1367', imageUrl: '/SDG/sdg10.jpg' },
  { id: 11, title: 'Sustainable Cities and Communities', color: '#FD9D24', imageUrl: '/SDG/sdg11.jpg' },
  { id: 12, title: 'Responsible Consumption and Production', color: '#BF8B2E', imageUrl: '/SDG/sdg12.jpg' },
  { id: 13, title: 'Climate Action', color: '#3F7E44', imageUrl: '/SDG/sdg13.jpg' },
  { id: 14, title: 'Life Below Water', color: '#0A97D9', imageUrl: '/SDG/sdg14.jpg' },
  { id: 15, title: 'Life on Land', color: '#56C02B', imageUrl: '/SDG/sdg15.jpg' },
  { id: 16, title: 'Peace, Justice and Strong Institutions', color: '#00689D', imageUrl: '/SDG/sdg16.jpg' },
  { id: 17, title: 'Partnerships for the Goals', color: '#19486A', imageUrl: '/SDG/sdg17.jpg' },
];

export const PILLARS: Pillar[] = [
  {
    id: 'p1',
    title: 'Human Welfare Systems',
    description: 'Reimagining social safety nets through decentralized community governance models.',
    supportingLine: 'Focus: Global South Infrastructure',
  },
  {
    id: 'p2',
    title: 'Planetary Regeneration',
    description: 'Large-scale ecosystem restoration projects driven by indigenous land management data.',
    supportingLine: 'Focus: Biomass & Soil Health',
  },
  {
    id: 'p3',
    title: 'Civic Empowerment',
    description: 'Providing legal frameworks and digital tools for grassroots policy advocacy.',
    supportingLine: 'Focus: Institutional Transparency',
  },
  {
    id: 'p4',
    title: 'Future Heritage',
    description: 'Preserving cultural knowledge systems while adapting to climate migration realities.',
    supportingLine: 'Focus: Cultural Continuity',
  },
];

export const METRICS: Metric[] = [
  { id: 'm1', value: '42', label: 'Countries Active', suffix: '' },
  { id: 'm2', value: '180', label: 'Partner Institutions', suffix: '+' },
  { id: 'm3', value: '12', label: 'Billion USD Deployed', suffix: 'B' },
  { id: 'm4', value: '35', label: 'Years of Operation', suffix: '' },
];

export const STORIES: Story[] = [
  {
    id: 's1',
    title: 'The Water Commons of The Sahel',
    category: 'Regeneration',
    imageUrl: '/img1.jpeg',
    excerpt: 'How community-led aquifer management is reversing desertification in the region.',
  },
  {
    id: 's2',
    title: 'Urban Policy in Coastal Megacities',
    category: 'Welfare',
    imageUrl: '/img2.jpeg',
    excerpt: 'Adapting zoning laws to protect vulnerable populations from rising sea levels.',
  },
  {
    id: 's3',
    title: 'Seed Banks as Cultural Archives',
    category: 'Heritage',
    imageUrl: '/img3.jpeg',
    excerpt: 'Preserving biodiversity is inextricably linked to preserving linguistic diversity.',
  },
];

export const PARTNERS: Partner[] = [
  { id: 'pt1', name: 'Global Policy Institute' },
  { id: 'pt2', name: 'Center for Civic Design' },
  { id: 'pt3', name: 'Earth Systems Bureau' },
  { id: 'pt4', name: 'Nordic Development Fund' },
  { id: 'pt5', name: 'Pacific Alliance' },
  { id: 'pt6', name: 'Future Generations Trust' },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Dr. Elena Vasquez',
    role: 'Executive Director',
    imageUrl: '/img4.jpeg'
  },
  {
    id: 't2',
    name: 'James Okonjo',
    role: 'Head of Operations',
    imageUrl: '/img5.jpeg'
  },
  {
    id: 't3',
    name: 'Sarah Chen',
    role: 'Policy Research Lead',
    imageUrl: '/img6.jpeg'
  },
  {
    id: 't4',
    name: 'David Al-Rahim',
    role: 'Field Coordinator',
    imageUrl: '/img7.jpeg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    name: 'Maria Sanchez',
    role: 'Community Leader, Peru',
    quote: `GCBP didn't just bring funding; they brought a framework for us to govern our own resources legally and sustainably.`,
    imageUrl: '/img8.jpeg',
    rating: 5
  },
  {
    id: 'tm2',
    name: 'Dr. Aris Thorne',
    role: 'Climate Scientist',
    quote: 'Their data-driven approach to reforestation is exactly what the scientific community has been advocating for.',
    imageUrl: '/img9.jpeg',
    rating: 5
  },
  {
    id: 'tm3',
    name: 'Lina Osei',
    role: 'Education Minister',
    quote: 'A true partnership that respects local culture while implementing world-class educational infrastructure.',
    imageUrl: '/img10.jpeg',
    rating: 5
  }
];

export const PROGRAM_STORIES = [
  {
    id: 'ps1',
    title: 'Amina & Leila',
    subtitle: 'Climate Refugees, Uganda',
    description: 'Brought dignity and daily food to dozens of families.',
    imageUrl: '/img1.jpeg'
  },
  {
    id: 'ps2',
    title: 'The Forest Guardians',
    subtitle: 'Amazonia, Brazil',
    description: 'Protecting 50,000 hectares of ancestral land from illegal logging.',
    imageUrl: '/img2.jpeg'
  },
  {
    id: 'ps3',
    title: 'Solar Sisters',
    subtitle: 'Rajasthan, India',
    description: 'Training 500 women as solar engineers for remote villages.',
    imageUrl: '/img3.jpeg'
  },
  {
    id: 'ps4',
    title: 'Ocean Cleaners',
    subtitle: 'Bali, Indonesia',
    description: 'Removing plastic waste from coral reefs with local divers.',
    imageUrl: '/img4.jpeg'
  },
  {
    id: 'ps5',
    title: 'Education First',
    subtitle: 'Nepal',
    description: 'Rebuilding schools destroyed by earthquakes.',
    imageUrl: '/img5.jpeg'
  }
];

export const EVENTS = [
  {
    month: 'NOVEMBER',
    items: [
      {
        id: 'e1',
        day: '04',
        weekday: 'THU',
        title: 'COP29: Climate Action Summit',
        location: 'Geneva Convention Center, Geneva, Switzerland',
        description: 'GCBP leads the panel on Indigenous Land Rights and Carbon Credits. Join world leaders in discussing the framework for 2030.',
        tags: ['CLIMATE ACTION', 'SDG 13', 'POLICY'],
        imageUrl: '/img6.jpeg'
      },
      {
        id: 'e2',
        day: '05',
        weekday: 'FRI',
        title: 'Global Water Security Forum',
        location: 'Nairobi Water Research Institute, Kenya',
        description: 'Launching our new initiative for decentralized water purification systems in arid sub-Saharan regions.',
        tags: ['CLEAN WATER', 'SDG 6', 'INNOVATION'],
        imageUrl: '/img7.jpeg'
      },
      {
        id: 'e3',
        day: '06',
        weekday: 'SAT',
        title: 'Women in Leadership Gala',
        location: 'Metropolitan Arts Centre, New York, USA',
        description: 'A fundraising evening dedicated to empowering women entrepreneurs in the Global South through micro-finance.',
        tags: ['GENDER EQUALITY', 'SDG 5', 'CHARITY'],
        imageUrl: '/img8.jpeg'
      }
    ]
  },
  {
    month: 'DECEMBER',
    items: [
      {
        id: 'e4',
        day: '03',
        weekday: 'WED',
        title: 'Sustainable Cities Exhibition',
        location: 'AsiaWorld-Expo, Hong Kong',
        description: 'Showcasing our urban vertical farming pilots and smart-grid energy solutions implemented in densely populated zones.',
        tags: ['SUSTAINABLE CITIES', 'SDG 11', 'TECH'],
        imageUrl: '/img9.jpeg'
      },
      {
        id: 'e5',
        day: '05',
        weekday: 'FRI',
        title: 'Youth Education Initiative',
        location: 'Virtual Symposium (Global)',
        description: 'Connecting 500 schools worldwide to discuss digital literacy and the future of remote education infrastructure.',
        tags: ['EDUCATION', 'SDG 4', 'VIRTUAL'],
        imageUrl: '/img10.jpeg'
      }
    ]
  }
];