// import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ThemeState } from '@/model/interface/store/theme';

// 创建状态存储
// const useThemeStore = create<ThemeState>((set) => ({
//   isDark: 'isLight',
//   //更新整个对象
//   // updateUserInfo: (userInfo) => set({ userInfo }), //合并userInfo
//   //更新对象中某个属性
//   // updateAge: (age) =>
//   //   set(
//   //     produce((state) => {
//   //       state.userInfo.age = age;
//   //     }),
//   //   ),
//   // //更新原始数据类型
//   // updateToken: (token) => set({ token }),
//   updateDark: (isDark) => set({ isDark }),
// }));
// 创建状态存储
const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: 'isLight',
      updateDark: (isDark) => set({ isDark }),
    }),
    {
      name: 'ThemeStore', //存储的名称
      // storage: createJSONStorage(() => sessionStorage), //存储到sessionStorage
      partialize: (state) => ({ isDark: state.isDark }), //值存储isDark字段，而非整个数据
    },
  ),
);
export default useThemeStore;
