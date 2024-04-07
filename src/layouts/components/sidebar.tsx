import { NavLink } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Badge } from '@nextui-org/react';
const SideBar = () => {
  const SideBarData = [
    {
      Title: 'Home',
      icon: 'bx:home',
      router: '/home',
      count: 0,
      children: [
        {
          Title: 'Music',
          icon: 'streamline:music-note-2',
          router: '/music',
          count: 0,
        },
        {
          Title: 'MV',
          icon: 'akar-icons:music-album',
          router: '/mv',
          count: 0,
        },
        {
          Title: 'MiniPlayer',
          icon: 'bi:music-player',
          router: '/mini',
          count: 0,
        },
      ],
    },
    {
      Title: 'Settings',
      icon: 'ic:sharp-settings',
      router: '/theme',
      count: 0,
      children: [
        {
          Title: 'Theme',
          icon: 'twemoji:paintbrush',
          router: '/theme',
          count: 0,
        },
        {
          Title: 'DownLoad',
          icon: 'tabler:arrow-bar-to-down',
          router: '/download',
          count: 1,
        },
      ],
    },
  ];

  return (
    <>
      {/* sidebar */}
      <ul>
        {SideBarData.map((item, idx) => (
          <li key={idx} className="mb-4">
            <NavLink
              to={item.router}
              color="foreground"
              className="flex items-center w-full gap-2 rounded-md  text-sm font-medium relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-foreground no-underline p-3 hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full after:h-full after:rounded-xl after:transition-background after:absolute hover:after:bg-foreground/10"
            >
              <Icon className="text-xl" icon={item.icon} />
              {item.Title}
            </NavLink>
            {item.children && (
              <ul className="pl-4">
                {item.children.map((child, childIdx) => (
                  <li key={childIdx}>
                    <NavLink
                      to={child.router}
                      color="foreground"
                      className="flex items-center w-full gap-2 rounded-md  text-sm font-medium relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-foreground no-underline p-3 hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full after:h-full after:rounded-xl after:transition-background after:absolute hover:after:bg-foreground/10"
                    >
                      <Icon className="text-sm" icon={child.icon} />
                      <Badge
                        size="sm"
                        color="danger"
                        content={child.count}
                        isInvisible={child.count > 0 ? false : true}
                        shape="circle"
                      >
                        {child.Title}
                      </Badge>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
