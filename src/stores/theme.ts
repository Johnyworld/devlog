'use client';

import { Theme } from 'type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { setCookie, getCookie } from 'cookies-next';

interface ThemeState {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const getDefaultTheme = (): Theme => {
  if (typeof window === 'undefined') {
    // 서버 렌더링 중일 때
    return 'light';
  }
  const themeCookie = getCookie('johnylog_theme');
  if (themeCookie && isTheme(themeCookie)) {
    return themeCookie;
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
      setCookie('johnylog_theme', newTheme);
      set(() => ({ theme: newTheme }));
    },
  })),
);
