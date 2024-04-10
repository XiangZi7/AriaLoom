import { useState } from 'react';

import { Icon } from '@iconify/react';
import { Progress, Button } from '@nextui-org/react';

const DownLoad = () => {
  // 模拟音乐文件数据
  const [musics, setMusics] = useState([
    {
      id: 1,
      name: 'Music Title 1',
      type: 'mp3',
      size: '3.2MB',
      status: 'download',
    }, // 状态可以是 "download", "pause", "completed"
  ]);
  const [value] = useState(50);

  // 处理下载、暂停和下载完成的逻辑
  const HandleAction = (id: number, action: string) => {
    setMusics(
      musics.map((music) =>
        music.id === id ? { ...music, status: action } : music,
      ),
    );
  };
  return (
    <div className="p-4 flex flex-col ">
      {musics.map((music) => (
        <div
          key={music.id}
          className="shadow bg-default-400/20 dark:bg-default-500/30 rounded-2xl w-full py-4 px-8 mb-4 flex items-center justify-between"
        >
          <img
            src="https://via.placeholder.com/60"
            alt="Music Icon"
            className="w-12 h-12 object-cover"
          />
          <div className="flex flex-col ml-4 mr-auto">
            <p className="text-lg font-semibold">
              {music.name}.{music.type}
            </p>
            {music.status === 'completed' ? (
              <p className="text-gray-600">{music.size}</p>
            ) : (
              <Progress
                isStriped
                aria-label="Downloading..."
                size="md"
                value={value}
                label="Lose weight"
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />
            )}
          </div>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
            onClick={() =>
              HandleAction(
                music.id,
                music.status === 'download' ? 'pause' : 'completed',
              )
            }
          >
            <Icon
              icon={
                music.status === 'download'
                  ? 'ic:round-pause-circle'
                  : music.status === 'pause'
                    ? 'tabler:arrow-bar-to-down'
                    : music.status === 'completed'
                      ? 'teenyicons:tick-circle-outline'
                      : ''
              }
              className="text-2xl"
            />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DownLoad;
