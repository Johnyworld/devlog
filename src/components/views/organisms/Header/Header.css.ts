import { style } from '@vanilla-extract/css';

const flexCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const base = style([
  flexCenter,
  {
    height: 48,
  },
]);
