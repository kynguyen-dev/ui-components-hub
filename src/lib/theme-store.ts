import { atom, onMount } from 'nanostores';

export type Theme = 'light' | 'dark' | 'system';

export const $theme = atom<Theme>('system');
const storageKey = 'starlight-theme';

// Initialize on mount (client-side only)
onMount($theme, () => {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem(storageKey) as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') {
      $theme.set(saved);
    }
  }

  // Subscribe to changes and apply them
  const unsubscribe = $theme.subscribe((theme) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      const effectiveTheme =
        theme === 'system'
          ? window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
          : theme;

      root.dataset.theme = effectiveTheme;
      root.classList.toggle('dark', effectiveTheme === 'dark');

      if (theme === 'system') {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, theme);
      }
    }
  });

  return unsubscribe;
});

export function setTheme(theme: Theme) {
  $theme.set(theme);
}
