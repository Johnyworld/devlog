/** scss 파일 자동완성을 위해 필요함 */
declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}
