import { Button, Slider, Avatar } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer className="flex h-20 shrink-0 items-center border-t dark:border-default-100 px-4 overflow-hidden">
        <div className="grid w-full grid-cols-3 items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              radius="sm"
              alt="Avatar"
              size="lg"
              src="https://nextui.org/images/album-cover.png"
            />
            <div className="grid gap-0.5">
              <p className="text-sm font-semibold">Nick Drake</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Pink Moon
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center justify-center">
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
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Icon icon="ic:round-play-circle" className="text-4xl" />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Icon icon="ic:round-pause-circle" className="text-4xl" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Icon icon="mingcute:skip-forward-fill" className="text-2xl" />
              </Button>
            </div>
            <Slider
              size="sm"
              step={0.01}
              maxValue={1}
              minValue={0}
              aria-label="Temperature"
              defaultValue={0.2}
              className="max-w-md"
            />
          </div>
          <div className="flex items-center gap-4 justify-end">
            <Icon icon="ph:playlist" className="cursor-pointer text-xl" />
            <Icon icon="bi:volume-up" className="cursor-pointer text-xl" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
