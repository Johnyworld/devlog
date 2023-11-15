import cx from 'classnames';
import style from './NavigationMenuItem.module.scss';

interface Props {
  title: string;
  selected: boolean;
}

export const NavigationMenuItem = ({ title, selected }: Props) => {
  return <div className={cx(style.navigationMenuItem, { selected })}>{title}</div>;
};
