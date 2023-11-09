'use client';

import PageContent from '@components/views/layouts/PageContent';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <PageContent>
        <p>Copyright 2023. All page content is property of 김재환.</p>
      </PageContent>
    </footer>
  );
};
