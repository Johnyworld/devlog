'use client';

import { ThemeToggleButton } from '@components/views/molecules/ThemeToggleButton';
import { useThemeStore } from 'src/stores/theme';

export const ThemeToggle = () => {
  const { theme, changeTheme } = useThemeStore();

  const toggle = () => {
    if (theme === 'dark') {
      changeTheme('light');
    } else {
      changeTheme('dark');
    }
  };

  return <ThemeToggleButton theme={theme} onClick={toggle} />;
};
