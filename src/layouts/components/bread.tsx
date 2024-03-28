import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';
const Bread = () => {
  return (
    <>
      {/* bread */}
      <div className="flex h-14 items-center p-4 md:p-6">
        <div className="flex items-center gap-4 shrink-0 w-14 md:w-20">
          <h1 className="text-lg font-bold dark:opacity-80 dark:text-white">Home</h1>
        </div>
        <div className="flex w-full justify-end items-center gap-2">
          <Button className="rounded-full bg-default-400/20 dark:bg-default-500/20" isIconOnly variant="shadow">
            <Icon icon="charm:search" />
          </Button>
          <Button className="rounded-full bg-default-400/20 dark:bg-default-500/20" isIconOnly variant="shadow">
            <Icon icon="ic:round-notifications-none" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Bread;
