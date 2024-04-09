import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Avatar, Button } from '@nextui-org/react';

import { urlV1 } from '@/api';
import { songState } from '@/model/interface/search';
import { Track } from '@/model/interface/store/audio';

interface TableProProps {
  className?: string;
  SongsData?: songState[];
  query?: (pageNum: number, pageSize: number) => void;
}

const TablePro: FC<TableProProps> = ({ className, SongsData }) => {
  const { updateTrackLists } = audioStore();
  const navigate = useNavigate();
  function play(item: songState) {
    urlV1(item.id).then(({ data }) => {
      const param: Track = {
        id: item.id,
        title: item.name,
        singer: item.ar.map((ar: any) => ar.name).join(' / '),
        album: item.al.name,
        cover: item.al.picUrl,
        source: data[0].url,
        time: item.dt,
        mv: item.mv,
      };
      updateTrackLists(param);
    });
  }

  return (
    <div className={`flex ${className}`}>
      <div className="flex flex-col flex-1 ">
        <ul className="w-full ">
          {SongsData?.map((song) => (
            <li
              key={song.id}
              className="hover:bg-default-400/20 hover:dark:bg-default-500/30 hover:opacity-80 p-2 mb-2 rounded-xl  flex items-center gap-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-[40%] max-w-[40%] truncate">
                <div className="flex gap-2">
                  <div className="flex-none w-10 h-10">
                    <Avatar src={song.al.picUrl} alt={song.name} radius="sm" className="w-full h-full" />
                  </div>
                  {/* 将标题和歌手信息放在同一个容器内以使它们垂直排列 */}
                  <div className="flex flex-col justify-center ">
                    {/* 为标题指定宽度和省略符号 */}
                    <div className="text-small ">{song.name}</div>
                    <div className="text-xs text-gray-500 ">{song.ar.map((ar) => ar.name).join(' / ')}</div>
                  </div>
                </div>
              </div>

              {/* 专辑信息和时长各占据一部分固定空间 */}
              <div className="flex flex-[25%] max-w-[25%] truncate text-small">{song.al.name}</div>
              <div className="flex flex-[25%] max-w-[25%] text-small">{formatMillisecondsToTime(song.dt)}</div>
              <div className="flex flex-[10%] max-w-[10%] justify-end ">
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={() => play(song)}
                >
                  <Icon icon="material-symbols:play-circle-outline" className="text-2xl" />
                </Button>
                {song.mv != 0 && (
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onPress={() => navigate(`/playmv/${song.mv}`)}
                  >
                    <Icon icon="ph:film-strip" className="text-2xl" />
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TablePro;
