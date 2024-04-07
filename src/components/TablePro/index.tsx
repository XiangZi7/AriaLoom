import { useRef, useState, FC } from 'react';

import { Icon } from '@iconify/react';
import { Avatar, Button } from '@nextui-org/react';

import { Song } from '@/model/interface/song';
const mockSongsData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  title: `Song ${index + 1 + Math.random() * 1000000000}`,
  artist: `歌手${index + 1}`,
  artistImageUrl: '/path/to/image1.jpg',
  album: `专辑${index + 1}`,
  duration: '3:45',
}));

interface TableProProps {
  className?: string;
}

const TablePro: FC<TableProProps> = ({ className }) => {
  const [songs] = useState<Song[]>(mockSongsData);
  const [loading] = useState<boolean>(false);

  const observedElement = useRef<HTMLLIElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleIntersect = (pageNum: number) => {
    // console.log('🚀 => pageNum:', pageNum);
  };

  useIntersectionObserver(
    observedElement,
    {
      initialPageNum: 1, // 初始页码
      pageSize: 10, // 页面大小
      threshold: 0.1, // 可选阈值参数
    },
    handleIntersect,
  );

  return (
    <div className={`flex ${className}`}>
      <div className="flex flex-col flex-1 ">
        <ul className="w-full ">
          {songs.map((song) => (
            <li
              ref={observedElement}
              key={song.id}
              className="hover:bg-default-400/20 hover:dark:bg-default-500/30 hover:opacity-80 p-2 mb-2 rounded-xl  flex items-center gap-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex-none w-10 h-10">
                <Avatar src={song.artistImageUrl} alt={song.artist} radius="sm" className="w-full h-full" />
              </div>
              {/* 将标题和歌手信息放在同一个容器内以使它们垂直排列 */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                {/* 为标题指定宽度和省略符号 */}
                <div className="truncate text-small">{song.title}</div>
                <div className="truncate text-sm text-gray-500 text-small">{song.artist}</div>
              </div>
              {/* 专辑信息和时长各占据一部分固定空间 */}
              <div className="w-48 truncate text-small">{song.album}</div>
              <div className="flex-none w-30 text-small">{song.duration}</div>
              <div className="w-40 justify-end w-full flex">
                <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                  <Icon icon="material-symbols:play-circle-outline" className="text-2xl" />
                </Button>
                <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                  <Icon icon="ph:film-strip" className="text-2xl" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="m-5">{loading ? <div>加载中...</div> : <button className="btn">加载更多</button>}</div>
      </div>
    </div>
  );
};

export default TablePro;
