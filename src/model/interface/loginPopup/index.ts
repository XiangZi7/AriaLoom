export interface LoginPopupHandles {
  openModal: () => void;
  closeModal: () => void;
}

// eslint-disable-next-line no-unused-vars
export type QrCallback = (isAuthorized: boolean) => void;

// 登陆状态模型
export interface ResLoginStatus {
  avatarUrl?: string;
  nickname?: string;
  message?: string;
}
