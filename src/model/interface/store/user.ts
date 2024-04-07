export interface UserInfo {
  avatarUrl?: string;
  nickname?: string;
  userId?: number;
}
export interface UserState {
  userInfo: UserInfo | null;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  updateUserInfo: (userInfo: UserInfo) => void;
  refreshLoginStatus: () => void;
}
