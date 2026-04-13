export type ComponentStatus = 'draft' | 'new' | 'stable' | 'deprecated';

export type ComponentRecord = {
  id: string;
  title: string;
  description: string;
  category: string;
  library: string;
  status: ComponentStatus;
  featured: boolean;
  order: number;
};

type CategorySummary = {
  title: string;
  description: string;
  count: number;
};

type LibrarySummary = {
  title: string;
  count: number;
};

const componentCatalog: ComponentRecord[] = [
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'High-signal action primitives for CTA, toolbar, and inline command surfaces.',
    category: 'Buttons',
    library: 'shadcn/ui',
    status: 'stable',
    featured: true,
    order: 1,
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Flexible surfaces for grouping previews, metadata, and supporting actions.',
    category: 'Cards',
    library: 'shadcn/ui',
    status: 'stable',
    featured: true,
    order: 2,
  },
  {
    id: 'hero-sections',
    title: 'Hero Sections',
    description: 'Large-format introductory surfaces for landing pages and section entries.',
    category: 'Hero Sections',
    library: 'Astro',
    status: 'new',
    featured: true,
    order: 3,
  },
  {
    id: 'backgrounds',
    title: 'Backgrounds',
    description: 'Gradient, texture, and decorative background treatments for discovery pages.',
    category: 'Backgrounds',
    library: 'Astro',
    status: 'stable',
    featured: false,
    order: 4,
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Type hierarchy patterns for headings, descriptions, and dense technical guidance.',
    category: 'Typography',
    library: 'Astro',
    status: 'stable',
    featured: false,
    order: 5,
  },
  {
    id: 'layouts',
    title: 'Layouts',
    description: 'Container, split-pane, and card-grid patterns for responsive documentation surfaces.',
    category: 'Layouts',
    library: 'Astro',
    status: 'stable',
    featured: false,
    order: 6,
  },
];

export async function getComponentEntries() {
  return [...componentCatalog].sort((a, b) => a.order - b.order);
}

export async function getFeaturedComponentEntries(limit = 6) {
  return componentCatalog.filter((entry) => entry.featured).slice(0, limit);
}

export async function getCategorySummaries() {
  const grouped = new Map<string, ComponentRecord[]>();

  for (const entry of componentCatalog) {
    grouped.set(entry.category, [...(grouped.get(entry.category) ?? []), entry]);
  }

  return [...grouped.entries()]
    .map(([title, items]) => ({
      title,
      description: items[0]?.description ?? `Browse ${title.toLowerCase()} components.`,
      count: items.length,
    }))
    .sort((a, b) => a.title.localeCompare(b.title)) satisfies CategorySummary[];
}

export async function getLibrarySummaries() {
  const grouped = new Map<string, ComponentRecord[]>();

  for (const entry of componentCatalog) {
    grouped.set(entry.library, [...(grouped.get(entry.library) ?? []), entry]);
  }

  return [...grouped.entries()]
    .map(([title, items]) => ({
      title,
      count: items.length,
    }))
    .sort((a, b) => a.title.localeCompare(b.title)) satisfies LibrarySummary[];
}
