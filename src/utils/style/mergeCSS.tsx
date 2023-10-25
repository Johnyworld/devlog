type MergeCSSItem = string | [boolean, string];

export const mergeCSS = (...styles: MergeCSSItem[]) => {
  const results = styles
    .map(item => {
      if (typeof item === 'string') {
        return item;
      } else {
        return item[0] ? item[1] : null;
      }
    })
    .filter((item: string | null): item is string => item !== null);

  return results.join(' ');
};
