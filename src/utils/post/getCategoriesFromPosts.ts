import { Post } from "type";

export const getCategoriesFromPosts = (posts: Post[]): string[] => {
  const results: string[] = [];
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (results.includes(tag)) {
        return;
      } else {
        results.push(tag);
      }
    });
  });
  return results;
};
