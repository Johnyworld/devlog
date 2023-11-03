import MarkdownToJSX, { MarkdownToJSX as MarkdownToJSXType } from 'markdown-to-jsx';
import style from './Markdown.module.scss';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';
import { removeExtension } from '@utils/stringUtils';
import { getRoute } from '@utils/routes';

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const Markdown = ({ children, options }: Props) => {
  return (
    <MarkdownToJSX
      className={style.markdown}
      options={{ ...options, slugify: str => str, overrides: { a: OverrideAnchorByLink } }}
    >
      {children}
    </MarkdownToJSX>
  );
};

const OverrideAnchorByLink = ({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  // 경로가 없다면 홈으로 보낸다.
  if (!props.href) {
    return <Link href='/'>{props.children}</Link>;
  }

  // 외부 경로인 경우 새창으로 띄워준다.
  if (/https?:\/\//.test(props.href)) {
    return (
      <Link href={props.href} target='_blank'>
        {props.children}
      </Link>
    );
  }

  // 앱 내 이동시.
  return (
    <Link href={removeExtension(getRoute.post() + '/' + props.href)} target={props.target}>
      {props.children}
    </Link>
  );
};

export default Markdown;
