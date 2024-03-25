import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const SideBarData = [
    {
      Title: "Home",
      icon: "bx:home",
      router: "/home",
      children: [
        { Title: "Music", icon: "streamline:music-note-2", router: "/music" },
        { Title: "Albums", icon: "akar-icons:music-album", router: "/albums" },
        { Title: "Playlists", icon: "ph:playlist-bold", router: "/playlists" },
        {
          Title: "Radio",
          icon: "f7:dot-radiowaves-left-right",
          router: "/radio",
        },
        {
          Title: "MiniPlayer",
          icon: "f7:dot-radiowaves-left-right",
          router: "/mini",
        },
      ],
    },

    {
      Title: "Beautify",
      icon: "unjs:theme-colors",
      router: "/theme",
      children: [
        {
          Title: "Theme",
          icon: "twemoji:paintbrush",
          router: "/theme",
        },
      ],
    },
  ];
  return (
    <>
      {/* sidebar */}
      <div className="w-52 flex-col md:flex hidden p-4">
        <nav className="overflow-auto z-10">
          <ul>
            {SideBarData.map((item, idx) => (
              <li key={idx} className="mb-4">
                <NavLink
                  to={item.router}
                  color="foreground"
                  className="flex items-center w-full gap-2 rounded-md  text-sm font-medium relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-foreground no-underline p-3 hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full after:h-full after:rounded-xl after:transition-background after:absolute hover:after:bg-foreground/10"
                >
                  <Icon className="h-3 w-3" icon={item.icon} />
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
                          <Icon className="h-3 w-3" icon={child.icon} />
                          {child.Title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
