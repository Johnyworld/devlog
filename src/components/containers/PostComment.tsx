'use client';

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
        scriptElem.setAttribute('theme', 'github-light');
        scriptElem.setAttribute('label', 'comments');
        scriptElem.crossOrigin = 'anonymous';
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};
