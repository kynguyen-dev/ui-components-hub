import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

const sidebarConfig = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Libraries",
    items: [
      { title: "Shadcn UI", href: "/docs/libraries/shadcn" },
      { title: "Magic UI", href: "/docs/libraries/magic-ui" },
      { title: "Tremor", href: "/docs/libraries/tremor" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Buttons", href: "/docs/components/buttons" },
      { title: "Cards", href: "/docs/components/cards" },
      { title: "Heroes", href: "/docs/components/heroes" },
      { title: "Backgrounds", href: "/docs/components/backgrounds" },
    ],
  },
];

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside
      className={cn(
        "h-full w-full",
        className
      )}
      {...props}
    >
      <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
        <div className="w-full flex flex-col gap-6">
          {sidebarConfig.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
                {group.title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
