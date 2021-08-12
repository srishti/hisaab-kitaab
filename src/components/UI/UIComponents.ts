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
  label?: UiLabel;
  input: UiInput;
}

interface UiSelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export interface UiSelectOption
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  className?: string;
  value?: string | number;
}

export interface UiDropdown {
  className?: string;
  label?: UiLabel;
  select?: UiSelect;
  options?: UiSelectOption[];
}
