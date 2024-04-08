import { songState } from '@/model/interface/search';

export interface playListState {
  coverImgUrl?: string;
  name?: string;
  creator?: {
    avatarUrl?: string;
    nickname?: string;
  };
  description?: string;
  tags?: string[];
  tracks?: songState[]; // 假设 tracks 可以是 undefined
  id?: number;
  createTime?: number; // 同理，假设可以是 undefined
  playCount?: number; // 注意这里去掉了 [string, number]，改为单个 number 或许更有意义
  subscribedCount?: number;
  shareCount?: number;
  trackCount?: number;
  commentCount?: number;
}
