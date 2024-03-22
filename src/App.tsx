import LayoutsRouters from "@/routers";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <LayoutsRouters />
      </HashRouter>
    </>
  );
}

export default App;
