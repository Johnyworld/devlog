declare module 'type' {
  type PostTitle = string;
  type PostPath = string;
  type Markdown = string;

  interface Post {
    title: PostTitle;
    path: PostPath;
    tags: string[];
    createdAt?: ISODatePart;
    modifiedAt: ISOString;
  }

  type PostCategories = Record<string, number>;
}
