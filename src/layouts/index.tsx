import Header from "./components/header/header";
import SideBar from "./components/sidebar";
import Bread from "./components/bread";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-black transition-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-20  dark:opacity-50" />
      </div>
      {/* Header */}
      <Header />

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row gap-2 flex-grow">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content */}
        <main className="flex-1">
          <Bread />
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
