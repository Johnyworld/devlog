import { POST_LIST_API_END_POINT } from '@utils/constants';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { Post } from 'type';

export const getPostList = async (): Promise<Post[]> => {
  const json = await getJson();
  return parseBase64ToObject(json.content);
};

const getJson = async () => {
  const res = await fetch(POST_LIST_API_END_POINT, {
    headers: { Authorization: process.env.NEXT_PUBLIC_GITHUB_AUTH ?? '' },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const parseBase64ToObject = (data: string) => {
  return JSON.parse(parseBase64ToString(data));
};
