import { SidebarLinkItem } from "./SidebarLinkItem";

export type SidebarLink = {
  to: string;
  label: string;
};

export type SidebarLinks = Array<SidebarLink>;

export type SidebarProps = {
  links: SidebarLinks;
};

export const Sidebar = ({ links }: SidebarProps) => (
  <nav className="sidebar">
    <ul role="list">
      {links.map((link) => (
        <SidebarLinkItem key={link.to} link={link} />
      ))}
    </ul>
  </nav>
);
