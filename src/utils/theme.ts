export type Theme = 'light' | 'dark';

export const getCurrentTheme = (): Theme => {
  return document.documentElement.getAttribute('data-theme') as Theme;
};
