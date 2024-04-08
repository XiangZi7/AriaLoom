import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';

import { UseTheme } from '@/hooks/useTheme';
import { UserState } from '@/model/interface/store/user';
import LayoutsRouters from '@/routers';

function App() {
  const { switchDark } = UseTheme();
  switchDark();

  const refreshLoginStatus = userStore((state: UserState) => state.refreshLoginStatus);

  // 获取用户状态
  useEffect(() => {
    refreshLoginStatus();
  }, [refreshLoginStatus]);
  return (
    <>
      <HashRouter>
        <LayoutsRouters />
      </HashRouter>
    </>
  );
}

export default App;
