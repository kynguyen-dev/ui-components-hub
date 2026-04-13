import { atom, onMount } from 'nanostores';

export type Theme = 'light' | 'dark' | 'system';

export const $theme = atom<Theme>('system');

// Initialize on mount (client-side only)
onMount($theme, () => {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('ui-theme') as Theme | null;
    if (saved) {
      $theme.set(saved);
    }
  }

  // Subscribe to changes and apply them
  const unsubscribe = $theme.subscribe((theme) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');

      let effectiveTheme = theme;
      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      root.classList.add(effectiveTheme);
      localStorage.setItem('ui-theme', theme);
    }
  });

  return unsubscribe;
});

export function setTheme(theme: Theme) {
  $theme.set(theme);
}
