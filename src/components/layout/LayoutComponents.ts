import React from "react";
import { RoutePath } from "../../routes/routes";

export enum SidebarMenuType {
  Dashboard = "Dashboard",
  Accounts = "Accounts",
  Transactions = "Transactions",
}

export interface UiSidebarListItem
  extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  id: string;
  routePath?: RoutePath;
  value: SidebarMenuType;
  onClick?: React.MouseEventHandler;
}

export interface UiSidebar {
  isVisible?: boolean;
  menuList: UiSidebarListItem[];
}
