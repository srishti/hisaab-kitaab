import { UiButton } from "../UIComponents";
import styles from "./Button.module.scss";

const Button: React.FC<UiButton> = (props) => {
  // button styles CSS classes
  let styleClasses = [styles["button"]];
  if (props.primary) {
    styleClasses.unshift(styles["primary"]);
  }
  if (props.className) {
    styleClasses.unshift(props.className); // insert passed style class as prop in the beginning
  }

  return (
    <button
      className={styleClasses.join(" ")}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
