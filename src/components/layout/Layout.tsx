import { useState, type ReactNode } from "react";
import { Drawer } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-canvas">
      <aside className="hidden lg:block w-60 shrink-0 bg-white border-r border-gray-100 overflow-y-auto">
        <Sidebar />
      </aside>

      <Drawer
        placement="left"
        size={240}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        closable={false}
        styles={{ body: { padding: 0 } }}
        className="lg:hidden"
      >
        <Sidebar onNavigate={() => setDrawerOpen(false)} />
      </Drawer>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 sm:h-20 shrink-0 bg-white border-b border-gray-100">
          <Header onOpenSidebar={() => setDrawerOpen(true)} />
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
