/**
 * Sidebar navigation data for the Docs section.
 * Structured as an aggregator across multiple UI libraries.
 */

export type SidebarItem = {
  href: string;
  label: string;
  badge?: string;
};

export type SidebarGroup = {
  title: string;
  items: SidebarItem[];
};

export const docsSidebarGroups: SidebarGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { href: '/docs', label: 'Overview' },
      { href: '/docs/installation', label: 'Installation' },
      { href: '/docs/component-landscape', label: 'Component Landscape' },
    ],
  },
  {
    title: 'Libraries',
    items: [
      { href: '/docs/libraries/magic-ui', label: 'Magic UI' },
      { href: '/docs/libraries/kokonut-ui', label: 'Kokonut UI' },
      { href: '/docs/libraries/cult-ui', label: 'Cult UI' },
      { href: '/docs/libraries/tremor', label: 'Tremor' },
      { href: '/docs/libraries/daisyui', label: 'DaisyUI' },
      { href: '/docs/libraries/shadcn', label: 'Shadcn' },
      { href: '/docs/libraries/aceternity-ui', label: 'Aceternity UI' },
      { href: '/docs/libraries/origin-ui', label: 'Origin UI' },
      { href: '/docs/libraries/nextui', label: 'NextUI' },
      { href: '/docs/libraries/flowbite', label: 'Flowbite' },
      { href: '/docs/libraries/preline', label: 'Preline UI' },
    ],
  },
  {
    title: 'Component Groups',
    items: [
      { href: '/docs/backgrounds', label: 'Backgrounds' },
      { href: '/docs/buttons', label: 'Buttons' },
      { href: '/docs/cards', label: 'Cards' },
      { href: '/docs/hero-sections', label: 'Hero Sections' },
      { href: '/docs/layouts', label: 'Layouts' },
      { href: '/docs/typography', label: 'Typography' },
    ],
  },
];

/**
 * Check if a sidebar item is active based on the current path.
 */
export function isActiveLink(href: string, currentPath: string): boolean {
  if (href === '/docs') {
    return currentPath === '/docs' || currentPath === '/docs/';
  }
  return currentPath.startsWith(href);
}
