import { Button, Slider, Avatar } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Volume from "./volume";
const Footer = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  return (
    <>
      <footer className="flex items-center p-4 z-10">
        <div className="flex flex-col md:grid md:grid-cols-3 md:items-center w-full justify-between space-y-4 md:space-y-0">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Avatar
              radius="sm"
              alt="Avatar"
              size="lg"
              src="https://nextui.org/images/album-cover.png"
            />
            <div className="grid gap-0.5">
              <p className="text-sm font-semibold text-center md:text-left">
                Nick Drake
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
                Pink Moon
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center justify-center">
              {/* 上一首 */}
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Icon
                  icon="mingcute:skip-forward-fill"
                  className="transform scale-x-[-1] text-2xl"
                />
              </Button>
              {/* 暂停、播放 */}
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={() => setIsPlay(!isPlay)}
              >
                <Icon
                  icon={
                    isPlay ? "ic:round-play-circle" : "ic:round-pause-circle"
                  }
                  className="text-4xl"
                />
              </Button>
              {/* 下一首 */}
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Icon icon="mingcute:skip-forward-fill" className="text-2xl" />
              </Button>
            </div>
            {/* 进度条 */}
            <div className="flex gap-2 w-full items-center">
              <span className="text-small w-10">01:17</span>
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-4 h-4 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <span className="text-small w-10">02:11</span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <Icon icon="ph:playlist" className="cursor-pointer text-xl" />
            {/* <Icon icon="bi:volume-up" className="cursor-pointer text-xl" /> */}
            <Volume />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
