'use client';

import { ThemeToggleButton } from '@components/views/molecules/ThemeToggleButton';
import { Theme, getCurrentTheme } from '@utils/theme';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [themeState, setThemeState] = useState<Theme | null>(null);

  const toggle = () => {
    if (themeState === 'dark') {
      setThemeState('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      setThemeState('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  if (!themeState) {
    return null;
  }

  return <ThemeToggleButton theme={themeState} onClick={toggle} />;
};
