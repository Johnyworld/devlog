'use client';

import { HTMLAttributes } from 'react';
import styles from './MarkdownTOC.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

interface Heading {
  id: number;
  level: number;
  title: string;
  parent?: number;
}

export const MarkdownTOC = ({ content, ...props }: Props) => {
  const headings = getHeadings(content);
  const headingTree = generateHeadingTree(headings);
  return (
    <div {...props} className={classNames(styles.markdownTOC, props.className)}>
      <HeadingTree headings={headingTree} headingId={undefined} />
    </div>
  );
};

const HeadingTree = ({
  headings,
  headingId,
}: {
  headings: Heading[];
  headingId: number | undefined;
}) => {
  const children = headings.filter(item => item.parent === headingId);
  if (children.length === 0) {
    return null;
  }
  return (
    <ul>
      {children.map(item => (
        <li key={item.id}>
          <Link href={`#${item.title}`}>{item.title}</Link>
          <HeadingTree headings={headings} headingId={item.id} />
        </li>
      ))}
    </ul>
  );
};

const getHeadings = (content: string): Heading[] =>
  content
    .split('\n')
    .filter(line => line.match(/^#{1,3}\s/))
    .map((line, i) => {
      const match = line.match(/(#{1,3})\s(.*)/);
      const [, level, title] = match!;
      return {
        id: i,
        level: level.length,
        title,
      };
    });

const generateHeadingTree = (headings: Heading[]): Heading[] => {
  return headings.map((heading, i) => {
    let parent: number | undefined = undefined;
    for (let j = i; j >= 0; j--) {
      if (headings[j].level < heading.level) {
        parent = headings[j].id;
        break;
      }
    }
    return { ...heading, parent };
  });
};
