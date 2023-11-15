'use client';

import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { CSSProperties, HTMLAttributes, isValidElement, useState } from 'react';
import style from '../Markdown.module.scss';
import { useDebounce } from '@utils/useDebounce';
import CopyToClipboard from 'react-copy-to-clipboard';

export const OverridePre = ({ children, ...rest }: HTMLAttributes<HTMLPreElement>) => {
  if (isValidElement(children) && children.type === 'code') {
    return CodeBlock(children['props']);
  }
  return <pre {...rest}>{children}</pre>;
};

const CodeBlock = ({ className, children }: SyntaxHighlighterProps) => {
  const [copied, setCopied] = useState(false);

  useDebounce(copied, 2 * 1000, () => setCopied(false));

  let lang = 'text'; // default monospaced text
  if (className && className.startsWith('lang-')) {
    lang = className.replace('lang-', '');
  }

  return (
    <div className={style.overridePre}>
      <SyntaxHighlighter language={lang} style={customMaterialDark}>
        {children}
      </SyntaxHighlighter>
      <CopyToClipboard
        text={'```' + lang + '\n' + (typeof children === 'string' ? children : children.join('\n')) + '\n' + '```'}
        options={{ format: 'text/plain' }}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <button className={style.copyButton}>
          {copied ? (
            <svg width='14' height='14' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 9.6L6.28571 14L17 3' stroke='#76C47E' strokeWidth='2' />
            </svg>
          ) : (
            <svg width='14' height='14' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect className='regularStroke' x='2' y='4' width='12' stroke='white' height='12' strokeWidth='1' />
              <path className='regularStroke' d='M5 1H17V13' stroke='white' strokeWidth='1' />
            </svg>
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

const customMaterialDark: Record<string, CSSProperties> = {
  'code[class*="language-"]': {
    color: '#eee',
  },
  'pre[class*="language-"]': {
    color: '#eee',
  },
  'code[class*="language-"]::-moz-selection': {
    background: '#363636',
  },
  'pre[class*="language-"]::-moz-selection': {
    background: '#363636',
  },
  'code[class*="language-"] ::-moz-selection': {
    background: '#363636',
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: '#363636',
  },
  'code[class*="language-"]::selection': {
    background: '#363636',
  },
  'pre[class*="language-"]::selection': {
    background: '#363636',
  },
  'code[class*="language-"] ::selection': {
    background: '#363636',
  },
  'pre[class*="language-"] ::selection': {
    background: '#363636',
  },
  '.language-css > code': {
    color: '#fd9170',
  },
  '.language-sass > code': {
    color: '#fd9170',
  },
  '.language-scss > code': {
    color: '#fd9170',
  },
  '[class*="language-"] .namespace': {
    opacity: '0.7',
  },
  atrule: {
    color: '#c792ea',
  },
  'attr-name': {
    color: '#ffcb6b',
  },
  'attr-value': {
    color: '#a5e844',
  },
  attribute: {
    color: '#a5e844',
  },
  boolean: {
    color: '#c792ea',
  },
  builtin: {
    color: '#ffcb6b',
  },
  cdata: {
    color: '#80cbc4',
  },
  char: {
    color: '#80cbc4',
  },
  class: {
    color: '#ffcb6b',
  },
  'class-name': {
    color: '#f2ff00',
  },
  comment: {
    color: '#616161',
  },
  constant: {
    color: '#c792ea',
  },
  deleted: {
    color: '#ff6666',
  },
  doctype: {
    color: '#616161',
  },
  entity: {
    color: '#ff6666',
  },
  function: {
    color: '#c792ea',
  },
  hexcode: {
    color: '#f2ff00',
  },
  id: {
    color: '#c792ea',
    fontWeight: 'bold',
  },
  important: {
    color: '#c792ea',
    fontWeight: 'bold',
  },
  inserted: {
    color: '#80cbc4',
  },
  keyword: {
    color: '#c792ea',
  },
  number: {
    color: '#fd9170',
  },
  operator: {
    color: '#89ddff',
  },
  prolog: {
    color: '#616161',
  },
  property: {
    color: '#80cbc4',
  },
  'pseudo-class': {
    color: '#a5e844',
  },
  'pseudo-element': {
    color: '#a5e844',
  },
  punctuation: {
    color: '#89ddff',
  },
  regex: {
    color: '#f2ff00',
  },
  selector: {
    color: '#ff6666',
  },
  string: {
    color: '#a5e844',
  },
  symbol: {
    color: '#c792ea',
  },
  tag: {
    color: '#ff6666',
  },
  unit: {
    color: '#fd9170',
  },
  url: {
    color: '#ff6666',
  },
  variable: {
    color: '#ff6666',
  },
};
