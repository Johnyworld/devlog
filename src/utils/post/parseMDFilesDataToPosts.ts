import { MDFileData, Post, PostTitle } from 'type';

const regProperties = /(?<=^---\n)([\s\S]*?)(?=---)/;
const regCreatedAt = /(?<=Created: ("|))([\d]{4}-[\d]{2}-[\d]{2})/;
const regTags = /(?<=- )([\s\S]*?)(?=\n)/g;

export const parseMDFilesDataToPosts = async (fileContents: MDFileData[]): Promise<Post[]> => {
  const posts: Post[] = [];
  const incompleted: PostTitle[] = [];

  for (const fileContent of fileContents) {
    const properties = getProperties(fileContent);
    if (properties === null) {
      incompleted.push(fileContent.fileName);
    } else {
      posts.push(properties);
    }
  }

  return posts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
};

const getProperties = ({ fileName, markdown }: MDFileData): Post | null => {
  const propertiesPart = markdown.match(regProperties)?.[0];
  const createdAt = propertiesPart?.match(regCreatedAt)?.[0];
  const tags = propertiesPart?.match(regTags) || [];
  if (!createdAt) {
    return null;
  }
  return {
    title: fileName.replace('.md', ''),
    path: `src/vault/tech/${fileName}`,
    createdAt,
    tags,
  };
};
