import { ReactNode } from 'react';

import { PlayMode } from '@/model/enum/PlayMode';
import { LyricData } from '@/model/interface/player';

export interface Track {
  id: number;
  title: string;
  singer: string;
  album: string;
  cover: string;
  source: string;
  time: number;
  mv?: number; // 可选属性
  Lyric?: {
    lrc?: string;
    tlyric?: string;
  };
}

export interface AudioState {
  count: number;
  trackList: Track[];
  currentIndex: number;
  updateTrackLists: (trackList: Track) => void;
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
  activeLyricIndex: number;
  lyrics: LyricData;
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
