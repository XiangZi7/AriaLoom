export interface songState {
  id: number;
  name: string;
  ar: Array<{ id: number; name: string }>;
  al: { id: number; name: string; picUrl: string };
  dt: number;
  mv: number;
}

export interface songListState {
  id: number;
  coverImgUrl: string;
  name: string;
}
