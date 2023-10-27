declare module 'type' {
  export interface ThemeColor {
    primary: string;
    letterStrong: string;
    letter: string;
    bg: string;
    grayStronger: string;
    grayStrong: string;
    grayWeaker: string;
    grayWeakest: string;
  }
}

/** scss 파일 자동완성을 위해 필요함 */
declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}
