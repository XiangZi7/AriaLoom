export interface ModalHandle {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}
export interface LyricLine {
  time: number; // 歌词对应的时间（毫秒）
  text: string; // 歌词文本
}
export interface MergedLyricLine extends LyricLine {
  translation?: string; // 可选的翻译文本
  romaLrc?: string; // 可选的罗马音歌词
}

interface LyricUserInfo {
  id: number;
  status: number;
  demand: number;
  userid: number;
  nickname: string;
  uptime: number;
}

export interface LyricData {
  lines: MergedLyricLine[];
  lyricUser?: LyricUserInfo; // 歌词贡献者信息
  transUser?: LyricUserInfo; // 翻译贡献者信息
}
