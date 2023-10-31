declare module 'type' {
  interface Work {
    id: string;
    title: string;
    description?: string;
    createdAt?: ISODatePart;
    thumbnail?: URL;
    href?: URL;
    hasOwnPage?: boolean;
    github?: URL;
  }
}
