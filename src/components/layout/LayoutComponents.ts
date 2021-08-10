import React from "react";

export interface UiSidebarListItem
  extends React.LiHTMLAttributes<HTMLLIElement> {
  id: string;
  value: React.LiHTMLAttributes<HTMLLIElement>["value"];
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface UiSidebar {
  isVisible?: boolean;
  menuList: UiSidebarListItem[];
}
