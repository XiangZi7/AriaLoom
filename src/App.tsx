import { HashRouter } from 'react-router-dom';

import { UseTheme } from '@/hooks/useTheme';
import LayoutsRouters from '@/routers';
function App() {
  const { switchDark } = UseTheme();
  switchDark();
  return (
    <>
      <HashRouter>
        <LayoutsRouters />
      </HashRouter>
    </>
  );
}

export default App;