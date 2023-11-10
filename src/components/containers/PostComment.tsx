'use client';

import { getCurrentTheme } from '@utils/theme';

export const PostComment = () => {
  return (
    <div
      className='utterances_wrapper'
      ref={elem => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'johnyworld/devlog');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('theme', `github-${getCurrentTheme()}`); // TODO: 상태관리 필요. 지금은 모드를 바꿔도 바로 반영이 안됨
        scriptElem.setAttribute('label', 'comments');
        scriptElem.crossOrigin = 'anonymous';
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};
