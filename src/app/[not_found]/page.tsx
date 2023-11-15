'use client';

import { Main } from '@components/layouts/Main';
import PageContent from '@components/layouts/PageContent';
import { NotFound } from '@components/organisms/NotFound';

export default function NotFoundPage() {
  return (
    <Main>
      <PageContent>
        <NotFound />
      </PageContent>
    </Main>
  );
}
