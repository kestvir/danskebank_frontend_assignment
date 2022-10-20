import { NavLink } from "react-router-dom";

import { SidebarLink as SidebarLinkType } from "./Sidebar";

type SidebarLinkProps = {
  link: SidebarLinkType;
};

export const SidebarLinkItem = ({ link }: SidebarLinkProps) => (
  <li className="sidebar__list-item">
    <NavLink
      end
      className={({ isActive }) =>
        `sidebar__link sidebar__link${isActive ? "--active" : ""}`
      }
      to={link.to}
    >
      {link.label}
    </NavLink>
  </li>
);
