import { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import style from '../Markdown.module.scss';

interface Props extends DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {}

export const OverrideIframe = (props: Props) => {
  return (
    <div className={style.overrideIframe}>
      <iframe {...props} />
    </div>
  );
};
