import { Post } from "type";

interface Response {
  categories: string[];
  posts: Post[];
}

type Markdown = string;
type MarkdownLink = string;

const regCategoryLine = /[#]{3}(.+)/g;
const regCategoryMark = /[#]{3} /g;
const regLinks = /\[(.*?)\]\((.*?)\)/g;

const parseReadmeToPosts = (markdown: Markdown): Response => {
  const categories = markdown.match(regCategoryLine)?.map(removeMark) || [];

  return {
    categories,
    posts:
      markdown.match(regLinks)?.map((linkString: MarkdownLink) => {
        const categoryIndex = findCurrentCategoryIndex(markdown, linkString);
        const { name, path } = parseMarkdownLinkToObject(linkString);

        return {
          category: categories[categoryIndex],
          name,
          path,
        } as Post;
      }) || [],
  };
};

const removeMark = (markdown: Markdown): string =>
  markdown.replace(regCategoryMark, "");

const parseMarkdownLinkToObject = (
  linkString: MarkdownLink
): { name: string; path: string } => {
  const [name, path] = linkString.replace(regLinks, "$1.$2").split(".");
  return { name, path: "/" + path };
};

const findCurrentCategoryIndex = (
  markdown: Markdown,
  currentLine: Markdown
) => {
  const find = markdown.split(currentLine)[0].match(regCategoryMark)?.length;
  return find ? find - 1 : 0;
};

export default parseReadmeToPosts;
