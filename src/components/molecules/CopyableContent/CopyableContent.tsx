'use client';

import { HTMLAttributes, useState } from 'react';
import style from './CopyableContent.module.scss';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDebounce } from '@utils/useDebounce';

interface Props extends HTMLAttributes<HTMLElement> {
  text: string;
}

export const CopyableContent = ({ text, children, ...restProps }: Props) => {
  const [copied, setCopied] = useState(false);

  useDebounce(copied, 2 * 1000, () => setCopied(false));

  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        setCopied(true);
      }}
    >
      <button {...restProps} className={classNames(style.copyableContent, restProps.className)}>
        {children}

        {copied ? (
          <span className={style.copyableContent_box}>
            <span className={style.copyableContent_button}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 9.6L6.28571 14L17 3" stroke="#76C47E" strokeWidth="2" />
              </svg>
            </span>
          </span>
        ) : (
          <span className={classNames(style.copyableContent_box, { hoverable: true })}>
            <span className={classNames(style.copyableContent_button, { clickable: true })}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="regularStroke"
                  x="2"
                  y="4"
                  width="12"
                  stroke="var(--color-gray)"
                  height="12"
                  strokeWidth="2"
                />
                <path
                  className="regularStroke"
                  d="M5 1H17V13"
                  stroke="var(--color-gray)"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </span>
        )}
      </button>
    </CopyToClipboard>
  );
};
