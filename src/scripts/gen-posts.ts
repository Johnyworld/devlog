import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const config = {
  vaultSrc: process.env.NEXT_PUBLIC_VAULT_SRC,
  publishTag: '#블로그발행',
};

// 1. 전체 md 파일 path 가져오기
// 2. 각 md 파일을 차례대로 읽으며 publishTag가 있는 파일들만 따로 분류
// 3. 해당 파일들을 posts 경로로 복사
// 4. 해당 파일들의 리스트에 대한 json 파일 생성 title, content, path, createdAt, modifiedAt, tags

const main = () => {
  if (!config.vaultSrc) {
    return;
  }
  // Do something
};

main();
