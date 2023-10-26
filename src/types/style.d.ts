declare module '*.scss' {
  const content: Record<string, string>;
  export const base: string;
  export default content;
}
