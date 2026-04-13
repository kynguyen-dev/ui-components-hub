import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  className?: string;
}

export function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerSize = '0.05em',
  borderRadius = '100px',
  shimmerDuration = '3s',
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-sm font-medium',
        'text-white [background:var(--shimmer-bg)] dark:text-white',
        'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
        className,
      )}
      style={
        {
          borderRadius,
          '--shimmer-color': shimmerColor,
          '--shimmer-size': shimmerSize,
          '--shimmer-duration': shimmerDuration,
          '--shimmer-bg':
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-[-100%] animate-[shimmer_var(--shimmer-duration)_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0 340deg, var(--shimmer-color) 360deg)`,
          }}
        />
      </div>

      {/* Background layer that prevents shimmer bleed */}
      <div
        className="absolute inset-[1.5px] [background:var(--shimmer-bg)]"
        style={{ borderRadius }}
      />

      {/* Inner glow on hover */}
      <div
        className="absolute inset-[1.5px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          borderRadius,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
