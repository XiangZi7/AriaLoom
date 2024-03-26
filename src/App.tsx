import LayoutsRouters from "@/routers";
import { HashRouter } from "react-router-dom";
import { UseTheme } from "@/hooks/useTheme";
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
