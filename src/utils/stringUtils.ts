const extensions = ['md'];

export const removeExtension = (fileName: string): string => {
  const reg = new RegExp(`.(${extensions.join('|')})`);
  return fileName.replace(reg, '');
};
