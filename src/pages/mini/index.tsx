import { useState } from 'react';

import { Icon } from '@iconify/react';
import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react';

import { useSharedMusicPlayer } from '@/components/musicPlayerContext';

const Mini = () => {
  const [liked, setLiked] = useState(false);
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
      <div className="flex relative w-full h-auto bg-gradient-to-tr rounded-2xl items-center justify-center py-14 px-4 lg:px-8">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={track.cover + '?param=185y185'}
                  width="100%"
                />
              </div>
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      {track.title}
                    </h3>
                    <p className="text-small text-foreground/80">
                      {track.singer}
                    </p>
                  </div>
                  <Button
                    isIconOnly
                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                    radius="full"
                    variant="light"
                    onPress={() => setLiked((v) => !v)}
                  >
                    <Icon
                      icon="tabler:heart"
                      className={liked ? ' text-red-500' : ''}
                    />
                  </Button>
                </div>

                <div className="flex flex-col mt-3 gap-1">
                  <Slider
                    aria-label="Music progress"
                    classNames={{
                      track: 'bg-default-500/30',
                      thumb: 'w-2 h-2 after:w-2 after:h-2 after:bg-foreground',
                    }}
                    color="foreground"
                    value={currentTime}
                    maxValue={duration}
                    onChange={(val) => seek(val as number)}
                    size="sm"
                  />
                  <div className="flex justify-between">
                    <p className="text-small">
                      {formatMillisecondsToTime(currentTime)}
                    </p>
                    <p className="text-small text-foreground/50">
                      {formatMillisecondsToTime(duration)}
                    </p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <Icon
                      icon="akar-icons:arrow-repeat"
                      className="text-foreground/80"
                    />
                  </Button>
                  <Button
                    isIconOnly
                    onPress={prevTrack}
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <Icon icon="solar:skip-previous-bold" className="text-xl" />
                  </Button>
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    onPress={togglePlayPause}
                    radius="full"
                    variant="light"
                  >
                    <Icon
                      icon={
                        isPlaying
                          ? 'ic:round-pause-circle'
                          : 'ic:round-play-circle'
                      }
                      className="text-4xl"
                    />
                  </Button>
                  <Button
                    isIconOnly
                    onPress={nextTrack}
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <Icon
                      icon="solar:skip-previous-bold"
                      className="transform scale-x-[-1] text-xl"
                    />
                  </Button>
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <Icon
                      icon="iconamoon:playlist-shuffle-duotone"
                      className="text-foreground/80"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Mini;
