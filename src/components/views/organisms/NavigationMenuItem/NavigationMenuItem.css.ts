import { globalStyle, style } from '@vanilla-extract/css';

export const base = style({
  fontSize: 14,
});

export const selected = style({
  fontWeight: 700,
});

globalStyle(`${base} a`, {
  textDecoration: 'none',
});
