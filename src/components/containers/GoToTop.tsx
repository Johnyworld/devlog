'use client';

import { GoToTopButton } from '@components/views/atoms/GoToTopButton';

export const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return <GoToTopButton onClick={scrollToTop} />;
};
