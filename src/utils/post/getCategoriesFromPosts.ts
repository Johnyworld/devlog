import { Post, PostCategories } from 'type';

export const getCategoriesFromPosts = (posts: Post[]): PostCategories => {
  const results: PostCategories = {};
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (results[tag] !== undefined) {
        results[tag] += 1;
        return;
      } else {
        results[tag] = 1;
      }
    });
  });
  return results;
};
