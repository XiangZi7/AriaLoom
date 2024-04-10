/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

import {
  MusicPlayerState,
  MusicPlayerProviderProps,
} from '@/model/interface/store/audio';

// 全局共享音乐播放器状态
const MusicPlayerContext = createContext<MusicPlayerState | undefined>(
  undefined,
);

export const MusicPlayerProvider = ({ children }: MusicPlayerProviderProps) => {
  const musicPlayer = useMusicPlayer();

  return (
    <MusicPlayerContext.Provider value={musicPlayer}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useSharedMusicPlayer = (): MusicPlayerState => {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error(
      'useSharedMusicPlayer must be used within a MusicPlayerProvider',
    );
  }
  return context;
};
