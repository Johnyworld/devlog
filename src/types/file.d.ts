declare module 'type' {
  type FileName = string;
  type FilePath = string;

  interface MDFileData {
    fileName: FileName;
    markdown: Markdown;
  }
}
