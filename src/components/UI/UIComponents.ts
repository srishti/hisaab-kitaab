import React from "react";

export interface UiButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: () => void;
}

export interface UiSidebarListItem
  extends React.LiHTMLAttributes<HTMLLIElement> {
  id: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface UiSidebar {
  menuList: UiSidebarListItem[];
}
