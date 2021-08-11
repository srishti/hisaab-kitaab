import React from "react";

export interface UiSidebarListItem
  extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean | undefined;
  className?: string | undefined;
  id: string;
  value: React.LiHTMLAttributes<HTMLLIElement>["value"];
  onClick?: React.MouseEventHandler | undefined;
}

export interface UiSidebar {
  isVisible?: boolean | undefined;
  menuList: UiSidebarListItem[];
}
