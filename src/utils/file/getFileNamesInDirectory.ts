import fs from 'fs';
import { FileName } from 'type';

export const getFileNamesInDirectory: (directory: string) => Promise<FileName[]> = (directory: string) =>
  new Promise((revolve, reject) => {
    fs.readdir(directory, (err, data) => {
      if (err) {
        reject(err);
      }
      revolve(data);
    });
  });
