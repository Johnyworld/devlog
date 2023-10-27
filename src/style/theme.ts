import variables from './theme.color.module.scss';
import { ThemeColor } from 'type';

interface Theme {
  color: ThemeColor;
}

export const theme: Theme = {
  color: variables as ThemeColor,
};
