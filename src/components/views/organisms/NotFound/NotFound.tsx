import Link from 'next/link';
import style from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div>
        <h1 className={style.notFound_title}>404</h1>
        <p>죄송합니다.</p>
        <h2>찾을 수 없는 페이지입니다.</h2>
      </div>
      <p>존재하지 않는 주소를 입력하셨거나, 페이지의 주소가 변경 또는 삭제되었습니다.</p>
      <div>
        <Link href='/'>홈으로 돌아가기</Link>
      </div>
    </div>
  );
};
