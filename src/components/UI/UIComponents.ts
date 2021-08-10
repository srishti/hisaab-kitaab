import React from "react";

export interface UiButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: () => void;
}
