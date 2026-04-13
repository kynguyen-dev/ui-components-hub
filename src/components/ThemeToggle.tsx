"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useStore } from "@nanostores/react"
import { $theme, setTheme } from "@/lib/theme-store"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const theme = useStore($theme)
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering icons once client-side
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled className="h-9 w-9" />
  }

  const currentTheme =
    theme === "system"
      ? typeof document !== "undefined" && document.documentElement.dataset.theme === "light"
        ? "light"
        : "dark"
      : theme

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="relative h-9 w-9"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
