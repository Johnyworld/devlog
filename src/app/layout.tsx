import { Header } from '@components/views/organisms/Header';
import '@style/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        {/* naver 검색엔진 확인 */}
        <meta name='naver-site-verification' content='ebb0335cc1fb0aeadb38243f2293b50556fc0319' />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
