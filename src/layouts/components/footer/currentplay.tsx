import { Icon } from '@iconify/react';
import { Popover, PopoverTrigger, PopoverContent, Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import './modal.scss';
const Content = () => {
  const { trackList, updateCurrentIndex, currentIndex } = audioStore((state) => ({
    trackList: state.trackList,
    updateCurrentIndex: state.updateCurrentIndex,
    currentIndex: state.currentIndex,
  }));

  return (
    <div className="w-[400px] h-[400px] ">
      <div className="flex justify-end px-5 pt-3">
        <span className="cursor-pointer flex items-center gap-1 hover:bg-foreground/10 p-1 rounded-lg transition duration-300 ease-in-out">
          <Icon icon="mynaui:trash" className="text-base" />
          清空
        </span>
      </div>
      <div className="flex flex-col">
        {trackList.map((song, index) => (
          <div
            key={song.id}
            className="flex items-center justify-between p-2  rounded-lg dark:hover:bg-gray-200/20 transition duration-300 ease-in-out"
          >
            <div className="flex items-center">
              {currentIndex == index && (
                <div className="w-7 flex justify-start">
                  <div className="loading h-[32px] ">
                    <div className="load" />
                    <div className="load" />
                    <div className="load" />
                    <div className="load" />
                  </div>
                </div>
              )}
              {currentIndex != index && <div className="w-7">{index + 1}</div>}
              <Image src={song.cover + '?param=30y30'} alt={song.title} className="w-8 h-8 object-cover mr-4 rounded" />
              <div>
                <div className="text-xs font-semibold text-foreground/90">{song.title}</div>
                <div className="text-xs text-foreground/60"> {formatMillisecondsToTime(song.time)}</div>
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
