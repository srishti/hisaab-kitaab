import React from "react";

export interface UiButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
  primary?: boolean | undefined;
  onClick?: React.MouseEventHandler | undefined;
}

interface UiInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string | undefined;
  id?: string | undefined;
}

interface UiLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string | undefined;
  value: string | ReadonlyArray<string> | number;
}

export interface UiTextbox {
  className?: string | undefined;
  input: UiInput;
  label?: UiLabel | undefined;
}
