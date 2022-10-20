import { Outlet } from "react-router";

import { Sidebar, SidebarLinks } from "@/components";

// IRL would most likely get this from BE.
const links: SidebarLinks = [
  { to: "about", label: "About" },
  { to: "/", label: "Films" },
];

export const MainLayout = () => (
  <div className="container-fluid">
    <div className="main-grid">
      <Sidebar links={links} />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);
