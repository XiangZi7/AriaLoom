import { useRef } from 'react';

import { Icon } from '@iconify/react';
import { Button, Slider, Avatar } from '@nextui-org/react';

import { useSharedMusicPlayer } from '@/components/musicPlayerContext';

import CurrentPlay from './currentplay';
import Modal from './modal';
import Volume from './volume';

import { ModalHandle } from '@/model/interface/player';
const Footer = () => {
  const ModalRef = useRef<ModalHandle>(null);
  const showModal = () => {
    ModalRef.current?.onOpen();
  };

  const {
    isPlaying,
    currentTime,
    togglePlayPause,
    duration,
    track,
    seek,
    nextTrack,
    prevTrack,
  } = useSharedMusicPlayer();

  return (
    <>
      <footer className="flex items-center p-4 z-10">
        <div className="flex flex-col md:grid md:grid-cols-3 md:items-center w-full justify-between space-y-4 md:space-y-0">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Avatar
              radius="sm"
              alt="Avatar"
              size="lg"
              src={track.cover + '?param=60y60'}
              onClick={showModal}
            />
            <div className="grid gap-0.5">
              <p className="text-sm font-semibold text-center md:text-left">
                {track.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
                {track.singer}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center justify-center">
              {/* 上一首 */}
              <Button
                isIconOnly
                className="hover:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={prevTrack}
              >
                <Icon icon="solar:skip-previous-bold" className="text-xl" />
              </Button>
              {/* 暂停、播放 */}
              <Button
                isIconOnly
                className="w-auto h-auto hover:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={togglePlayPause}
              >
                <Icon
                  icon={
                    isPlaying ? 'ic:round-pause-circle' : 'ic:round-play-circle'
                  }
                  className="text-4xl"
                />
              </Button>
              {/* 下一首 */}
              <Button
                isIconOnly
                className="hover:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={nextTrack}
              >
                <Icon
                  icon="solar:skip-previous-bold"
                  className="transform scale-x-[-1] text-xl"
                />
              </Button>
            </div>
            {/* 进度条 */}
            <div className="flex gap-2 w-full items-center">
              <span className="text-small w-10 text-foreground/50">
                {formatMillisecondsToTime(currentTime)}
              </span>
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: 'bg-default-500/30',
                  thumb: 'w-4 h-4 after:w-2 after:h-2 after:bg-foreground',
                }}
                color="foreground"
                value={currentTime}
                maxValue={duration}
                onChange={(val) => seek(val as number)}
                size="sm"
              />
              <span className="text-small w-10 text-foreground/50">
                {formatMillisecondsToTime(duration)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <CurrentPlay />
            <Volume />
          </div>
        </div>
      </footer>
      <Modal ref={ModalRef} />
    </>
  );
};

export default Footer;
