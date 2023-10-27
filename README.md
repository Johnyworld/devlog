# 프론트엔드 엔지니어 김재환의 테크 블로그 소스코드 저장소

https://johnykim.me 로 구경 오세요.

## 배포 가이드

- johnyworld/devlog 레포지토리 main 브랜치에 머지 되면 vercel에 자동 배포됩니다.

## 개발 가이드

### 새로운 테마 추가하기

#### 용어 정리

- <테마>: dark, light 와 같은 넓은 단위
- <테마 분류>: colors, fonts 와 같은 각 테마 내 값들의 분류
- <테마 값>: primary, secondary 와 같은 각 테마의 값들

#### 관련 파일 리스트

- `src/style/theme.scss`
- `src/style/_variables.scss`
- `src/style/theme.{color}.module.ts`
- `src/style/theme.ts`
- `src/types/theme.d.ts`

#### <테마 값> 추가/수정하기

- `src/style/theme.scss` 에 <테마 값> 추가/수정.
- scss 변수로 사용하기 위해 `src/style/_variables.scss` 파일에 <테마 값> 변수 지정.
- `.tsx?` 파일에서도 사용하기 위해 `src/style/theme.{color}.module.scss` 에서 <테마 값> 내보내고, `src/types/theme.d.ts` 에 타입 정의.

#### <테마 분류> 추가/수정하기

- `src/style/theme.scss` 에 <테마 분류> 추가/수정, 추가하는 경우 필요에 따라 `@each`문 돌리기.
- scss 변수로 사용하기 위해 `src/style/_variables.scss` 파일 수정.
- `src/style/theme.{새로운 테마 분류}.module.scss` 파일 생성하고 `src/types/theme.d.ts` 에 타입 정의.
- `src/style/theme.ts` 파일도 추가/수정.

#### <테마> 추가하기

- 새로운 테마를 추가하려면 `src/style/theme.scss` 파일만 건드리면 됩니다.
- scss map 을 정의하고, `:root` 대신에 `[data-theme='dark'] { ... }` 요런식으로 해서 light-theme과 마찬가지로 `@each`문 돌려주면 됩니다.
