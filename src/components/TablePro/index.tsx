import { useState, useEffect, useRef } from "react";
import { Song } from "@/interface/song";
import { Avatar, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
const mockSongsData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  title: `Song ${index + 1 + Math.random() * 1000000000}`,
  artist: `歌手${index + 1}`,
  artistImageUrl: "/path/to/image1.jpg",
  album: `专辑${index + 1}`,
  duration: "3:45",
}));

export default function TablePro() {
  const [songs, setSongs] = useState<Song[]>(mockSongsData);
  const [loading, setLoading] = useState<boolean>(false);

  // useRef的类型注解
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // 加载更多歌曲，这个例子中模拟延迟加载
  const loadMoreSongs = () => {
    setLoading(true);
    setTimeout(() => {
      const newSongs: Song[] = Array.from({ length: 10 }, (_, index) => ({
        id: songs.length + index,
        title: `Song ${songs.length + index}`,
        artist: `歌手${songs.length + index + 1}`,
        artistImageUrl: "/path/to/image1.jpg",
        album: `专辑${songs.length + index + 1}`,
        duration: "3:45",
      }));
      setSongs([...songs, ...newSongs]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadMoreSongs();
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    // 清理函数
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [songs]);

  return (
    <div className="flex">
      <div className="flex flex-col flex-1 w-4/5">
        <ul className="w-full ">
          {songs.map((song) => (
            <li
              key={song.id}
              className="bg-default-400/20 dark:bg-default-500/30 hover:opacity-80 p-4 mb-2 mx-2 rounded-lg shadow flex items-center gap-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex-none w-12 h-12">
                <Avatar
                  src={song.artistImageUrl}
                  alt={song.artist}
                  className="w-full h-full"
                />
              </div>
              {/* 将标题和歌手信息放在同一个容器内以使它们垂直排列 */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                {/* 为标题指定宽度和省略符号 */}
                <div className="truncate text-small">{song.title}</div>
                <div className="truncate text-sm text-gray-500 text-small">
                  {song.artist}
                </div>
              </div>
              {/* 专辑信息和时长各占据一部分固定空间 */}
              <div className="w-48 truncate text-small">{song.album}</div>
              <div className="flex-none w-30 text-small">{song.duration}</div>
              <div className="w-40 justify-end w-full flex">
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <Icon
                    icon="material-symbols:play-circle-outline"
                    className="text-2xl"
                  />
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <Icon icon="ph:film-strip" className="text-2xl" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div ref={loadMoreRef} className="m-5">
          {loading ? (
            <div>加载中...</div>
          ) : (
            <button className="btn">加载更多</button>
          )}
        </div>
      </div>
      <div className="w-1/5 md:flex hidden justify-center ">
        <div className="flex">
          <div className="rounded-lg shadow-lg w-64 h-[400px] bg-default-400/20 dark:bg-default-500/30">
            <div className="h-24 bg-default-400/30 rounded-t-lg" />
            <img
              alt="User avatar"
              className="rounded-full -mt-12 border-4 border-white mx-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <div className="text-center mt-2">
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <div className="flex justify-around my-4">
              <div className="text-center">
                <h3 className="font-semibold text-lg">500</h3>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">300</h3>
                <p className="text-gray-500">Following</p>
              </div>
            </div>
            <div className="px-6 py-4">
              <Button className="w-full  text-white rounded-lg">Follow</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
