import { useEffect, useState, useCallback } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  FileText,
  Sparkles,
  MousePointer2,
  CreditCard,
  Layout,
  Box,
  Type,
  Layers,
  BookOpen,
  Palette,
  Search,
} from 'lucide-react';

type CommandEntry = {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
};

const gettingStartedItems: CommandEntry[] = [
  { label: 'Overview', href: '/docs', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'Installation', href: '/docs/installation', icon: <FileText className="h-4 w-4" /> },
  { label: 'Component Landscape', href: '/docs/component-landscape', icon: <Layers className="h-4 w-4" /> },
];

const componentItems: CommandEntry[] = [
  { label: 'Backgrounds', href: '/docs/backgrounds', icon: <Box className="h-4 w-4" /> },
  { label: 'Buttons', href: '/docs/buttons', icon: <MousePointer2 className="h-4 w-4" /> },
  { label: 'Cards', href: '/docs/cards', icon: <CreditCard className="h-4 w-4" /> },
  { label: 'Hero Sections', href: '/docs/hero-sections', icon: <Layout className="h-4 w-4" /> },
  { label: 'Layouts', href: '/docs/layouts', icon: <Layers className="h-4 w-4" /> },
  { label: 'Typography', href: '/docs/typography', icon: <Type className="h-4 w-4" /> },
  { label: 'Shimmer Button', href: '/docs/magic-ui-shimmer-button', icon: <Sparkles className="h-4 w-4" />, badge: 'Magic UI' },
  { label: 'Metric Card', href: '/docs/tremor-metric-card', icon: <CreditCard className="h-4 w-4" />, badge: 'Tremor' },
];

const libraryItems: CommandEntry[] = [
  { label: 'shadcn/ui', href: '/docs/libraries/shadcn', icon: <Palette className="h-4 w-4" /> },
  { label: 'Magic UI', href: '/docs/libraries/magic-ui', icon: <Sparkles className="h-4 w-4" /> },
  { label: 'Tremor', href: '/docs/libraries/tremor', icon: <Palette className="h-4 w-4" /> },
  { label: 'Astro', href: '/docs/libraries/astro', icon: <Palette className="h-4 w-4" /> },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Listen for custom event dispatched from the trigger button
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    document.addEventListener('open-command-menu', handleOpen);
    return () => document.removeEventListener('open-command-menu', handleOpen);
  }, []);

  const navigate = useCallback((href: string) => {
    setOpen(false);
    window.location.href = href;
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-2 py-4">
            <Search className="h-10 w-10 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">No results found.</p>
          </div>
        </CommandEmpty>

        <CommandGroup heading="Getting Started">
          {gettingStartedItems.map((item) => (
            <CommandItem
              key={item.href}
              value={item.label}
              onSelect={() => navigate(item.href)}
              className="gap-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Components">
          {componentItems.map((item) => (
            <CommandItem
              key={item.href}
              value={`${item.label} ${item.badge ?? ''}`}
              onSelect={() => navigate(item.href)}
              className="gap-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                {item.icon}
              </span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {item.badge}
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Libraries">
          {libraryItems.map((item) => (
            <CommandItem
              key={item.href}
              value={item.label}
              onSelect={() => navigate(item.href)}
              className="gap-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

/**
 * Search trigger button that looks like a search input.
 * Dispatches a custom event to open the CommandMenu.
 */
export function SearchTrigger() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform?.toUpperCase().includes('MAC') ?? false);
  }, []);

  return (
    <button
      type="button"
      onClick={() => document.dispatchEvent(new CustomEvent('open-command-menu'))}
      className="group hidden h-9 w-64 items-center gap-2 rounded-full border border-border bg-muted/40 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted/60 md:inline-flex"
    >
      <Search className="h-3.5 w-3.5 shrink-0" />
      <span className="flex-1 text-left text-xs">Search documentation...</span>
      <kbd className="pointer-events-none flex h-5 select-none items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        {isMac ? '⌘' : 'Ctrl+'}K
      </kbd>
    </button>
  );
}
