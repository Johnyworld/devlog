'use client';

import { Main } from '@components/views/layouts/Main';
import PageContent from '@components/views/layouts/PageContent';
import { NotFound } from '@components/views/organisms/NotFound';

export default function NotFoundPage() {
  return (
    <Main>
      <PageContent>
        <NotFound />
      </PageContent>
    </Main>
  );
}
