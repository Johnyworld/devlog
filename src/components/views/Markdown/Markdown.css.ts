import { style, globalStyle, StyleRule } from '@vanilla-extract/css';

export const base = style({});

globalStyle(`${base} > *:first-child`, {
  marginTop: 0,
});

const headersBase: StyleRule = {
  color: '#333',
  margin: '2em 0 20px',
};

globalStyle(`${base} h1`, {
  ...headersBase,
  fontSize: 32,
});

globalStyle(`${base} h2`, {
  ...headersBase,
  fontSize: 26,
});

globalStyle(`${base} h3`, {
  ...headersBase,
  fontSize: 20,
});

globalStyle(`${base} div, ${base} ul, ${base} p`, {
  margin: '18px 0',
});

globalStyle(`${base} p`, {
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
});

globalStyle(`${base} pre`, {
  backgroundColor: '#ecf1f2',
  overflowX: 'auto',
  overflowY: 'visible',
  padding: 20,
  margin: '18px -20px',
  borderRadius: 4,
});

globalStyle(`${base} pre code`, {
  padding: 0,
});

globalStyle(`${base} code`, {
  fontSize: 16,
  backgroundColor: '#ecf1f2',
  padding: '2px 4px',
  borderRadius: 4,
});

globalStyle(`${base} ul, ${base} ol`, {
  paddingLeft: 30,
});

globalStyle(`${base} li`, {
  lineHeight: 1.4,
  listStyleType: 'disc',
  marginTop: '0.25em',
});

globalStyle(`${base} li:first-child`, {
  marginTop: '0.5em',
});

globalStyle(`${base} blockquote`, {
  margin: 0,
  padding: '12px 15px',
  borderLeft: '3px solid #ddd',
  backgroundColor: '#f8f9f9',
  color: '#858c97',
});

globalStyle(`${base} blockquote > *:first-child`, {
  marginTop: 0,
});

globalStyle(`${base} blockquote > *:last-child`, {
  marginBottom: 0,
});

globalStyle(`${base} img`, {
  width: '100%',
});

globalStyle(`${base} hr`, {
  margin: '50px 0',
  border: '1px solid #dddfe4',
  borderBottom: 0,
});

globalStyle(`${base} a:link, ${base} a:visited`, {
  color: '#3e778c',
});
