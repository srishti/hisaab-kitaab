import React from "react";

export interface UiSidebarListItem
  extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  className?: string;
  id: string;
  value: React.LiHTMLAttributes<HTMLLIElement>["value"];
  onClick?: React.MouseEventHandler;
}

export interface UiSidebar {
  isVisible?: boolean;
  menuList: UiSidebarListItem[];
}
