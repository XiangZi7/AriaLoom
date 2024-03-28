import { Icon } from '@iconify/react';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const Content = () => {
  const songs = [
    {
      id: 1,
      cover: 'cover_url_1',
      name: 'Song Name 1',
      duration: '3:45',
    },
    {
      id: 2,
      cover: 'cover_url_2',
      name: 'Song Name 2',
      duration: '4:20',
    },
    {
      id: 3,
      cover: 'cover_url_3',
      name: 'Song Name 3',
      duration: '5:00',
    },
  ];
  return (
    <div className="w-[400px] h-[400px] ">
      <div className="flex justify-end px-5 pt-3  inline-block ">
        <span className="cursor-pointer flex items-center gap-1 hover:bg-foreground/10 p-1 rounded-lg transition duration-300 ease-in-out">
          <Icon icon="mynaui:trash" className="text-base" />
          清空
        </span>
      </div>
      <div className="flex flex-col">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between p-2 m-2 rounded-lg dark:hover:bg-gray-200/20 transition duration-300 ease-in-out"
          >
            <div className="flex items-center">
              <img src={song.cover} alt={song.name} className="w-12 h-12 object-cover mr-4 rounded" />
              <div>
                <div className="text-lg font-bold">{song.name}</div>
                <div>{song.duration}</div>
              </div>
            </div>
            {/* 暂停、播放 */}
            <Button isIconOnly className="w-auto h-auto hover:bg-foreground/10" radius="full" variant="light">
              <Icon icon="ic:round-play-circle" className="text-2xl" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CurrentPlay = () => {
  return (
    <div>
      <Popover placement="top-end">
        <PopoverTrigger>
          <Icon icon="ph:playlist" className="cursor-pointer text-xl" />
        </PopoverTrigger>
        <PopoverContent>{<Content />}</PopoverContent>
      </Popover>
    </div>
  );
};

export default CurrentPlay;
