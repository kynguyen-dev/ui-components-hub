/**
 * MDX-safe wrapper for shadcn/ui Card components.
 * Re-exports for use in MDX files where direct imports from @/components/ui
 * may cause Content Layer render issues.
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
