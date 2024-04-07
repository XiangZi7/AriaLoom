// import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { MenuState } from '@/model/interface/store/menu';

const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      Breadcrumbs: true,
      BreadcrumbTtile: 'Home',
      updateBreadcrumbs: (Breadcrumbs) => set({ Breadcrumbs }),
      updateBreadcrumbTtile: (BreadcrumbTtile) => set({ BreadcrumbTtile }),
    }),
    {
      name: 'MenuStore', //存储的名称
    },
  ),
);
export default useMenuStore;
