import { UiButton } from "../UIComponents";
import styles from "./Button.module.scss";

const Button: React.FC<UiButton> = (props) => {
  // button styles CSS classes
  let styleClasses = [styles["button"]];
  if (props.className) {
    styleClasses.unshift(props.className); // insert passed style class as prop in the beginning
  }

  return (
    <button
      id={props.id}
      className={styleClasses.join(" ")}
      type={props.type}
      name={props.name}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
