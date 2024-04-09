export interface Song {
  id: number;
  title: string;
  artist: string;
  artistImageUrl: string;
  album: string;
  duration: string; // 例如 "3:45"
}

export interface SongListState {
  id: number;
  coverImgUrl: string;
  name: string;
  description: string;
}

export interface MVListState {
  id: number;
  title: string;
  cover: string;
  name: string;
  artistName: string;
}
