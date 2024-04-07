import { Icon } from '@iconify/react';
import { Popover, PopoverTrigger, PopoverContent, Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const Content = () => {
  const { trackList, updateCurrentIndex } = audioStore((state) => ({
    trackList: state.trackList,
    updateCurrentIndex: state.updateCurrentIndex,
  }));

  return (
    <div className="w-[400px] h-[400px] ">
      <div className="flex justify-end px-5 pt-3  inline-block ">
        <span className="cursor-pointer flex items-center gap-1 hover:bg-foreground/10 p-1 rounded-lg transition duration-300 ease-in-out">
          <Icon icon="mynaui:trash" className="text-base" />
          清空
        </span>
      </div>
      <div className="flex flex-col">
        {trackList.map((song, index) => (
          <div
            key={song.id}
            className="flex items-center justify-between p-2 m-2 rounded-lg dark:hover:bg-gray-200/20 transition duration-300 ease-in-out"
          >
            <div className="flex items-center">
              <Image
                src={song.cover + '?param=40y40'}
                alt={song.title}
                className="w-10 h-10 object-cover mr-4 rounded"
              />
              <div>
                <div className="text-sm font-semibold text-foreground/90">{song.title}</div>
                <div className="text-small text-xs text-foreground/80"> {formatMillisecondsToTime(song.time)}</div>
              </div>
            </div>
            {/* 暂停、播放 */}
            <Button
              isIconOnly
              className="w-auto h-auto hover:bg-foreground/10"
              radius="full"
              variant="light"
              onPress={() => updateCurrentIndex(index)}
            >
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
