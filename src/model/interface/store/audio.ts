import { ReactNode } from 'react';

import { PlayMode } from '@/model/enum/PlayMode';

export interface Track {
  id: string;
  title: string;
  singer: string;
  album: string;
  cover: string;
  source: string;
  time: number;
  mv?: string; // 可选属性
  Lyric?: {
    lrc?: string;
    tlyric?: string;
  };
}

export interface AudioState {
  count: number;
  trackList: Track[];
  currentIndex: number;
  updateTrackLists: (trackList: Track[]) => void;
  updateCurrentIndex: (currentIndex: number) => void;
}

export interface MusicPlayerState {
  isPlaying: boolean;
  track: Track;
  currentIndex: number;
  currentTime: number;
  duration: number;
  playMode: PlayMode;
  volume: number;
  togglePlayPause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seek: (time: number) => void;
  togglePlayMode: () => void;
  changeVolume: (volume: number) => void;
}

export interface MusicPlayerProviderProps {
  children: ReactNode;
}
