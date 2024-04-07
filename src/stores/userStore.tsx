import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { loginStatus } from '@/api';
import { UserState } from '@/model/interface/store/user';

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: false, // 初始状态
      userInfo: null, // 用户信息

      setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
      updateUserInfo: (userInfo) => set({ userInfo }),
      // 刷新登陆状态
      refreshLoginStatus: async () => {
        const { data } = await loginStatus();
        // 更新登陆状态
        const isLoggedIn = data.profile != null;
        set({ isLoggedIn });

        let userInfo = null;
        if (isLoggedIn) {
          // 封装当前登录用户信息
          const { nickname, avatarUrl, userId } = data.profile;
          userInfo = { nickname, avatarUrl, userId };
        }
        set({ userInfo });
      },
    }),
    { name: 'userStore' },
  ),
);

export default useUserStore;
