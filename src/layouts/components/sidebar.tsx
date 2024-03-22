import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const sideBar = () => {
  const SideBarData = [
    { Title: "Home", icon: "bx:home", router: "/home" },
    { Title: "Music", icon: "streamline:music-note-2", router: "/music" },
    { Title: "Albums", icon: "akar-icons:music-album", router: "/albums" },
    { Title: "Playlists", icon: "ph:playlist-bold", router: "/playlists" },
    { Title: "Radio", icon: "f7:dot-radiowaves-left-right", router: "/radio" },
    {
      Title: "MiniPlayer",
      icon: "f7:dot-radiowaves-left-right",
      router: "/mini",
    },
  ];
  return (
    <>
      {/* sidebar */}
      <div className="w-52 flex-col border-r border-gray-100 dark:border-r-default-100 md:flex hidden p-4">
        <nav className="flex-1 overflow-auto p-2">
          <div className="grid gap-4">
            {SideBarData.map((item, idx) => (
              <NavLink
                color="foreground"
                className="flex items-center gap-2 rounded-md  text-sm font-medium relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-foreground no-underline p-3 hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full after:h-full after:rounded-xl after:transition-background after:absolute hover:after:bg-foreground/10"
                key={idx}
                to={item.router}
              >
                <Icon className="h-4 w-4" icon={item.icon} />
                {item.Title}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default sideBar;
