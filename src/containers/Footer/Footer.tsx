'use client';

import PageContent from '@components/layouts/PageContent';

export const Footer = () => {
  return (
    <footer className="footer py-3 print:hidden">
      <PageContent>
        <p className="text-2xs text-grayStrong">
          Copyright 2023. All page content is property of 김재환.
        </p>
      </PageContent>
    </footer>
  );
};
