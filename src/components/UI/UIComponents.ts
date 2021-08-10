export interface UiButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  onClick: () => void;
}
