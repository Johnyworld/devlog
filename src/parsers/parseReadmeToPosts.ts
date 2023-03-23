import { Post } from "type";

interface Response {
  categories: string[];
  posts: Post[];
}

type Markdown = string;
type MarkdownLink = string;

const regCategoryLine = /[#]{3}(.+)/g;
const regCategoryMark = /[#]{3} /g;
const regLinks = /\[(.*?)\]\((.*?)\)( - (.*?)\n)?/g;

const parseReadmeToPosts = (markdown: Markdown): Response => {
  const categories = markdown.match(regCategoryLine)?.map(removeMark) || [];

  return {
    categories,
    posts:
      markdown.match(regLinks)?.map((linkString: MarkdownLink) => {
        const categoryIndex = findCurrentCategoryIndex(markdown, linkString);
        const { name, path, desc } = parseMarkdownLinkToObject(linkString);

        return {
          category: categories[categoryIndex],
          name,
          path,
          desc,
        } as Post;
      }) || [],
  };
};

const removeMark = (markdown: Markdown): string =>
  markdown.replace(regCategoryMark, "");

const parseMarkdownLinkToObject = (
  linkString: MarkdownLink
): { name: string; path: string; desc: string | undefined } => {
  const [name, _path, _desc] = linkString
    .replace(regLinks, "$1=$2=$3")
    .split("=");

  const path = "/" + _path.replace(".md", "");
  const desc = _desc.split(" - ")[1];

  return { name, path, desc };
};

const findCurrentCategoryIndex = (
  markdown: Markdown,
  currentLine: Markdown
) => {
  const find = markdown.split(currentLine)[0].match(regCategoryMark)?.length;
  return find ? find - 1 : 0;
};

export default parseReadmeToPosts;
