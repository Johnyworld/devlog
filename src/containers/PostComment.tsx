'use client';

import { useThemeStore } from '@stores/theme';

export const PostComment = () => {
  const theme = useThemeStore(state => state.theme);
  return (
    <div
      className="utterances_wrapper"
      ref={elem => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'johnyworld/devlog');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('theme', `github-${theme}`);
        scriptElem.setAttribute('label', 'comments');
        scriptElem.crossOrigin = 'anonymous';
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};
