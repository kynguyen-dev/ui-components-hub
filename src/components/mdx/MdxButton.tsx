/**
 * MDX-safe wrapper for shadcn/ui Button component.
 * Re-exports for use in MDX files where direct imports from @/components/ui
 * may cause Content Layer render issues.
 */
import { Button, type ButtonProps } from '@/components/ui/button';

export { Button };
export type { ButtonProps };
