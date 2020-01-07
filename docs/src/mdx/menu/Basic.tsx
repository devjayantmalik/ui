import React from 'react';
import { Menu, MenuItemType } from 'oah-ui';
import { Link } from 'gatsby';

function Basic() {
  const items: MenuItemType[] = [
    {
      title: 'Getting Started',
      link: { to: '/getting-started' },
    },
    {
      title: 'Guides',
      link: '/guides',
      children: [
        {
          title: 'Start new project',
          link: { to: '/guides/start-new-project' }, // goes into @reach/router `router Link`
        },
        {
          title: 'Github Repository',
          url: 'https://github.com/AhmedElywa/oah-ui', // goes directly into `href` attribute
        },
      ],
    },
    {
      title: 'Components',
      link: '/components',
      children: [
        {
          title: 'Navigation',
          group: true,
        },
        {
          title: 'Menu',
          link: { to: '/components/menu' }, // selected link
        },
      ],
    },
    {
      title: 'Themes',
      link: { to: '/themes' },
    },
  ];
  return <Menu style={{ maxWidth: '20rem', margin: '0 auto' }} items={items} Link={Link} />;
}

export default Basic;