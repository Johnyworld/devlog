'use client';

import { Theme } from 'type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ThemeState {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const getDefaultTheme = (): Theme => {
  if (typeof window === 'undefined') {
    // 서버 렌더링 중일 때 아무거나 리턴
    return 'light';
  }
  const localStorageTheme = localStorage?.getItem('johnylog_theme');
  if (localStorageTheme && isTheme(localStorageTheme)) {
    return localStorageTheme;
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const isTheme = (str: string): str is Theme => {
  return ['dark', 'light'].includes(str);
};

export const useThemeStore = create<ThemeState>()(
  devtools(set => ({
    theme: getDefaultTheme(),
    changeTheme: newTheme => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('johnylog_theme', newTheme);
      set(() => ({ theme: newTheme }));
    },
  })),
);
