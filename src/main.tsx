import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';

import { MusicPlayerProvider } from '@/components/musicPlayerContext/index.tsx';

import App from './App.tsx';

import '@/style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MusicPlayerProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </MusicPlayerProvider>
  </React.StrictMode>,
);
