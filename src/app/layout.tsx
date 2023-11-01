import Analytics from '@components/containers/Analytics';
import { Header } from '@components/views/organisms/Header';
import '@style/index.scss';
import { Suspense } from 'react';

const siteName = 'JohnyKimBlog';
const title = 'Johny Kim Blog';
const description = '프론트엔드 개발자 조니의 블로그입니다.';
const keywords = '프론트엔드, 개발자, 조니킴, 블로그, frontend, developer, engineer, johny, johny kim, blog';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Johny Kim</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />

        {/* naver 검색엔진 확인 */}
        <meta name='naver-site-verification' content='ebb0335cc1fb0aeadb38243f2293b50556fc0319' />

        {/* Open Tags */}
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:keywords' content={keywords} />
        <meta property='og:site_name' content={siteName} />
      </head>
      <body>
        <Suspense>
          <Analytics />
        </Suspense>
        <Header />
        {children}
      </body>
    </html>
  );
}
