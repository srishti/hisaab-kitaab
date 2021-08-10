import { UiButton } from "../UIComponents";
import styles from "./Button.module.scss";

const Button: React.FC<UiButton> = (props) => {
  // button styles CSS classes
  let buttonStyleClasses = [styles["button"]];
  if (props.className) {
    buttonStyleClasses.unshift(props.className); // insert passed style class as prop in the beginning
  }

  return (
    <button
      id={props.id}
      className={buttonStyleClasses.join(" ")}
      type={props.type}
      name={props.name}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
