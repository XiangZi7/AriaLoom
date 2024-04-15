import { FC } from 'react';

import { Icon } from '@iconify/react';
import { Tooltip, Slider } from '@nextui-org/react';

import { useSharedMusicPlayer } from '@/context/MusicPlayerContext.tsx';

interface VolumeProps {
  className?: string;
}

const Volume: FC<VolumeProps> = ({ className }) => {
  return (
    <div className={className}>
      <Tooltip placement="top-end" showArrow={true} content={<ProgressBar />}>
        <Icon icon="bi:volume-up" className="cursor-pointer text-xl" />
      </Tooltip>
    </div>
  );
};

const ProgressBar = () => {
  const { changeVolume, volume } = useSharedMusicPlayer();

  return (
    <>
      <Slider
        aria-label="Music progress"
        classNames={{
          track: 'bg-default-500/30',
          thumb: 'w-4 h-4 after:w-2 after:h-2 after:bg-foreground',
        }}
        className="w-[100px]"
        color="foreground"
        maxValue={1}
        step={0.01}
        value={volume}
        onChange={(val) => changeVolume(val as number)}
        size="sm"
      />
    </>
  );
};

export default Volume;
