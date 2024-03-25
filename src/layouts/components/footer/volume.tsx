import { Icon } from "@iconify/react";
import { FC } from "react";
import { Tooltip, Slider } from "@nextui-org/react";
interface VolumeProps {
  className?: string; // "?" 表示这个属性是可选的
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
  return (
    <>
      <Slider
        aria-label="Music progress"
        classNames={{
          track: "bg-default-500/30",
          thumb: "w-4 h-4 after:w-2 after:h-2 after:bg-foreground",
        }}
        className="w-[100px]"
        color="foreground"
        defaultValue={33}
        size="sm"
      />
    </>
  );
};

export default Volume;
