import Header from "./components/header/header";
import SideBar from "./components/sidebar";
import Bread from "./components/bread";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import { ScrollShadow } from "@nextui-org/react";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-20  dark:opacity-50" />
      </div>
      {/* Header */}
      <Header />
      {/* Content Container */}
      <section className="flex flex-col md:flex-row gap-2 h-[calc(100vh-142px)]">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content */}
        <main className="w-full overflow-auto ">
          <Bread />
          <ScrollShadow className="h-[calc(100%-60px)]">
            <Outlet />
          </ScrollShadow>
        </main>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
