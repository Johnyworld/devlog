import { Work } from 'type';

export const getToyProjects = (): Work[] => {
  return [
    {
      id: 'react-ui-playground',
      title: 'React UI Playground',
      description: 'UI 연습 놀이터.',
      createdAt: '2022-04-01',
      thumbnail:
        'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/react-drag-thumb-1-min.png',
      github: 'https://github.com/Johnyworld/react-ui-playground',
      href: 'https://johnyworld.github.io/react-ui-playground/#/',
      hasOwnPage: true,
    },
    {
      id: 'mordern-pirates',
      title: 'Modern Pirates',
      description: '포트리스류 게임.',
      createdAt: '2019-05-19',
      thumbnail:
        'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/mordern-pirates-1.jpg',
      href: 'http://modern-pirates.s3-website.ap-northeast-2.amazonaws.com/',
      hasOwnPage: true,
    },
    {
      id: 'conv250',
      title: 'Conversation 250',
      description: '랜덤 대화 주제 생성기.',
      createdAt: '2019-03-31',
      thumbnail: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/conv250.png',
      href: 'http://conv-250.s3-website.ap-northeast-2.amazonaws.com/',
      github: 'https://github.com/Johnyworld/conv250',
      hasOwnPage: true,
    },
    {
      id: 'rpg-moving',
      title: 'RPG Moving',
      description: '캐릭터 이동 시뮬레이터. 방향 키보드를 눌러보세요.',
      createdAt: '2019-03-30',
      thumbnail:
        'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/slider/thumbnail/pc/rpg-moving.jpg',
      href: 'http://rpg-moving.s3-website.ap-northeast-2.amazonaws.com/',
      hasOwnPage: true,
    },
    {
      id: 'masonry',
      title: 'Masonry Grid',
      description: 'Masonry Grid 구현 습작.',
      createdAt: '2018-12-13',
      thumbnail: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/masonry.png',
      href: 'http://jw-masonry-grid.s3-website.ap-northeast-2.amazonaws.com/',
      github: 'https://github.com/Johnyworld/masonlygrid',
      hasOwnPage: true,
    },
    {
      id: 'dow',
      title: 'Dead of winter cross cards deck',
      description: '보드게임 <데드 오브 윈터> 플레이를 돕기 위한 애드온.',
      createdAt: '2018-06-28',
      thumbnail: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/dow.png',
      href: 'http://dow-crossroad.s3-website.ap-northeast-2.amazonaws.com/',
      github: 'https://github.com/Johnyworld/dowcrossroad',
      hasOwnPage: true,
    },
    {
      id: 'bang-card-picker',
      title: 'Bang card picker',
      description: '보드게임 <뱅> 플레이를 돕기 위한 애드온.',
      createdAt: '2018-06-12',
      thumbnail:
        'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/bangcards.png',
      href: 'http://bang-pickcard.s3-website.ap-northeast-2.amazonaws.com/',
      github: 'https://github.com/Johnyworld/bang-cardpicker',
      hasOwnPage: true,
    },
    {
      id: 'supermariojump',
      title: 'Super Mario jump!',
      description: '제이쿼리 습작.',
      createdAt: '2017-12-01',
      thumbnail:
        'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/slider/thumbnail/pc/mario-jump.jpg',
      href: 'https://supermariojump.vercel.app/',
      github: 'https://github.com/Johnyworld/supermariojump',
      hasOwnPage: true,
    },
  ];
};
