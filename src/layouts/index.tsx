import { Outlet } from 'react-router-dom';

import { ScrollShadow } from '@nextui-org/react';

import Bread from './components/bread';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import SideBar from './components/sidebar';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-black">
      {/* 背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-20  dark:opacity-50" />
      </div>
      <Header />
      <section className="flex flex-1 overflow-hidden z-10">
        <aside className="w-64 overflow-auto p-4 md:flex hidden">
          <SideBar />
        </aside>
        <main className="flex-1 flex flex-col overflow-hidden">
          <Bread />
          <ScrollShadow className="flex-1 overflow-auto p-4">
            <Outlet />
          </ScrollShadow>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
