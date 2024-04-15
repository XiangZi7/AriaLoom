import { FC, createContext, useState, ReactNode, useContext } from 'react';

import Notification from '@/components/Notification';

interface Notification {
  title?: string;
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface NotificationContextType {
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: string) => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return context;
};

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    title: string,
    message: string,
    type: Notification['type'] = 'info',
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications([...notifications, { id, title, message, type }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    );
  };

  return (
    <NotificationContext.Provider
      value={{ addNotification, removeNotification }}
    >
      <div className="fixed top-5 right-5 space-y-2 z-50">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};
