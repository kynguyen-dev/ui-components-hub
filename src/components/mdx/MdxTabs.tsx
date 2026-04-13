/**
 * MDX-friendly wrappers around shadcn Tabs components.
 *
 * These re-exports let MDX authors write:
 *
 *   <Tabs defaultValue="preview">
 *     <TabsList>
 *       <TabsTrigger value="preview">Preview</TabsTrigger>
 *       <TabsTrigger value="code">Code</TabsTrigger>
 *     </TabsList>
 *     <TabsContent value="preview"> ... </TabsContent>
 *     <TabsContent value="code"> ... </TabsContent>
 *   </Tabs>
 *
 * The wrappers apply default styling consistent with the docs design
 * while remaining fully customizable via className overrides.
 */

import * as React from 'react';
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
  TabsContent as ShadcnTabsContent,
} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

/* ---------- Tabs root ---------- */
export function Tabs({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTabs>) {
  return <ShadcnTabs className={cn('my-6 w-full', className)} {...props} />;
}

/* ---------- TabsList ---------- */
export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTabsList>) {
  return (
    <ShadcnTabsList
      className={cn(
        'inline-flex h-10 w-full justify-start rounded-none border-b border-border bg-transparent p-0',
        className,
      )}
      {...props}
    />
  );
}

/* ---------- TabsTrigger ---------- */
export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTabsTrigger>) {
  return (
    <ShadcnTabsTrigger
      className={cn(
        'relative rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-muted-foreground shadow-none transition-all',
        'data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none',
        'hover:text-foreground',
        className,
      )}
      {...props}
    />
  );
}

/* ---------- TabsContent ---------- */
export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTabsContent>) {
  return (
    <ShadcnTabsContent
      className={cn('mt-0 rounded-b-xl border border-t-0 border-border p-6', className)}
      {...props}
    />
  );
}
