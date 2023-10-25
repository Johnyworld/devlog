import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontSize: 18,
  color: '#5a5a5a',
});

globalStyle('body, div, h1, h2, h3, h4, h5, h6, ul, li, p', {
  padding: 'unset',
  margin: 'unset',
});

globalStyle('li', {
  listStyleType: 'none',
});

globalStyle('strong', {
  fontWeight: 700,
  color: '#333',
});

globalStyle('.tag', {
  marginRight: '0.2em',
  borderRadius: 50,
  backgroundColor: '#daebf2',
  color: '#3e778c',
  padding: '0.2em 0.5em',
  fontSize: 15,
  fontWeight: 700,
});

globalStyle('.tag::before', {
  content: '# ',
});

globalStyle('a', {
  color: 'unset',
});
