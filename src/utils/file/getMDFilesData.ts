import fs from 'fs';
import { FileName, FilePath, MDFileData } from 'type';

export const getMDFilesData = async (
  fileNames: string[],
  generatePath: (fileName: string) => string
): Promise<MDFileData[]> => {
  return await Promise.all([...fileNames.map(fileName => getMDFileData(fileName, generatePath(fileName)))]);
};

const getMDFileData = (fileName: FileName, filePath: FilePath): Promise<MDFileData> =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, markdown) => {
      if (err) {
        reject(err);
      }
      resolve({ fileName, markdown });
    });
  });
