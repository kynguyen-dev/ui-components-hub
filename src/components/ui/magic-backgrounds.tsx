"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type SvgProps = React.SVGProps<SVGSVGElement>;

export function AnimatedGridPattern({
  className,
  columns = 9,
  rows = 6,
}: DivProps & { columns?: number; rows?: number }) {
  const [cells] = React.useState(() =>
    Array.from({ length: columns * rows }, (_, index) => ({
      id: index,
      column: index % columns,
      row: Math.floor(index / columns),
      delay: `${(index % 9) * 0.45}s`,
      opacity: 0.12 + ((index * 17) % 10) / 40,
    })),
  );

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 overflow-hidden",
        "[background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:72px_72px]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_15%,rgba(255,255,255,0.75)_50%,transparent_85%)] opacity-60 [background-size:220%_100%] animate-[magic-grid-sweep_8s_linear_infinite]" />
      <div
        className="absolute inset-0 grid gap-2 p-6"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((cell) => (
          <span
            key={cell.id}
            className="rounded-[10px] border border-white/30 bg-white/30 shadow-[0_0_30px_rgba(255,255,255,0.18)] animate-[magic-grid-pulse_6s_ease-in-out_infinite]"
            style={{
              gridColumn: cell.column + 1,
              gridRow: cell.row + 1,
              animationDelay: cell.delay,
              opacity: cell.opacity,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50" />
    </div>
  );
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "rgba(156, 163, 175, 0.55)",
  darkLineColor = "rgba(255, 255, 255, 0.14)",
}: DivProps & {
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lightLineColor?: string;
  darkLineColor?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden bg-background", className)}
      style={
        {
          "--retro-grid-angle": `${angle}deg`,
          "--retro-grid-cell-size": `${cellSize}px`,
          "--retro-grid-opacity": opacity,
          "--retro-grid-light": lightLineColor,
          "--retro-grid-dark": darkLineColor,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/70" />
      <div className="absolute inset-x-0 top-[47%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-x-0 bottom-[-32%] h-[120%] [perspective:340px]">
        <div className="absolute inset-0 origin-top [transform:rotateX(var(--retro-grid-angle))]">
          <div
            className="absolute inset-0 animate-[magic-retro-grid_15s_linear_infinite] [background-image:linear-gradient(to_right,var(--retro-grid-light)_1px,transparent_0),linear-gradient(to_bottom,var(--retro-grid-light)_1px,transparent_0)] [background-size:var(--retro-grid-cell-size)_var(--retro-grid-cell-size)] dark:[background-image:linear-gradient(to_right,var(--retro-grid-dark)_1px,transparent_0),linear-gradient(to_bottom,var(--retro-grid-dark)_1px,transparent_0)]"
            style={{ opacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-[52%] bg-gradient-to-b from-background via-background/95 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/85 to-transparent" />
    </div>
  );
}

export function Ripple({
  className,
  circles = 5,
}: DivProps & { circles?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_34%)]" />
      {Array.from({ length: circles }, (_, index) => {
        const size = 140 + index * 72;
        return (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/30 bg-sky-300/5 animate-[magic-ripple_6s_cubic-bezier(0.16,1,0.3,1)_infinite]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `${size / -2}px`,
              marginTop: `${size / -2}px`,
              animationDelay: `${index * 0.8}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function DotPattern({
  className,
  dotSize = 1.5,
  gap = 22,
}: SvgProps & { dotSize?: number; gap?: number }) {
  const patternId = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      fill="none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={dotSize * 3} cy={dotSize * 3} r={dotSize} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} className="text-slate-300/70" />
    </svg>
  );
}

export function GridPattern({
  className,
  cellSize = 40,
  squares = [
    [2, 1],
    [4, 2],
    [6, 3],
    [8, 4],
    [5, 5],
  ],
}: SvgProps & { cellSize?: number; squares?: Array<[number, number]> }) {
  const patternId = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      fill="none"
      viewBox="0 0 600 360"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-300/70"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      {squares.map(([x, y], index) => (
        <rect
          key={`${x}-${y}-${index}`}
          x={x * cellSize}
          y={y * cellSize}
          width={cellSize}
          height={cellSize}
          fill="rgba(99,102,241,0.16)"
          stroke="rgba(99,102,241,0.22)"
        />
      ))}
    </svg>
  );
}

export function HexagonPattern({
  className,
  size = 28,
}: SvgProps & { size?: number }) {
  const patternId = React.useId();
  const hexHeight = Math.sqrt(3) * size;
  const width = size * 3;
  const points = [
    [size * 0.5, 0],
    [size * 1.5, 0],
    [width, hexHeight / 2],
    [size * 1.5, hexHeight],
    [size * 0.5, hexHeight],
    [0, hexHeight / 2],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      fill="none"
      viewBox="0 0 600 360"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={hexHeight}
          patternUnits="userSpaceOnUse"
          patternTransform="translate(0 0)"
        >
          <polygon points={points} stroke="currentColor" strokeWidth="1" className="text-slate-300/65" />
          <polygon
            points={points}
            transform={`translate(${size * 1.5} ${hexHeight / 2})`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-300/65"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function StripedPattern({
  className,
  stripeWidth = 18,
}: DivProps & { stripeWidth?: number }) {
  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-[-20%] -rotate-6 opacity-80 animate-[magic-stripes_16s_linear_infinite]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, rgba(59,130,246,0.14) 0px, rgba(59,130,246,0.14) ${stripeWidth}px, transparent ${stripeWidth}px, transparent ${stripeWidth * 2}px), repeating-linear-gradient(135deg, rgba(236,72,153,0.1) 0px, rgba(236,72,153,0.1) ${stripeWidth / 2}px, transparent ${stripeWidth / 2}px, transparent ${stripeWidth * 1.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/45 to-white/80" />
    </div>
  );
}

export function InteractiveGridPattern({ className }: DivProps) {
  const [position, setPosition] = React.useState({ x: 50, y: 50 });

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 overflow-hidden [background-image:linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:52px_52px]",
        className,
      )}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
      }}
      onMouseLeave={() => setPosition({ x: 50, y: 50 })}
    >
      <div
        className="absolute inset-0 transition-[background] duration-200"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(99,102,241,0.28), transparent 18%), radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.85), transparent 8%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/70" />
    </div>
  );
}

export function LightRays({ className }: DivProps) {
  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0.35)_35%,transparent_70%)]" />
      {[
        "left-[8%] top-[-12%] h-[130%] w-28 rotate-[10deg]",
        "left-[28%] top-[-20%] h-[140%] w-24 -rotate-[8deg]",
        "right-[24%] top-[-18%] h-[140%] w-24 rotate-[6deg]",
        "right-[6%] top-[-10%] h-[125%] w-32 -rotate-[12deg]",
      ].map((beam, index) => (
        <span
          key={beam}
          className={cn(
            "absolute rounded-full bg-gradient-to-b from-sky-200/70 via-white/20 to-transparent blur-2xl animate-[magic-rays_8s_ease-in-out_infinite]",
            beam,
          )}
          style={{ animationDelay: `${index * 0.9}s` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent" />
    </div>
  );
}

export function NoiseTexture({ className }: SvgProps) {
  const filterId = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full opacity-35 mix-blend-soft-light", className)}
      viewBox="0 0 600 360"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} opacity="1" />
    </svg>
  );
}
