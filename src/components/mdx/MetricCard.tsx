import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

type TrendDirection = 'up' | 'down' | 'flat';

interface MetricCardProps {
  title: string;
  metric: string;
  delta?: string;
  deltaType?: TrendDirection;
  subtitle?: string;
  className?: string;
}

export function MetricCard({
  title,
  metric,
  delta,
  deltaType = 'flat',
  subtitle,
  className,
}: MetricCardProps) {
  const TrendIcon =
    deltaType === 'up'
      ? TrendingUp
      : deltaType === 'down'
        ? TrendingDown
        : Minus;

  const trendColorClass =
    deltaType === 'up'
      ? 'text-emerald-500 bg-emerald-500/10'
      : deltaType === 'down'
        ? 'text-rose-500 bg-rose-500/10'
        : 'text-muted-foreground bg-muted';

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        className,
      )}
    >
      {/* Subtle gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="mt-2 flex items-baseline gap-3">
          <p className="text-3xl font-bold tracking-tight">{metric}</p>
          {delta && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold',
                trendColorClass,
              )}
            >
              <TrendIcon className="h-3 w-3" />
              {delta}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Decorative bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
