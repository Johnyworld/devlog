export const parseBase64ToString = (data: string) => {
  return Buffer.from(data, 'base64').toString();
};
