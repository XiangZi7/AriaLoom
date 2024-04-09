// 假设的simiMV和mvUrl响应类型
export interface SimiMV {
  id: number;
  name: string;
  cover: string;
  artistName: string;
  duration: number;
  playCount: number;
}

export interface MVUrl {
  url: string;
}

interface CommentUser {
  avatarUrl: string;
  nickname: string;
}

interface Comment {
  commentId: number;
  user: CommentUser;
  content: string;
  timeStr: string;
  ipLocation: { location: string };
}

export interface CommentsList {
  total: number;
  comments: Comment[];
}

// mvDetail API 响应类型
interface Artist {
  id: number;
  name: string;
  img1v1Url: string;
}

export interface MVDetail {
  name: string;
  artists: Artist[];
  desc: string;
}
