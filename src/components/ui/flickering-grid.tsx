"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type FlickeringGridProps = React.SVGProps<SVGSVGElement> & {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  width?: number;
  height?: number;
};

function buildOpacities(count: number, flickerChance: number, maxOpacity: number) {
  return Array.from({ length: count }, () =>
    Math.random() < flickerChance ? Math.random() * maxOpacity : Math.random() * maxOpacity * 0.08,
  );
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(99, 102, 241)",
  maxOpacity = 0.25,
  width = 720,
  height = 320,
  ...props
}: FlickeringGridProps) {
  const columns = Math.max(1, Math.floor(width / (squareSize + gridGap)));
  const rows = Math.max(1, Math.floor(height / (squareSize + gridGap)));
  const totalSquares = columns * rows;

  const [opacities, setOpacities] = React.useState<number[]>(() =>
    buildOpacities(totalSquares, flickerChance, maxOpacity),
  );

  React.useEffect(() => {
    setOpacities(buildOpacities(totalSquares, flickerChance, maxOpacity));

    const intervalId = window.setInterval(() => {
      setOpacities(buildOpacities(totalSquares, flickerChance, maxOpacity));
    }, 180);

    return () => window.clearInterval(intervalId);
  }, [flickerChance, maxOpacity, totalSquares]);

  return (
    <svg
      aria-hidden="true"
      className={cn("block h-full w-full", className)}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {Array.from({ length: totalSquares }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = column * (squareSize + gridGap);
        const y = row * (squareSize + gridGap);

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={squareSize}
            height={squareSize}
            rx={1}
            fill={color}
            opacity={opacities[index] ?? 0}
          />
        );
      })}
    </svg>
  );
}
