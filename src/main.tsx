import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import { MusicPlayerProvider } from '@/context/MusicPlayerContext';
import { NotificationProvider } from '@/context/NotificationContext';
import '@/style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotificationProvider>
      <MusicPlayerProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </MusicPlayerProvider>
    </NotificationProvider>
  </React.StrictMode>,
);
