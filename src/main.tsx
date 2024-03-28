import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import '@/style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
);
