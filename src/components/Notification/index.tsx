import { FC, useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';

interface NotificationProps {
  title?: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({
  title,
  message,
  type = 'info',
  onClose,
}) => {
  const bgColor = {
    info: 'bg-primary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  }[type];
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 先显示通知
    setShow(true);
    // 设置3秒后自动调用onClose回调函数，并隐藏通知
    const timer = setTimeout(() => {
      setShow(false);
      // 设置一个额外的定时器确保滑出动画完成后再执行onClose
      setTimeout(onClose, 300); // 假设动画持续300ms
    }, 3000);

    // 组件卸载时清除定时器
    return () => {
      clearTimeout(timer);
    };
  }, [message, onClose]);

  return (
    <div
      className={`${show ? 'animate-slide-in' : 'animate-slide-out'}  dark:bg-content1 fixed top-5 right-5 z-50 ${bgColor} text-white rounded-lg shadow-lg`}
      role="alert"
    >
      <Button
        variant="light"
        isIconOnly
        onClick={() => {
          setShow(false);
          setTimeout(onClose, 300); // 假设动画持续300ms
        }}
        className="absolute appearance-none select-none top-1 right-1 rtl:left-1 rtl:right-[unset] p-2 text-foreground-500 rounded-full hover:bg-default-100 active:bg-default-200 tap-highlight-transparent outline-none "
      >
        <Icon icon="material-symbols:close" />
      </Button>
      <div className="px-8 py-4 mx-4">
        <p className="font-bold">{title ?? 'Notification'}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
