import React from "react";

export interface UiButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  primary?: boolean;
  onClick?: React.MouseEventHandler;
}

interface UiInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}

interface UiLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  value: string | readonly string[] | number;
}

export interface UiTextbox {
  className?: string;
  input: UiInput;
  label?: UiLabel;
}
